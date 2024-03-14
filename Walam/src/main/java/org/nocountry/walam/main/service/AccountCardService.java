package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.AccountCard;

import java.util.List;

public interface AccountCardService {

    AccountCard saveAccountCard(AccountCard accountCard);
    void deleteAccountCardById(int id);
    List<AccountCard> getAllAccountCards();
    AccountCard getAccountCardById(int id);

    // Otras operaciones si es necesario.

}
