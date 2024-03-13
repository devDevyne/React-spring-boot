package com.devyne.board.boardback.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devyne.board.boardback.Repository.BoardRepository;
import com.devyne.board.boardback.VO.BoardVO;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<BoardVO> selBoardList() {
        return boardRepository.findAll();
    }
}
