package com.skilldistillery.movie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.movie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {

}
