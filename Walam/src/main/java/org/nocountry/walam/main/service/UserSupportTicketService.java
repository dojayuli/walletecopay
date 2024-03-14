package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.UserSupportTicket;

import java.util.List;

public interface UserSupportTicketService {

    UserSupportTicket saveUserSupportTicket(UserSupportTicket userSupportTicket);
    void deleteUserSupportTicketById(int id);
    List<UserSupportTicket> getAllUserSupportTickets();
    UserSupportTicket getUserSupportTicketById(int id);

    // Otras operaciones si es necesario.

}
