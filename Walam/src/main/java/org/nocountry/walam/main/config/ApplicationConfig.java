package org.nocountry.walam.main.config;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor // Genera un constructor que incluye todos los campos marcados como final.
public class ApplicationConfig {

    private final UserRepository userRepository;

    /**
     * @Bean Indica que un método específico dentro de una clase anotada con @Configuration producirá un objeto que Spring administrará dentro de su contexto.
     * Este método crea y configura el AuthenticationManager utilizando AuthenticationConfiguration.
     * El AuthenticationManager es esencial para procesar las solicitudes de autenticación.
     *  */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    /**
     * AuthenticationProvider es una interfaz fundamental en Spring Security.
     * Sirve como un mecanismo para autenticar a los usuarios en función de sus credenciales.
     * AuthenticationProvider crea un objeto Authentication que contiene la información de autenticación del usuario.
     * */
    @Bean
    public AuthenticationProvider authenticationProvider(){

        // DaoAuthenticationProvider, se encarga de autenticar a los usuarios consultando una base de datos.
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();

        /**
         *  setUserDetailsService(), espera un objeto que implemente la interfaz UserDetailsService.
         *  La implementación de esta interfaz define cómo Spring Security accederá
         *  y cargará los detalles del usuario cuando se realice un intento de autenticación.
         **/
        authenticationProvider.setUserDetailsService(userDetailService());

        /**
         * Establece el codificador de contraseñas para el proveedor de autenticación (DaoAuthenticationProvider).
         * */
        authenticationProvider.setPasswordEncoder(passwordEncoder());

        return authenticationProvider;
    }

    /**
     * Crea y devuelve un PasswordEncoder.
     * Aquí se utiliza BCryptPasswordEncoder para codificar y decodificar contraseñas.
     * */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     *  userDetailService() es un método que devuelve un UserDetailsService personalizado.
     *  Carga los detalles del usuario desde la base de datos utilizando el UserRepository.
     * */
    @Bean
    public UserDetailsService userDetailService() {
        return username -> userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

}

