package com.ars.airlinesystem.service;

import com.ars.airlinesystem.model.Flight;
import com.ars.airlinesystem.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> searchFlights(String origin, String destination) {
        return flightRepository.findByOriginAndDestination(origin, destination);
    }

    public Flight addFlight(Flight flight) {
        return flightRepository.save(flight);
    }
}
