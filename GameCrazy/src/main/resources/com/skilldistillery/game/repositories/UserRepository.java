package com.skilldistillery.game.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.game.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUsername(String username);
}
