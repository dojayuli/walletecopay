package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.CardRepository;

public interface CardService {
    boolean existsByCardNumber(String cardNumber);

    void createCard(User user);
}
