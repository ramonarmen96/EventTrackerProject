package com.skilldistillery.movie.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.movie.entities.Movie;
import com.skilldistillery.movie.services.MovieService;

@RequestMapping("api")
@RestController
public class MovieContoller {

	@Autowired
	private MovieService movieSvc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
		
	}
	
	@GetMapping("movies")
	public List<Movie> listMovies(){
		return movieSvc.allMovies();
	}
}
