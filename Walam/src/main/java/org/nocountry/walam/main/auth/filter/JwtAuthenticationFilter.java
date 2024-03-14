package org.nocountry.walam.main.auth.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.auth.service.JwtService;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    /**
     * Este método es llamado por el contenedor del servlet para cada solicitud entrante.
     * Su propósito principal es interceptar y procesar las solicitudes HTTP antes de que lleguen a su destino final, en este caso, los controladores de Spring.
     * Se encarga de la lógica de autenticación basada en JWT, donde verifica y valida el token JWT en la solicitud.
     * */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String token = getTokenFromRequest(request);
        final String username;

        if (token != null) {
            // Si hay un token presente, extrae el nombre de usuario del token.
            username = jwtService.getUsernameFromToken(token);

            // Se verifica si el contexto de seguridad de Spring no tiene una autenticación establecida.
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // Procede a cargar los detalles del usuario utilizando el servicio userDetailsService.
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                // Se verifica la validez del token.
                if (jwtService.isTokenValid(token, userDetails)) {
                    // Se crea este objeto que es una implementación de la interfaz Authentication de Spring Security y se utiliza para representar una solicitud de autenticación exitosa.
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                            userDetails,
                            null,
                            userDetails.getAuthorities());

                    // Se establecen los detalles de la autenticación.
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    // Se establece la autenticación en el contexto de seguridad utilizando SecurityContextHolder.
                    // Esto asegura que la autenticación sea reconocida y persistente durante toda la sesión del usuario.
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                }
            }
        }
        // Se llama al método doFilter() en el filterChain para continuar con la cadena de filtros y, finalmente, pasar la solicitud al controlador de Spring.
        filterChain.doFilter(request, response);
    }

    /**
     * Este método extrae el token JWT del encabezado de autorización de la solicitud.
     * Busca si el encabezado comienza con "Bearer " y luego devuelve el token.
     * */
    private String getTokenFromRequest(HttpServletRequest request) {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }
        return null;
    }

}
