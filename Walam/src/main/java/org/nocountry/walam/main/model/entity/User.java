package org.nocountry.walam.main.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.nocountry.walam.main.model.entity.enums.Country;
import org.nocountry.walam.main.model.entity.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@SQLDelete(sql = "UPDATE users SET active = 0 WHERE id=?" )
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", length = 25 , unique = true)
    private String username;

    @Column(name="alias", length = 25)
    private String alias;

    @Column(name = "firstname", length = 25)
    private String firstName;

    @Column(name = "lastname", length = 20)
    private String lastName;

    @Column(name = "no_identidad", length = 15, unique = true)
    private String noIdentidad;

    @Email
    @Column(name = "email", length = 75)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "country")
    private Country country = Country.SIN_ASIGNAR;

    @Column(name = "phone", length = 12)
    private String phone;

    @Column(name = "birth_date")
    private Date birthday;

    @Column(name = "active", columnDefinition = "BOOLEAN default true", nullable = false)
    private boolean active;

    @Column(name = "rol", columnDefinition = "varchar(5) default 'USER'")
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(cascade = CascadeType.ALL, fetch =  FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "account")
    private Account account;

    @OneToOne
    @JsonIgnore
    @JoinColumn(name = "card")
    private Card card;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
