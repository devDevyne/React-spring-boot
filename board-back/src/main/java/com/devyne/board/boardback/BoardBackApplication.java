package com.devyne.board.boardback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.devyne.board"})
public class BoardBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoardBackApplication.class, args);
	}

}
