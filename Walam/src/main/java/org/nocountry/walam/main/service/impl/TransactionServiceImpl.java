package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.controller.TransactionRequest;
import org.nocountry.walam.main.controller.WithdrawOrDepositRequest;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.Transaction;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.enums.TransactionType;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.model.repository.TransactionRepository;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private final TransactionRepository transactionRepository;

    @Autowired
    private final AccountRepository accountRepository;

    @Autowired
    private final UserRepository userRepository;

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransactionById(Integer id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction getTransactionById(Integer id) {return transactionRepository.findById(id).orElse(null);}

    @Transactional
    @Override
    public ResponseEntity<String> transferToAccount(TransactionRequest transactionRequest) {
        Account accountLogged = getAccountOfCurrentUser();

        if (accountLogged != null && accountLogged.getBalance() >= transactionRequest.getAmount()) {
            if(transactionRequest.getDestinyAccount().equals(accountLogged.getNumberAccount())){
                return ResponseEntity.badRequest().body("La cuenta de destino es la misma que la de origen");
            }
            Account destiny = accountRepository.findByNumberAccount(transactionRequest.getDestinyAccount());
            if (destiny != null) {

                // Registrar la transacción
                saveTransaction(accountLogged, destiny, transactionRequest.getAmount());
                // Realizar la transferencia
                performTransfer(accountLogged, destiny, transactionRequest.getAmount());

                return ResponseEntity.ok("Transferencia exitosa");
            }
        }
        return ResponseEntity.badRequest().body("Bad Request");
    }

    @Transactional
    @Override
    public ResponseEntity<?> withdraw(WithdrawOrDepositRequest withdraw) {
        Account account = getAccountOfCurrentUser();
        if(account.getBalance() >= withdraw.getAmount()){
            account.setBalance( account.getBalance() - withdraw.getAmount() );
            Transaction transaction = Transaction.builder()
                    .account(account)
                    .date(LocalDateTime.now())
                    .originAccount(account.getNumberAccount())
                    .destinyAccount(account.getNumberAccount())
                    .amount(withdraw.getAmount())
                    .type(TransactionType.WITHDRAW)
                    .account(account)
                    .build();
            transactionRepository.save(transaction);
            accountRepository.save(account);
            return ResponseEntity.ok("Withdraw Success");
        } else{
            return ResponseEntity.badRequest().body("Not enough balance");
        }
    }

    @Transactional
    @Override
    public ResponseEntity <?> deposit(WithdrawOrDepositRequest deposit) {
        Account account = getAccountOfCurrentUser();
        account.setBalance( account.getBalance() + deposit.getAmount() );
        Transaction transaction = Transaction.builder()
                .account(account)
                .date(LocalDateTime.now())
                .originAccount(account.getNumberAccount())
                .destinyAccount(account.getNumberAccount())
                .amount(deposit.getAmount())
                .account(account)
                .type(TransactionType.DEPOSIT)
                .build();
        transactionRepository.save(transaction);
        accountRepository.save(account);
        return ResponseEntity.ok("Deposit Success");
    }

    @Transactional
    private void performTransfer(Account origin, Account destiny, double amount) {
        origin.setBalance(origin.getBalance() - amount);
        destiny.setBalance(destiny.getBalance() + amount);
        accountRepository.save(origin);
        accountRepository.save(destiny);
    }

    @Transactional
    private void saveTransaction(Account origin, Account destiny, double amount) {
        Transaction transactionOrigin = Transaction.builder()
                .date(LocalDateTime.now())
                .type(TransactionType.WITHDRAW)
                .originAccount(origin.getNumberAccount())
                .destinyAccount(destiny.getNumberAccount())
                .amount(amount).build();
        origin.addTransaction(transactionOrigin);
        transactionRepository.save(transactionOrigin);

        Transaction transactionDestiny = Transaction.builder()
                .date(LocalDateTime.now())
                .type(TransactionType.DEPOSIT)
                .originAccount(origin.getNumberAccount())
                .destinyAccount(destiny.getNumberAccount())
                .amount(amount).build();
        destiny.addTransaction(transactionDestiny);
        transactionRepository.save(transactionDestiny);
    }

    @Transactional
    public Account getAccountOfCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null ){
            Object principal = authentication.getPrincipal();
            if(principal instanceof UserDetails){
                String userName = ((UserDetails) principal).getUsername();
                User userInDb = userRepository.findByUsername(userName).get();
                return userInDb.getAccount();
            }
        }
        return null;
    }
}
