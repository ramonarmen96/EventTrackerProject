package com.skilldistillery.game.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<Game> listGames() {
		return gameSvc.allGames();
	}

	@GetMapping("games/{id}")
	public Game show(@PathVariable int id) {
		return gameSvc.showGame(id).get();
	}

	@PostMapping("games")
	public Game addGame(@RequestBody Game game, HttpServletRequest req, HttpServletResponse resp) {
		game = gameSvc.createGame(game);
		if (game != null) {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(game.getId());
			resp.setHeader("Location", url.toString());
		} else {
			resp.setStatus(404);
			game = null;
		}
		return game;
	}
	@PutMapping("games/{id}")
	public Game replaceGame(@PathVariable int id, @RequestBody Game game, HttpServletRequest req,
			HttpServletResponse resp){		    
		game = gameSvc.editGame(game, id);
		if (game != null) {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(game.getId());
			resp.setHeader("Location", url.toString());
		} else {
			resp.setStatus(404);
			game = null;
		}
		return game;		
	}
	@DeleteMapping("games/{id}")
	public void deleteGame(
			@PathVariable int id,
			HttpServletResponse resp
	) {
		if (gameSvc.removeGame(id)) {
			resp.setStatus(204);
		}
		else {
			resp.setStatus(404);
		}
	}
}
