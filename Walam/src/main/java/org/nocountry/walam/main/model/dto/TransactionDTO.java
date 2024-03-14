package org.nocountry.walam.main.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.enums.TransactionType;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionDTO implements Serializable {

    private Integer id;

    @NotBlank
    @DecimalMin(value = "0.00")
    @DecimalMax(value = "999999999.99")
    private Double amount;

    @NotBlank
    private LocalDateTime date;

    @NotBlank
    private TransactionType type;

    /**
     * Validación y representación de relación a la cuenta de destino
     */
//    @NotBlank
//    @Valid
//    private Account destinyAccount;
}
