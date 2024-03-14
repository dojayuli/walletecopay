package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.entity.UserSupportTicket;
import org.nocountry.walam.main.model.repository.UserSupportTicketRepository;
import org.nocountry.walam.main.service.UserSupportTicketService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserSupportTicketServiceImpl implements UserSupportTicketService {

    private UserSupportTicketRepository userSupportTicketRepository;

    @Override
    public UserSupportTicket saveUserSupportTicket(UserSupportTicket userSupportTicket) {
        return userSupportTicketRepository.save(userSupportTicket);
    }

    @Override
    public void deleteUserSupportTicketById(int id) {
        userSupportTicketRepository.deleteById(id);
    }

    @Override
    public List<UserSupportTicket> getAllUserSupportTickets() {
        return userSupportTicketRepository.findAll();
    }

    @Override
    public UserSupportTicket getUserSupportTicketById(int id) {
        return userSupportTicketRepository.findById(id).orElse(null);
    }

}
