package org.nocountry.walam.main.controller;
import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping("/register")
    public ResponseEntity<?> entityToDTO(@RequestBody Account account) {
        AccountDTO dtoFromEntity = accountService.mapAccountToDTO(account);
        return ResponseEntity.ok("entityToDTO : " + dtoFromEntity);
    }

    @PostMapping("/DTOtoEntity")
    public ResponseEntity<?> DTOtoEntity(@RequestBody AccountDTO accountDTO) {
        Account DTOtoEntity = accountService.mapDTOToAccount(accountDTO);
        return ResponseEntity.ok("DTOtoEntity : " + DTOtoEntity);
    }

    @GetMapping("/")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("Hola testeador, funciona la api");
    }
}
