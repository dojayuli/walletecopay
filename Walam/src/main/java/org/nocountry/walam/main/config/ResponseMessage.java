package org.nocountry.walam.main.config;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.http.ResponseEntity;

import java.io.Serializable;

@Data
@ToString
@Builder
public class ResponseMessage implements Serializable {

    private String message;
    private Object object;


}
