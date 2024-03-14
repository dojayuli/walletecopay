package org.nocountry.walam.main.model.dto;

import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Builder
public class AccountCardDTO implements Serializable {

    private Integer id;

    @NotBlank
    @Size(min = 16, max = 16)
    private String cardNumber;

    @NotBlank
    @Size(min = 3, max = 3)
    private Integer cvv;

    @NotBlank
    private LocalDate creationDate;

    @Future
    @NotBlank
    private LocalDate expirationDate;

    @NotNull
    @AssertTrue
    private boolean active;
}
