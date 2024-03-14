package org.nocountry.walam.main.service.impl;

import org.nocountry.walam.main.model.entity.Card;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.CardRepository;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import static org.nocountry.walam.main.utils.UtilsCard.cardNumberGenerator;
import static org.nocountry.walam.main.utils.UtilsCard.cvvGenerator;

@Service
public class CardServiceImpl implements CardService {

    @Autowired private CardRepository cardRepository;

    @Autowired
    private UserRepository userRepository;

    public void createCard(User user) {
        Card card = Card.builder()
                .active(true)
                .creationDate(LocalDate.now())
                .expirationDate(LocalDate.now().plusYears(3))
                .cardHolder(user.getFirstName() + " " + user.getLastName())
                .cvv(cvvGenerator())
                .build();

        String numberCard = cardNumberGenerator();

        while (cardRepository.existsByCardNumber(numberCard)) {
            numberCard = cardNumberGenerator();
        }

        card.setCardNumber(numberCard);

        user.setCard(card);
        cardRepository.save(card);
        userRepository.save(user);
    }

    @Override
    public boolean existsByCardNumber(String cardNumber) {
        return cardRepository.existsByCardNumber(cardNumber);
    }
}
