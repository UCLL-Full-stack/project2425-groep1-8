
package com.example.kotplanner.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Gebouw {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gebouwID;
    private String locatie;
    private Integer aantalKamers;
    private String eigenaar;

    @OneToMany(mappedBy = "gebouw")
    private List<Kamer> kamers;

}
