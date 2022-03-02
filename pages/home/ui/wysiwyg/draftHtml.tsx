import React from 'react';
import draftToHtml from 'draftjs-to-html'


export default class DraftHtml extends React.Component<any, any> {
    render() {
        return draftToHtml(this.props.editorContent)
    }
}