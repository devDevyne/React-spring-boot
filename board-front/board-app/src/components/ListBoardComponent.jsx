import React, { Component } from 'react';
import BoardService from "../service/BoardService"
import 'bootstrap/dist/css/bootstrap.min.css';

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            board: []
        }
    }

    componentDidMount() {
        BoardService.getBoards().then((resource) => {
            this.setState({ board: resource.data });
        });
    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Boards List</h2>
                <div className='row'>
                    <table className="table talbe-striped talbe-bordered">
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