package com.devyne.board.boardback.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devyne.board.boardback.Service.BoardService;
import com.devyne.board.boardback.VO.BoardVO;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping("/board")
    public List<BoardVO> selBoardList() {
        return boardService.selBoardList();
    }

   
    
    
}
