package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Integer>{
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

    User findByAlias(String alias);

    boolean existsByAlias(String alias);
}
