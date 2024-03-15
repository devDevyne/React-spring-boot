import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import 'react-tabulator/lib/styles.css'; // required styles
import 'react-tabulator/lib/css/tabulator_semanticui.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';

class ListBoardTabulator extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ tableData: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Boards List</h2>
                <div>
                    <button className='btn btn-primary' onClick={()=> { window.location.href="/insBoard" } }>글 작성</button>
                </div>
                <div>
                    <ReactTabulator
                        data= {this.state.tableData}
                        columns = {
                            [
                                { title: "글 번호", field: "boardIdx" },
                                { title: "글 제목", field: "title" },
                                { title: "작성자", field: "author" },
                                { title: "등록일자", field: "modDate" },
                            ]
                        }
                        layout={"fitColumns"}
                        events={{
                            rowClick: function(e, row) {
                                const boardIdx = row.getData().boardIdx;
                                window.location.href = `/boardDetail?boardIdx=${boardIdx}`;
                            }
                        }}
                        options={{ pagination: 'local', paginationSize: '10' }}
                    />
                </div>
            </div>
        );
    }
}

export default ListBoardTabulator;