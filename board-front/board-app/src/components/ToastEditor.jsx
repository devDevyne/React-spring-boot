import React, { Component } from 'react';
import Editor from '@toast-ui/editor';

class ToastEditor extends Component {
    render() {
        return (
            <div>
                <Editor
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="markdown"
                    useCommandShortcut={false}
                />
            </div>
        );
    }
}

export default ToastEditor;