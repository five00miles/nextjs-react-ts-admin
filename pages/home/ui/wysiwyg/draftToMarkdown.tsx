import React from 'react';
import draftToMarkdown from 'draftjs-to-markdown'


export default class DraftToMarkdown extends React.Component<any, any> {
    render() {
        return draftToMarkdown(this.props.editorContent)
    }
}