package org.nocountry.walam.main.email.services.impl;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.nocountry.walam.main.email.dto.CorreoRequest;
import org.nocountry.walam.main.email.services.IEmailService;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;


@Service
public class EmailServiceImpl implements IEmailService {
    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;

    public EmailServiceImpl(JavaMailSender javaMailSender, TemplateEngine templateEngine) {
        this.javaMailSender = javaMailSender;
        this.templateEngine = templateEngine;
    }

    @Override
    public void sendEmail(CorreoRequest correoRequest) throws MessagingException {
        try {
            //create email object(mime is a type of email in java context)
            MimeMessage message = javaMailSender.createMimeMessage();
            //set data in email format through helper object
            MimeMessageHelper helper = new MimeMessageHelper(message,true,"UTF-8");
            helper.setTo(correoRequest.getDestinatario());
            helper.setSubject(correoRequest.getAsunto());
            helper.setText(getHtmlCode(correoRequest),true);
            System.out.println(getHtmlCode(correoRequest));
            javaMailSender.send(message);

        } catch (Exception e) {
            throw new MessagingException("Email sending error(sendEmail): " + e.getMessage(),e);
        }
    }

    @Override
    public void confirmationEmail() throws MessagingException {
        //build confirmation path {validationLink} and {userName}
        //setear true la confirmacion del email.
        CorreoRequest correoRequest = new CorreoRequest();
        correoRequest.setTemplateEmail("confirmationEmail.html");
        correoRequest.setDestinatario("juan.ortega.it@gmail.com");
        correoRequest.setAsunto("The last step , confirm your email");
        correoRequest.getDataBinding().put("validationLink", "validationLinkExample");
        correoRequest.getDataBinding().put("userName" , "userNameExample");
        sendEmail(correoRequest);
    }

    @Override
    public void recoveryAccountData() throws MessagingException {
        CorreoRequest correoRequest = new CorreoRequest();
        correoRequest.setTemplateEmail("recoveryData.html");
        //build confirmation path {resetPasswordLink} and {userName}
        correoRequest.setDestinatario("juan.ortega.it@gmail.com");
        correoRequest.setAsunto("Recovery your account data");
        correoRequest.getDataBinding().put("resetPasswordLink", "resetPasswordLinkExample");
        correoRequest.getDataBinding().put("userName" , "userNameExample");
        sendEmail(correoRequest);
    }

    public String getHtmlCode (CorreoRequest correoRequest){
        //thymeleaf data binding
        Context context = new Context();
        context.setVariables(correoRequest.getDataBinding());
        System.out.println(correoRequest.getTemplateEmail());
        String htmlCode = templateEngine.process(correoRequest.getTemplateEmail(),context);
        return htmlCode;
    }






}