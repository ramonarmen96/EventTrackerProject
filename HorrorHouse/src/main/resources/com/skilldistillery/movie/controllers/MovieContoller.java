package com.skilldistillery.movie.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api")
@RestController
public class MovieContoller {

	@GetMapping("ping")
	public String ping() {
		return "pong";
		
	}
	
}
