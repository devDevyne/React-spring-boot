package com.devyne.board.boardback.VO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="BOARD")
public class BoardVO {

    @Id @GeneratedValue
    @Column(name = "BOARD_IDX")
    private int boardIdx;
    
    @Column(name = "TITLE")
    private String title;

    @Column(name = "AUTHOR")
    private String author;

    @Column(name = "REG_DATE")
    private String regDate;

    @Column(name = "MOD_DATE")
    private String modDate;

    @Column(name = "CONTENTS")
    private String contents;

}
