package org.nocountry.walam.main.email.services;
import jakarta.mail.MessagingException;
import org.nocountry.walam.main.email.dto.CorreoRequest;

public interface IEmailService {

    //send standar email
    void sendEmail(CorreoRequest correoRequest) throws MessagingException;
    void confirmationEmail() throws MessagingException;
    void recoveryAccountData() throws MessagingException, MessagingException;


}
