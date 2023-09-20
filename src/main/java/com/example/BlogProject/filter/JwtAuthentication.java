package com.example.BlogProject.filter;

import com.example.BlogProject.provider.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthentication extends OncePerRequestFilter {

    private final JwtProvider jwtProvider;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = parseBearerToken(request);

        if(token==null){
            filterChain.doFilter(request,response);
            return;
        }

        String email = jwtProvider.validate(token);

        if(email==null){
            filterChain.doFilter(request,response);
            return;
        }

        AbstractAuthenticationToken abstractAuthenticationToken =
                new UsernamePasswordAuthenticationToken(email,null, AuthorityUtils.NO_AUTHORITIES);

        abstractAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

        securityContext.setAuthentication(abstractAuthenticationToken);

        SecurityContextHolder.setContext(securityContext);

        filterChain.doFilter(request,response);
    }

    private  String parseBearerToken(HttpServletRequest request){

        String authorization = request.getHeader("Authorization");

        boolean hasAuthorization = StringUtils.hasText(authorization);

        if(!hasAuthorization) return null;
        boolean isBearer = authorization.startsWith("Bearer ");

        if(!isBearer) return null;

        return authorization.substring(7);
    }


}
