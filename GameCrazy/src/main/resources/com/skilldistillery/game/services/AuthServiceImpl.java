package com.skilldistillery.game.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.game.entities.User;
import com.skilldistillery.game.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserRepository uRepo;

	@Override
	public User register(User user) {
		String encodedPW = encoder.encode(user.getPassword());
		user.setPassword(encodedPW); // only persist encoded password

		// set other fields to default values
		user.setRole("standard");
		user.setEnabled(true);
		

		uRepo.saveAndFlush(user);
		return user;
	}

}
