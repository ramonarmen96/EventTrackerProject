package com.skilldistillery.game.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.game.entities.Game;

class GameTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Game game;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	emf = Persistence.createEntityManagerFactory("GamePU");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	emf.close();
	
	}

	@BeforeEach
	void setUp() throws Exception {
	em = emf.createEntityManager();
	game = em.find(Game.class, 1);
			
	}

	@AfterEach
	void tearDown() throws Exception {
	em.close();
	game = null;
	}
	

	@Test
	void test() {
		assertNotNull(game);
		assertEquals("Jak and Daxter The Precursor Legacy", game.getTitle());
	}

}
