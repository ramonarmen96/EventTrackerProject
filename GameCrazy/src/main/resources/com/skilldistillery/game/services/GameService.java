package com.skilldistillery.game.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.game.entities.Game;


public interface GameService {

	
	List<Game> allGames();
	
	Optional<Game> showGame (int id);
		
	Game createGame(Game game);

	Game editGame(Game game, int id);
	
	boolean removeGame(int id);
	
	
	
}
