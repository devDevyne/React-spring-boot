import React, { Component } from 'react';
import BoardService from "../service/BoardService"
import 'bootstrap/dist/css/bootstrap.min.css';

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
        
        // state : 컴포넌트에서 관리되는 동적인 데이터
        // class 컴포넌트에서는 state를 클래스 내부에서 this.state로 접근하고 변경. 
        this.state = {
            board: []
        }
        
        // 글 작성 버튼을 클릭했을 때, 동작하는 'insBoard' 함수를 바인드. 
        this.insBoard = this.insBoard.bind(this);
    }

    // setState 메소드를 사용해 state를 변경. 
    // setState를 호출하면 state가 변경되고 컴포넌트가 다시 렌더링됨. 
    componentDidMount() {
        BoardService.getBoards().then((resource) => {
            this.setState({ board: resource.data });
        });
    }

    // 글 작성 버튼을 클릭 시 글 작성 페이지로 이동하게 해주는 함수. 
    insBoard() {
        window.location.href = "/insBoard";
        // this.props.history.push('/insBoard'); // location.href? 
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Boards List</h2>
                <div className='row'>
                    <button className='btn btn-primary' style={{width: '80px', marginBottom: '10px'}} onClick={this.insBoard}>글 작성</button>
                </div>
                <div className='row'>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>글 제목</th>
                                <th>작성자</th>
                                <th>작성일자</th>
                                <th>수정일자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.board.map(
                                    board =>
                                    <tr key = {board.boardIdx}>
                                        <td>{board.boardIdx}</td>
                                        <td>{board.title}</td>
                                        <td>{board.author}</td>
                                        <td>{board.regDate}</td>
                                        <td>{board.modDate}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;