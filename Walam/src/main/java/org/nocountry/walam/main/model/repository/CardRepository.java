package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Integer> {
    boolean existsByCardNumber(String cardNumber);
}
