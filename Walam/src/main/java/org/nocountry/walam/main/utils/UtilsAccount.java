package org.nocountry.walam.main.utils;


public final class UtilsAccount {

    public static String generateAccountNumber(){
        double random = Math.random();
        random*=100000000;
        int prevInt= (int) Math.floor(random);
        StringBuilder prevString= new StringBuilder(Integer.toString(prevInt));

        while(prevString.length()<8){
            prevString.insert(0, "0");
        }
        return "WL"+ prevString;
    }

    public static String generateCvu(){
        double random = Math.random();
        random*=1000000000000000000000.0;
        long prevLong = Math.round(random);

        StringBuilder prevString= new StringBuilder(Long.toString(prevLong));

        while(prevString.length()<8){
            prevString.insert(0, "0");
        }
        return prevString.toString();
    }
}
