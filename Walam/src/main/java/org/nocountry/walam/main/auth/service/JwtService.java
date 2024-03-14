package org.nocountry.walam.main.auth.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Servicio para la generación de tokens JWT.
 */
@Service
public class JwtService {

    // Clave secreta para la firma del token.
    private static final String SECRET_KEY ="3123E123123123123123123F1231234564564564564565G456456456456";

    /**
     * Genera un token JWT para el usuario proporcionado.
     * @param userdetails Detalles del usuario para el cual se genera el token.
     * @return Token JWT generado.
     */
    public String getToken(UserDetails userdetails) {
        // Llama al método interno getToken con reclamaciones adicionales vacías.
        return getToken(new HashMap<>(), userdetails);
    }

    /**
     * Genera un token JWT con reclamaciones adicionales y detalles del usuario.
     * @param extraClaims Reclamaciones adicionales a incluir en el token.
     * @param userDetails Detalles del usuario para el cual se genera el token.
     * @return Token JWT generado.
     */
    private String getToken(Map<String,Object> extraClaims, UserDetails userDetails) {
        return Jwts
                .builder()
                .setClaims(extraClaims) // Establece los Claims adicionales proporcionados.
                .setSubject(userDetails.getUsername()) // Establece el sujeto del token como el nombre de usuario del objeto UserDetails.
                .setIssuedAt(new Date(System.currentTimeMillis())) // Establece la fecha de emisión del token como el momento actual.
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60* 60 * 3)) // Token válido por 3 horas.
                .signWith(getKey(), SignatureAlgorithm.HS256) // Firma el token con el algoritmo de hash HS256 utilizando la clave secreta.
                .compact(); // Devuelve el token JWT compactado como una cadena.
    }

    /**
     * Obtiene la clave para firmar el token a partir de la clave secreta.
     * @return Clave para la firma del token.
     */
    private Key getKey() {
        // Convierte la clave secreta en bytes y crea una clave HMAC para la firma
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * Este método verifica la validez del token JWT.
     * Obtiene el nombre de usuario del token utilizando getUsernameFromToken.
     * Compara este nombre de usuario con el nombre de usuario del objeto UserDetails proporcionado como argumento.
     * Verifica si el token ha expirado utilizando isTokenExpired.
     * Devuelve true si el token es válido (el nombre de usuario coincide y el token no ha expirado).
     * */
    public boolean isTokenValid(String token, UserDetails userDetails) {
        if (StringUtils.hasText(token)) {
            final String username = getUsernameFromToken(token);
            return (username != null && username.equals(userDetails.getUsername()) && !isTokenExpired(token));
        }
        return false; // Retorna falso para tokens nulos o vacíos
    }

    /**
     * Este método extrae el nombre de usuario (subject) del token JWT.
     * Utiliza el método genérico getClaim para obtener el sujeto del token (Claims::getSubject).
     * Devuelve el nombre de usuario almacenado en el token.
     * */
    public String getUsernameFromToken(String token) {
        if (StringUtils.hasText(token)) {
            return getClaim(token, Claims::getSubject);
        }
        return null;
    }

    /**
     * Este método devuelve todos los Claims almacenados en el token JWT.
     * Utiliza la librería io.jsonwebtoken para analizar el token,
     * verifica la firma con la clave correspondiente
     * y devuelve el cuerpo (body) del token, que contiene todos los Claims.
     * */
    private Claims getAllClaims(String token) {
        if (StringUtils.hasText(token)) {
            return Jwts.parser()//  parserBuilder() parece estar obsoleto?
                    .setSigningKey(getKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        }
        return null;
    }

    /**
     * Este método genérico obtiene un Claim específico del token.
     * Utiliza el método getAllClaims para obtener todos los Claims del token
     * y luego aplica la función claimsResolver para obtener el Claim específico deseado.
     * Es genérico en su implementación, lo que permite obtener cualquier Claim del token.
     * */
    public <T> T getClaim(String token, Function<Claims,T> claimsResolver) {
        final Claims claims=getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Este método obtiene la fecha(Date) de expiración del token.
     * Utiliza el método getClaim con Claims::getExpiration,
     * para obtener la fecha de expiración almacenada en el token.
     * */
    private Date getExpiration(String token){
        return getClaim(token, Claims::getExpiration);
    }

    /**
     * Este método verifica si el token ha expirado.
     * Utiliza getExpiration para obtener la fecha de expiración del token
     * y compara esa fecha con la fecha actual (new Date()).
     * Devuelve true si el token ha expirado.
     * */
    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }

}

