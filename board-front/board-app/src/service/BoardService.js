import axios from 'axios';

// spring boot api의 URL을 정의 
const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

// 글목록 데이터를 가져오는 함수. 
class BoardService {
    getBoards() {
        console.log(axios.get(BOARD_API_BASE_URL));
        return axios.get(BOARD_API_BASE_URL); // return List<BoardVO> selBoardList
    }
}

export default new BoardService();