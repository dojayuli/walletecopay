package org.nocountry.walam.main.controller;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequest {

    @Pattern(regexp = "^WL\\d{8}$", message = "The format is not valid")
    String destinyAccount;

    @NotNull(message = "The ammount must be passed")
    @Positive(message = "The amount must be greater than zero")
    Double amount;


}
