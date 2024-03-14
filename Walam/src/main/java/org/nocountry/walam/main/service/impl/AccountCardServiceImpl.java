package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.entity.AccountCard;
import org.nocountry.walam.main.model.repository.AccountCardRepository;
import org.nocountry.walam.main.service.AccountCardService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountCardServiceImpl implements AccountCardService {


    private final AccountCardRepository accountCardRepository;

    @Override
    public AccountCard saveAccountCard(AccountCard accountCard) {
        return accountCardRepository.save(accountCard);
    }

    @Override
    public void deleteAccountCardById(int id) {
        accountCardRepository.deleteById(id);
    }

    @Override
    public List<AccountCard> getAllAccountCards() {
        return accountCardRepository.findAll();
    }

    @Override
    public AccountCard getAccountCardById(int id) {
        return accountCardRepository.findById(id).orElse(null);
    }

}
