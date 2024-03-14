package org.nocountry.walam.main.controller;

import jakarta.validation.Valid;
import org.nocountry.walam.main.model.entity.Transaction;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@Validated
@RequestMapping("/api/v1")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    /**
     * Obtiene un usuario por su ID.
     *
     * @param transactionRequest the {@link TransactionRequest} that has the account number and amount.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/transfer")
    public ResponseEntity<?> transferToAccount(@Valid @RequestBody TransactionRequest transactionRequest){
        return transactionService.transferToAccount(transactionRequest);
    }

    /**
     * Withdraw the amount.
     *
     * @param withdraw the entity that has the amount to withdraw.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/withdraw")
    public ResponseEntity<?> withdraw(@Valid @RequestBody WithdrawOrDepositRequest withdraw ){
        return transactionService.withdraw(withdraw);
    }

    /**
     * Withdraw the amount.
     *
     * @param deposit the entity that has the amount to deposit.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/deposit")
    public ResponseEntity<?> deposit(@Valid @RequestBody WithdrawOrDepositRequest deposit){
        return transactionService.deposit(deposit);
    }

    @GetMapping(value = "/transactions")
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping(value = "/transaction/{id}")
    public ResponseEntity<Transaction> getById(@PathVariable Integer id) {
        Transaction transaction = transactionService.getTransactionById(id);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

}
