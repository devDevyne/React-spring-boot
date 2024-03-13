package com.devyne.board.boardback.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devyne.board.boardback.Mapper.BoardMapper;
import com.devyne.board.boardback.VO.BoardVO;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardService {

    private final BoardMapper boardMapper;

    public List<BoardVO> selBoardList() {
        return boardMapper.selBoardList();
    }

}
