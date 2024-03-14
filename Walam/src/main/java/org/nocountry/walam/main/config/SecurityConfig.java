package org.nocountry.walam.main.config;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.auth.filter.JwtAuthenticationFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationProvider authenticationProvider;

    /**
     * Configuración de la cadena de filtros de seguridad para la aplicación.
     * Este método configura la seguridad de la aplicación, deshabilita la protección contra
     * CSRF (Cross-Site Request Forgery) y define reglas de autorización para las solicitudes HTTP.
     *(Establecemos los endpoints publicos).
     *
     * @param http La configuración de seguridad de HTTP.
     * @return La cadena de filtros de seguridad configurada.
     * @throws Exception Si hay un error al configurar la seguridad.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                // Deshabilitar CSRF para simplificar la configuración en este ejemplo.
                .csrf(csrf -> csrf.disable())
                // Configurar reglas de autorización para las solicitudes HTTP.
                .authorizeHttpRequests(authRequest ->
                        authRequest
                                // Permitir el acceso sin autenticación a las solicitudes que coincidan con "/auth/**".
                                .requestMatchers("/v3/**","/swagger-ui/**").permitAll()
                                .requestMatchers("/auth/**").permitAll()
                                .requestMatchers("/api/**").permitAll()
                                .requestMatchers("/h2-console/**").permitAll()
                                // Exigir autenticación para todas las demás solicitudes.
                                .anyRequest().authenticated())
                // Configurar el formulario de inicio de sesión con valores predeterminados.
                //.formLogin(withDefaults())
                .sessionManagement(sessionManager-> sessionManager
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                // Construir la cadena de filtros de seguridad.
                .headers(AbstractHttpConfigurer::disable)
                .build();
    }
}
