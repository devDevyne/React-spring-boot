package com.devyne.board.boardback.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.devyne.board.boardback.VO.BoardVO;

@Mapper
public interface BoardMapper {

    List<BoardVO> selBoardList();
    
    int insBoard(BoardVO boardVO);
}
