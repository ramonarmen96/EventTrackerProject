package com.skilldistillery.game.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.game.entities.Game;
import com.skilldistillery.game.services.GameService;

@RequestMapping("api")
@RestController
public class GameController {

	@Autowired
	private GameService gameSvc;
	
	@GetMapping("ping")
	public String ping() {
		return "pong";
		
	}
	
	@GetMapping("games")
	public List<Game> listGames(){
		return gameSvc.allGames();
	}
}
