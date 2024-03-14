package org.nocountry.walam.main.service.impl;

//import org.nocountry.walam.main.model.dto.AccountDTO;
//import org.nocountry.walam.main.model.entity.Account;
//import org.nocountry.walam.main.model.mapper.AccountMapper;
//import org.nocountry.walam.main.service.AccountService;
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class AccountServiceImpl extends AccountService implements
//        AccountMapper {
//    @Override
//    public AccountDTO accountToAccountDTO(Account account) {
//        return null;
//    }
//
//    @Override
//    public Account accountDTOToAccount(AccountDTO accountDTO) {
//        return null;
//    }
//}

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.mapper.AccountMapper;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.service.AccountService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }
    public void deleteAccountById(int id) {
        accountRepository.deleteById(id);
    }
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }
    public Account getAccountById(int id) {
        return accountRepository.findById(id).orElse(null);
    }
    public AccountDTO mapAccountToDTO(Account account) {
        return AccountMapper.INSTANCE.accountToAccountDTO(account);}
    public Account mapDTOToAccount(AccountDTO accountDTO) {
        return AccountMapper.INSTANCE.accountDTOToAccount(accountDTO);}

    public boolean existsByNumberAccount(String numberAccount) {
        return accountRepository.existsByNumberAccount(numberAccount);
    }
    public boolean existsByCvu(String cvu){
        return accountRepository.existsByCvu(cvu);
    }

    @Override
    public void depositToAccount(String numberAccount, Double amount){
        if(amount > 0.0 && accountRepository.existsByNumberAccount(numberAccount)){
            Account accountInDb = accountRepository.findByNumberAccount(numberAccount);
            accountInDb.setBalance( accountInDb.getBalance() + amount);
        }
    }

}