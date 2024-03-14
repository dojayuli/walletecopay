package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> findByAccount(Account account);

    // Otras consultas personalizadas si es necesario.
}
