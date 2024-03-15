import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class BoardDetailComponent extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            board: [],
            boardIdx: window.location.href.split('=')[1],
        }

        this.goUdtBoard = this.goUdtBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getBoardDetail(this.state.boardIdx).then(res => {
            this.setState({ board: res.data });
        });
    }

    goUdtBoard = ()=> {
        const boardIdx = this.state.boardIdx;
        window.location.href = `/udtBoard?boardIdx=${boardIdx}`;
    };

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>Board Details</h3>
                    <div className='card-body'>
                            <input type='hidden' name="boardIdx" value={this.state.board.boardIdx} />
                            <div className='form-group'>
                                <label> 카테고리 </label>
                                <select name="type" className='form-control' value={this.state.board.type} disabled>
                                    <option value="1">자유게시판</option>
                                    <option value="2">질문과 답변</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label> 글 제목 </label>
                                <input type="text" placeholder='title' name='title' className='form-control'
                                    value={this.state.board.title} />
                            </div>
                            <div className='form-group'>
                                <label> 작성자 </label>
                                <input type="text" name='author' className='form-control'
                                    value={this.state.board.author} />
                            </div>
                            <div className='form-gruop'>
                                <label> 작성일자 </label>
                                <input type='text' name="regDate" className='form-control'
                                    value={this.state.board.regDate} />
                            </div>
                            <div className='form-gruop'>
                                <label> 수정일자 </label>
                                <input type='text' name="modDate" className='form-control'
                                    value={new Date().toLocaleString() } />
                            </div>
                            <div className='form-group'>
                                <label> 내용 </label>
                                <textarea name="contents" className='form-control'
                                    value={this.state.board.contents} style={{ resize: 'none' }} />
                            </div>
                            <div style={{marginTop:"10px", float:'right'}}>
                                <button type='button' className='btn btn-primary' onClick={this.goUdtBoard} >수정하기</button>
                                <button type='button' className="btn btn-success" onClick={()=> {window.location.href='/board'}} style={{marginLeft:"10px"}}>목록으로</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardDetailComponent; 