package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "account_card")
public class AccountCard {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "card_number", length = 16, nullable = false, unique = true, updatable = false)
    private String cardNumber;

    @Column(name = "cvv", length = 3, nullable = false, updatable = false)
    private Integer cvv;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "creation_date", updatable = false)
    private LocalDate creationDate;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "expiration_date", updatable = false)
    private LocalDate expirationDate;

    @Column(name = "active", columnDefinition = "BOOLEAN default true", nullable = false)
    private boolean active;

    /**
     * Método para setear automáticamente la fecha de expiración dando
     * 3 meses y medio (42 meses) a partir de la fecha de creación
     */
    @PrePersist
    public void expirationDateSetter() {
        LocalDate limitDate = this.creationDate.plusMonths(42);
        this.expirationDate = limitDate;
    }

}
