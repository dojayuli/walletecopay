package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    // Consultas personalizadas si es necesario.
    boolean existsByNumberAccount(String numberAccount);
    boolean existsByCvu(String cvu);

    Account findByNumberAccount(String numberAccount);

    @Query("SELECT CASE WHEN (COUNT(a) > 0) THEN true ELSE false END FROM Account a WHERE a.numberAccount = :numberAccount AND a.balance > 0")
    boolean balanceGreaterThanZero(String numberAccount);
}
