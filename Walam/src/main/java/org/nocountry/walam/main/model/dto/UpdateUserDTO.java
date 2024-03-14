package org.nocountry.walam.main.model.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.nocountry.walam.main.model.entity.enums.Country;

import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserDTO {
    @Min(3)
    private String firstName;

    @Min(3)
    private String lastName;

    @Min(10)
    private String noIdentidad;

    @Min(10)
    @Pattern(regexp = "^[0-9]+$")
    private String phone;

    @Past
    private Date birthday;

    private Country country;
}
