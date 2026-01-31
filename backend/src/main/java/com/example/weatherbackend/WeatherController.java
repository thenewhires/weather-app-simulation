package com.example.weatherbackend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
public class WeatherController {

    @Value("${openweathermap.api.key}")
    private String apiKey;

    private final String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric";

    @GetMapping("/weather")
    public Map<String, Object> getWeather(@RequestParam String city) {
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> vars = new HashMap<>();
        vars.put("city", city);
        vars.put("apiKey", apiKey);

        // BUG 1: The getForObject method returns the string, no type convertion
        String response = restTemplate.getForObject(apiUrl, String.class, vars);
        
        // BUG 2: This attempts to cast a String to a Map, which will cause a runtime error
        return (Map<String, Object>) response;  // This will throw a ClassCastException
    }
}