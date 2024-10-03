package com.luv2code.librarayapplication.config;

import com.luv2code.librarayapplication.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfiguration implements RepositoryRestConfigurer {
private String theAllowedorigin = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {
            HttpMethod.POST,
        HttpMethod.PUT,
        HttpMethod.PATCH,
        HttpMethod.DELETE};
        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class,config,theUnsupportedActions);
        /* Configure CORS Mapping*/
        cors.addMapping(config.getBasePath()+ "/**")
                .allowedOrigins(theAllowedorigin);
    }
    private void disableHttpMethods(Class theclass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions){
                config.getExposureConfiguration()
                        .forDomainType(theclass)
                        .withItemExposure((metdata, httpMethods) ->
                                httpMethods.disable(theUnsupportedActions))
                        .withCollectionExposure((metdata, httpMethods) ->
                                httpMethods.disable(theUnsupportedActions));
    }
}
//elicovis