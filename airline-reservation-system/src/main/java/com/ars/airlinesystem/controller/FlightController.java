package com.ars.airlinesystem.controller;

import com.ars.airlinesystem.model.Flight;
import com.ars.airlinesystem.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping("/search")
    public List<Flight> searchFlights(@RequestParam String origin, @RequestParam String destination) {
        return flightService.searchFlights(origin, destination);
    }

    @PostMapping("/add")
    public Flight addFlight(@RequestBody Flight flight) {
        return flightService.addFlight(flight);
    }
}
