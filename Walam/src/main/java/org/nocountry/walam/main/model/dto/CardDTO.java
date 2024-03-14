package org.nocountry.walam.main.model.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class CardDTO {

    private Integer id;

    private String cardHolder;

    private String cardNumber;

    private int cvv;

    private LocalDate creationDate;

    private LocalDate expirationDate;

    private boolean active;
}
