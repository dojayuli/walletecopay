package org.nocountry.walam.main.model.entity.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Country {

    @JsonProperty("Sin asignar")
    SIN_ASIGNAR,
    @JsonProperty("Argentina")
    ARGENTINA,
    @JsonProperty("Colombia")
    COLOMBIA,
    @JsonProperty("Mexico")
    MEXICO,
    @JsonProperty("Panama")
    PANAMA,
    @JsonProperty("Costa_Rica")
    COSTA_RICA;
    

}
