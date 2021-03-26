import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { editerOptions } from "options/index";

export default class RichEditer extends Component {
  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    let { defaultValue, onEditorChange } = this.props;
    return (
      <div>
        <Editor
          initialValue={defaultValue}
          init={editerOptions}
          onEditorChange={onEditorChange}
        />
      </div>
    );
  }
}
