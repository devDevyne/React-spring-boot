import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import ToastEditor from './ToastEditor';

class InsBoardComponent extends Component {

    constructor(props) {
        super(props)

        // 입력할 요소를 정의. 
        this.state = {
            type: '',
            title: '',
            contents: '',
            author: '',
            regDate: new Date().toLocaleString()
        }

        // 값이 입력되면, this.state의 변수값이 변경되도록 bind
        this.changeTypeHandler = this.changeTypeHandler.bind(this); // bind 
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
    }

    // setState에 변경된 값 전달. 
    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }    

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeContentsHandler = (event) => {
        this.setState({contents: event.target.value});
    }

    changeAuthorHandler = (event) => {
        this.setState({author: event.target.value});
    }

    insBoard = (event) => {
        event.preventDefault();  
        let board = {
            type: this.state.type,
            title: this.state.title,
            contents: this.state.contents,
            author: this.state.author,
            regDate: this.state.regDate
        }; 
        // board에 입력한 정보 저장.
        // 파라미터로 보냄. 
        // 그리고 board로 이동.  
        BoardService.insBoard(board).then(res => {
            window.location.href = "/board";
        });
    }

    cancel() {
        if(window.confirm("글 작성을 취소하시겠습니까?")) {
            window.location.href = "/board";
        }
    }

    render() {
        return (
            <div>
                <br />
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" style={{marginTop:"10px"}}>새 글을 작성해주세요</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 카테고리 </label>
                                        <select placeholder="type" name="type" className="form-control" 
                                        value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option value="1">자유게시판</option>
                                            <option value="2">질문과 답변</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> 글 제목 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" 
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 작성자  </label>
                                        <input placeholder="author" name="author" className="form-control" 
                                        value={this.state.author} onChange={this.changeAuthorHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 내용  </label>
                                        <textarea placeholder="contents" name="contents" className="form-control" 
                                        value={this.state.contents} onChange={this.changeContentsHandler}/>
                                    </div>
                                    <div style={{marginTop:"10px", float:'right'}}>
                                        <button className="btn btn-success" onClick={this.insBoard}>Save</button>
                                        <button type='button' className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default InsBoardComponent;