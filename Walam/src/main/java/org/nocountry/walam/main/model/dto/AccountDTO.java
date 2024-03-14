package org.nocountry.walam.main.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.User;

import java.io.Serializable;
import java.util.List;

@Data
@Builder
public class AccountDTO implements Serializable {

    private Integer id;

    @NotBlank
    @Size(max = 20)
    @Pattern(regexp = "^[0-9]+$")
    private String numberAccount;

    @NotBlank
    @Size(max = 22)
    @Pattern(regexp = "^[0-9]+$")
    private String cvu;

    @NotBlank
    @DecimalMin(value = "0.00")
    @DecimalMax(value = "999999999.99")
    private Double balance;

    @Valid
    private List<TransactionDTO> transactions;
}