package org.nocountry.walam.main.controller;

import jakarta.persistence.Table;
import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.UpdateUserDTO;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.enums.Country;
import org.nocountry.walam.main.service.impl.UserServiceImpl;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("users-all")
    public ResponseEntity<List<UserDTO>> getAll() throws Exception {
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("users")
    public ResponseEntity<UserDTO> getByUsername(Authentication authentication) throws Exception {
        return ResponseEntity.ok(userService.mapUserToDTO(userService.getByUsername(authentication.getName())));
    }

    @GetMapping("user/{id}")
    public ResponseEntity<UserDTO> getById(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(userService.getUserById(id));
    }


    @PutMapping("user-update")
    public ResponseEntity<String> updateUser(@RequestBody UpdateUserDTO userRequest, Authentication authentication) {
        try {
            userService.updateUser(authentication.getName(), userRequest);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-birthday")
    public ResponseEntity<?> updateBirdthday(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)  Date date, Authentication authentication) {
        System.out.println(authentication.getName());
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updateBirthday(date, user);
                return ResponseEntity.ok("Birthday updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update birthday: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-phone")
    public ResponseEntity<?> updatePhone(@RequestParam String phone, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updatePhone(phone, user);
                return ResponseEntity.ok("Phone updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update phone: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-password")
    public ResponseEntity<?> updatePassword(@RequestParam String password, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updatePassword(password,user);
                return ResponseEntity.ok("Password updated successfully");
            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update password: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping ("user/update-country")
    public ResponseEntity<?> updateCountry(@RequestParam Country country, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updateCountry(country, user);
                return ResponseEntity.ok("Country updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update country: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-email")
    public ResponseEntity<?> updateEmail(@RequestParam String email, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
           if (user != null) {
                userService.updateEmail(email, user);
                return ResponseEntity.ok("Email updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update email: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-lastname")
    public ResponseEntity<?> updateLastName(@RequestParam String lastName, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updateLastName(lastName, user);
                return ResponseEntity.ok("Last name updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update last name: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-firstname")
    public ResponseEntity<?> updateFirstName(@RequestParam String firstName, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updateFirstName(firstName, user);
                return ResponseEntity.ok("First name updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update first name: " + e.getMessage());
        }
    }

    @Transactional
    @PatchMapping("user/update-no-identidad")
    public ResponseEntity<?> updateNoIdentidad(@RequestParam String noIdentidad, Authentication authentication) {
        try {
            User user = userService.getByUsername(authentication.getName());
            if (user != null) {
                userService.updateNoIdentidad(noIdentidad, user);
                return ResponseEntity.ok("No Identidad updated successfully");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update no identidad: " + e.getMessage());
        }
    }
}
