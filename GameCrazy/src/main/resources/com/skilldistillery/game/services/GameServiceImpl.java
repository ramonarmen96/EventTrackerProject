package com.skilldistillery.game.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.game.entities.Game;
import com.skilldistillery.game.repositories.GameRepository;

@Service
@Transactional
public class GameServiceImpl implements GameService {


	@Autowired
	private GameRepository repo;

	@Override
	public List<Game> allGames() {
		return repo.findAll();
	}

	@Override
	public Optional<Game> showGame(int id) {
		return repo.findById(id);
	}

	@Override
	public Game createGame(Game game) {
		return repo.save(game);

	}
	@Override
	public Game editGame(Game game, int id) {
		Game editedGame = repo.findById(id).get();
				editedGame.setDescription(game.getDescription());
				editedGame.setMainCharacter(game.getMainCharacter());
				editedGame.setPlayers(game.getPlayers());
				editedGame.setRating(game.getRating());
				editedGame.setTitle(game.getTitle());
				editedGame.setReleaseYear(game.getReleaseYear());
		return repo.saveAndFlush(editedGame);
		
	}

	@Override
	public boolean deleteGame() {
		// TODO Auto-generated method stub
		return false;
	}

}
