import axios from 'axios';

// spring boot api의 URL을 정의 
const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {
    getBoards() {
        // console.log(axios.get(BOARD_API_BASE_URL));
        return axios.get(BOARD_API_BASE_URL); // return List<BoardVO> selBoardList
    }

    insBoard(board) { // 입력받은 board 객체를 해당 url로 전달. 
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getBoardDetail(boardIdx) {
        return axios.get(BOARD_API_BASE_URL + "Detail?boardIdx=" + boardIdx);
    }

    IsEmpty(value) {
        if(value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ) {
            return true;
        }else {
            return false;
        }
    } 

    boardIsEmpty(board) {
        for(let i=0; i < board.length; i++) {
            if(board[i] == "" || board[i] == null || board[i] == undefined || ( board[i] != null && typeof board[i] == "object" && !Object.keys(board[i]).length ) ) {
                return true;
            }else {
                return false;
            }
        }
    }
}

export default new BoardService();