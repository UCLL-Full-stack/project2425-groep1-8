
package com.example.kotplanner.services;

import com.example.kotplanner.entities.Gebouw;
import com.example.kotplanner.repositories.GebouwRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class GebouwService {

    @Autowired
    private GebouwRepository gebouwRepository;

    public List<Gebouw> getAllGebouwenWithRooms() {
        return gebouwRepository.findAll();
    }
}
