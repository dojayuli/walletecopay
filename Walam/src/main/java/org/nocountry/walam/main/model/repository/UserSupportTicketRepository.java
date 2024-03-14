package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.UserSupportTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserSupportTicketRepository extends JpaRepository<UserSupportTicket, Integer> {


    // Otras consultas personalizadas si es necesario.
}
