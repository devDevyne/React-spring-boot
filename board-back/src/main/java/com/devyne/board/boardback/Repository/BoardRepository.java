package com.devyne.board.boardback.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.devyne.board.boardback.VO.BoardVO;

@EnableJpaRepositories
public interface BoardRepository extends JpaRepository<BoardVO, Integer> {

}