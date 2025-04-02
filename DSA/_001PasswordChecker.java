public class _001PasswordChecker {

    public static void main(String[] args) {
        String password = "we2@e322";
        System.out.println(funct(password));
        
    }

    public static String funct( String password){

        if(password.length() <=7){ return "Weak";}
        if(!password.chars().anyMatch(Character::isUpperCase)){return "Weak";}
        if(!password.chars().anyMatch(Character::isLowerCase)){return "Weak";}
        if(!password.chars().anyMatch(Character::isDigit)){return "Weak";}
        if(!password.chars().anyMatch(ch -> !Character.isLetterOrDigit(ch))){return "Weak";}
        return "Strong";
    }
}