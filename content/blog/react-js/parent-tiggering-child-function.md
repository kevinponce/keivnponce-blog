---
title: React Parent tiggering child function
date: "2021-07-15T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to trigger child function from parent in Reactjs
---

It is super rare, but sometimes in react you need to have the parent trigger a function call in child.

I needed when i used codemirror and need to tigger change from the parent.

Here is a snippet of code doing it:

# Editor.jsx
```
import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';

const Editor = (props, forwardedRef) => {
  const editor = useRef();
  const { file } = props;
  let view;

  useEffect(() => {
    const initialState = EditorState.create({
      doc: file,
      extensions: [basicSetup],
    });

    view = new EditorView({
      parent: editor.current,
      state: initialState,
      contentAttributes: {
        contenteditable: 'false'
      }
    });

    return () => {
      view.destroy();
    }
  }, []);

  useImperativeHandle(forwardedRef, () => ({
    change({ from, to, insert }) {
      view.dispatch({ changes: { from, to, insert } });
    },
    toString() {
      return view.state.doc.toString();
    }
  }))

  return (
    <div ref={editor}></div>
  );
}

Editor.defaultProps = { };

Editor.propTypes = {
  file: PropTypes.string.isRequired,
};

export default forwardRef(Editor);
```

# example.jsx
```
import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Editor from './editor'

const Example = props => {
  const { path, title, active, onClick } = props;
   const editorRef = useRef();

  const keydownHandler = (e) => {
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e)
    // if(e.keyCode===13 && e.ctrlKey) this.showMessage()
  }

  useEffect(() => {
    setTimeout(() => {
      editorRef.current.change({ from: 0, to: 0, insert: 'test' });
    }, 1000);

    setTimeout(() => {
      console.log(editorRef.current.toString());
    }, 1100);

    return () => { }
  });

  return (
    <div style={{ width: '100%' }}>
      <Editor file="" ref={ editorRef } />
    </div>
  )
}

export default Example;
```