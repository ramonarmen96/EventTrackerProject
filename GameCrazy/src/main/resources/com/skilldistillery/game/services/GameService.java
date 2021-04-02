package com.skilldistillery.game.services;

import java.util.List;

import com.skilldistillery.game.entities.Game;


public interface GameService {

	
	List<Game> allGames();
	Game showGame (int id);
	
}
