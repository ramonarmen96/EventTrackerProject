package com.skilldistillery.movie.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.movie.entities.Movie;
import com.skilldistillery.movie.repositories.MovieRepository;

@Service
@Transactional
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository repo;
	
	@Override
	public List<Movie> allMovies() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Movie showMovie(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
