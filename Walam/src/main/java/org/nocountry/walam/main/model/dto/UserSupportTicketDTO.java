package org.nocountry.walam.main.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.TicketState;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@Builder
public class UserSupportTicketDTO implements Serializable {

    private Integer id;

    @NotBlank
    @Size(max = 25)
    private String title;

    @NotBlank
    @Size(max = 200)
    private String body;

    @NotBlank
    private LocalDate date;

    @NotBlank
    private TicketState state;
}
