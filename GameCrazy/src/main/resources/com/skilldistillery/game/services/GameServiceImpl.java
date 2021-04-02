package com.skilldistillery.game.services;

import java.util.List;

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
	public Game showGame(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
