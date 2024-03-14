package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.nocountry.walam.main.model.entity.enums.TransactionType;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(precision = 11)
    private Double amount;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime date;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TransactionType type;

    /**
     * Atributo relacionado a la cuenta de destino
     */
    @ManyToOne
    @JoinColumn(name = "account", nullable = false)
    private Account account;

    @Column(name="destiny_account")
    private String destinyAccount;

    @Column(name="origin_account")
    private String originAccount;

}
