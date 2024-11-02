
package com.example.kotplanner.entities;

import javax.persistence.*;

@Entity
public class Kamer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long kamerID;
    private Double kostPerMaand;
    private Boolean beschikbaar;

    @ManyToOne
    @JoinColumn(name = "gebouwID")
    private Gebouw gebouw;

}
