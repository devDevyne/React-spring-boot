package com.devyne.board.boardback.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.devyne.board.boardback.VO.BoardVO;

@Repository
@EnableJpaRepositories
public interface BoardRepository extends JpaRepository<BoardVO, Integer> {

}
