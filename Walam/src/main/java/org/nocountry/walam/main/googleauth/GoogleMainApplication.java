package org.nocountry.walam.main.googleauth;


import com.google.zxing.WriterException;

import java.io.IOException;
import java.util.Scanner;

import static org.nocountry.walam.main.googleauth.GoogleAuthenticatorUtils.getTOTPCode;

public class GoogleMainApplication {

    public static void main(String[] args) throws IOException, WriterException {
        String secretKey = GoogleAuthenticatorUtils.generateSecretKey();
        String email = "{email}";
        String companyName = "Ecopay";
        String barCodeUrl = GoogleAuthenticatorUtils.getGoogleAuthenticatorBarCode(secretKey, email, companyName);
        System.out.println(barCodeUrl);
        GoogleAuthenticatorUtils.createQRCode(barCodeUrl, "QRCode.png", 400, 400);

        Scanner scanner = new Scanner(System.in);
        String code = scanner.nextLine();
        if (code.equals(getTOTPCode(secretKey))) {
            System.out.println("Logged in successfully");
        } else {
            System.out.println("Invalid 2FA Code");
        }

    }

}
