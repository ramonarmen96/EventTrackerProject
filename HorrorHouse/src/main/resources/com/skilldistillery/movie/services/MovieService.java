package com.skilldistillery.movie.services;

import java.util.List;

import com.skilldistillery.movie.entities.Movie;


public interface MovieService {

	
	List<Movie> allMovies();
	Movie showMovie (int id);
	
}
