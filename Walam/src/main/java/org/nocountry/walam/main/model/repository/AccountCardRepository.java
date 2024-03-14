package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.AccountCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountCardRepository extends JpaRepository<AccountCard, Integer> {
    // Consultas personalizadas si es necesario.
}
