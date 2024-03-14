package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.service.CardService;
import org.nocountry.walam.main.service.UserService;
import org.nocountry.walam.main.service.impl.CardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class CardController {

    @Autowired
    private CardService cardService;
    @Autowired
    private UserService userService;

    @PostMapping("/card/create")
    public ResponseEntity<?> createCard(Authentication authentication) throws Exception {
        User user = userService.getByUsername(authentication.getName());
            cardService.createCard(user);
            return ResponseEntity.ok("Card created");
    }
}
