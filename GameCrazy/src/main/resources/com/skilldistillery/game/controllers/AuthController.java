package com.skilldistillery.game.controllers;

import java.security.Principal;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.game.entities.User;
import com.skilldistillery.game.services.AuthService;


@CrossOrigin({"*", "http://localhost:4300"})
@RestController
public class AuthController {

	@Autowired
	private AuthService aSvc;
	
	@RequestMapping(path = "/register", method = RequestMethod.POST)
	public User register(@RequestBody User user, HttpServletResponse res) {

	    if (user == null) {
	        res.setStatus(400);
	    }

	    user = aSvc.register(user);

	    return user;
	}

	@RequestMapping(path = "/authenticate", method = RequestMethod.GET)
	public Principal authenticate(Principal principal) {
	    return principal;
	}
	
}
