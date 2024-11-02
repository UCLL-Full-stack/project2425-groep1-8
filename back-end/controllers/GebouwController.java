package com.example.kotplanner.controllers;

import com.example.kotplanner.entities.Gebouw;
import com.example.kotplanner.services.GebouwService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gebouwen")
public class GebouwController {

    @Autowired
    private GebouwService gebouwService;

    @GetMapping
    public ResponseEntity<List<Gebouw>> getAllGebouwen() {
        List<Gebouw> gebouwen = gebouwService.getAllGebouwenWithRooms();
        return new ResponseEntity<>(gebouwen, HttpStatus.OK);
    }
}
