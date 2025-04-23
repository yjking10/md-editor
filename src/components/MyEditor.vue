<template>
  <div v-if="editor" class="editor-container">
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>

import Underline from '@tiptap/extension-underline'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';

import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { Markdown } from "tiptap-markdown";


import { onBeforeUnmount, onMounted, ref } from 'vue'

// import content from '@/assets/data/test.md?raw'





const editor = ref()
const _editable = ref(false)
// const autofocusStr = ref('')

onMounted(() => {
  // http://localhost:5173/?editable=true&autofocus=true
  // const urlParams = new URLSearchParams(window.location.search)
  // editableStr.value = urlParams.get('editable')
  // autofocusStr.value = urlParams.get('autofocus')

  // console.log(editableStr.value, autofocusStr.value);


  setupFunction();

  // 测试
  // setConfig({
  //   editable: true,
  //   autofocus: true,
  // });


})

onBeforeUnmount(() => {
  editor.value.destroy()

})

const sendMessageToNative = (message) => {

  // 针对 iOS
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.waveNoteBridge) {
    window.webkit.messageHandlers.waveNoteBridge.postMessage(JSON.stringify(message));
  }
  // 针对 Android
  else if (window.waveNoteBridge) {
    window.waveNoteBridge.postMessage(JSON.stringify(message));
  } else {
    console.error("Native handler not available");
  }
}

const initEditor = (editable, autofocus) => {

  editor.value = new Editor({
    extensions: [
      Markdown.configure({
        transformPastedText: true,
        transformCopiedText: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      // Document,
      // Paragraph,
      // Blockquote,
      // Code,
      Underline,
      TaskList,
      TaskItem,
      Table.configure({
        resizable: false,
      }),
      TableCell, TableHeader, TableRow,
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit,
    ],
    content: '',
    editable: editable,
    autofocus: autofocus,
    onUpdate: () => {
      const markdownContent = editor.value.storage.markdown.getMarkdown();
      sendMessageToNative({ event: 'onUpdate', data: markdownContent });
    },
    onBlur: () => {
      sendMessageToNative({ event: 'onBlur' });
    },
    onFocus: () => {

      sendMessageToNative({ event: 'onFocus' });
    },
    onTransaction: () => {
      sendTransactionToNative();
    },
  })


}

// 发送消息到 Flutter
const sendTransactionToNative = () => {

  if (editor.value && (_editable.value === true)) {
    console.log('sendTransactionToNative',);

    const msg = {
      'bold': {
        'isActive': editor.value.isActive('bold'),
        'can': editor.value.can().chain().focus().toggleBold().run(),
      },
      'italic': {
        'isActive': editor.value.isActive('italic'),
        'can': editor.value.can().chain().focus().toggleItalic().run(),
      },
      'underline': {
        'isActive': editor.value.isActive('underline'),
        'can': editor.value.can().chain().focus().toggleUnderline().run(),
      },
      'strike': {
        'isActive': editor.value.isActive('strike'),
        'can': editor.value.can().chain().focus().toggleStrike().run(),
      },
      'code': {
        'isActive': editor.value.isActive('code'),
        'can': editor.value.can().chain().focus().toggleCode().run(),
      },
      'bulletList': {
        'isActive': editor.value.isActive('bulletList'),
        'can': editor.value.can().chain().focus().toggleBulletList().run(),
      },
      'orderedList': {
        'isActive': editor.value.isActive('orderedList'),
        'can': editor.value.can().chain().focus().toggleOrderedList().run(),
      },
      'blockquote': {
        'isActive': editor.value.isActive('blockquote'),
        'can': editor.value.can().chain().focus().toggleBlockquote().run(),
      },
      'taskList': {
        'isActive': editor.value.isActive('taskList'),
        'can': editor.value.can().chain().focus().toggleTaskList().run(),
      },
      'paragraph': {
        'isActive': editor.value.isActive('paragraph'),

      },
      'heading1': {
        'isActive': editor.value.isActive('heading', { level: 1 }),

      },
      'heading2': {
        'isActive': editor.value.isActive('heading', { level: 2 }),
      },
      'heading3': {
        'isActive': editor.value.isActive('heading', { level: 3 }),
      },
      'heading4': {
        'isActive': editor.value.isActive('heading', { level: 4 }),
      },
      // 'indent': {
      //   'isActive': editor.value.isActive({ textAlign: 'left' }),
      //   'can': editor.value.can().chain().focus().indent().run(),
      // },
      // 'outdent': {
      //   'isActive': editor.value.isActive({ textAlign: 'right' }),
      //   'can': editor.value.can().chain().focus().outdent().run(),
      // },
      'undo': {
        'can': editor.value.can().chain().focus().undo().run(),
      },
      'redo': {
        'can': editor.value.can().chain().focus().redo().run(),
      },
    };

    sendMessageToNative({ event: 'onTransaction', data: msg });

  }


};




const setupFunction = () => {
  window.setConfig = setConfig;
  window.setEditorContent = setEditorContent;
  window.getEditorContent = getEditorContent;
  window.toggleBold = toggleBold;
  window.toggleItalic = toggleItalic;
  window.toggleUnderline = toggleUnderline;
  window.toggleStrike = toggleStrike;
  window.toggleCode = toggleCode;
  window.toggleBulletList = toggleBulletList;
  window.toggleOrderedList = toggleOrderedList;
  // window.setTextAlign = setTextAlign;
  window.indent = indent;
  window.outdent = outdent;
  window.toggleBlockquote = toggleBlockquote;
  window.toggleTaskList = toggleTaskList;
  window.setParagraph = setParagraph;
  window.toggleHeading = toggleHeading;
  window.undo = undo;
  window.redo = redo;
  window.triggerBlur = triggerBlur;

}



const setConfig = (data) => {
  const { editable, autofocus } = data;
  _editable.value = editable;

  initEditor(editable, autofocus)
  return true;
};

// 暴露一个全局函数供 Flutter 调用
const setEditorContent = (message) => {
  // const message = JSON.parse(messageJson);
  editor.value.commands.setContent(message || '');
  return true;
};

const getEditorContent = () => {
  const markdownContent = editor.value.storage.markdown.getMarkdown();
  sendMessageToNative({ event: 'getEditorContent', data: markdownContent });
  return true;
}

const toggleBold = () => {
  editor.value.chain().focus().toggleBold().run();
  return true;
}
const toggleItalic = () => {
  editor.value.chain().focus().toggleItalic().run();
  return true;
}
const toggleUnderline = () => {
  editor.value.chain().focus().toggleUnderline().run();
  return true;
}
const toggleStrike = () => {
  editor.value.chain().focus().toggleStrike().run();
  return true;
}
const toggleCode = () => {
  editor.value.chain().focus().toggleCode().run();
  return true;
}
const toggleBulletList = () => {
  editor.value.chain().focus().toggleBulletList().run();
  return true;
}
const toggleOrderedList = () => {
  editor.value.chain().focus().toggleOrderedList().run();
  return true;
}
///
/// [align] left|right
// const setTextAlign = (align) => {
//   editor.value.chain().focus().setTextAlign(align).run()
//   return true;
// }
const toggleBlockquote = () => {
  editor.value.chain().focus().toggleBlockquote().run();
  return true;
}

const indent = () => {
  editor.value.chain().focus().indent().run()
  return true;
}
const outdent = () => {
  editor.value.chain().focus().outdent().run();
  return true;
}

const toggleTaskList = () => {
  editor.value.chain().focus().toggleTaskList().run();
  return true;
}
const setParagraph = () => {
  editor.value.chain().focus().setParagraph().run();
  return true;

}
const toggleHeading = (level) => {
  editor.value.chain().focus().toggleHeading({ level: level }).run()
  return true;
}

const undo = () => {
  editor.value.chain().focus().undo().run();
  return true;
}

const redo = () => {
  editor.value.chain().focus().redo().run();
  return true;
}
const triggerBlur = () => {
  editor.value.commands.blur();
  return true;
}



</script>

<style lang="scss">
.editor-container {
  padding: 1.25rem;
  position: relative;
  width: 100%;


  .control-group {
    width: 100%;
    background-color: #fff;

  }

  .control-group.keyboard-visible {
    display: block;
    // transform: translateY(-100%);
  }


  .is-active {
    background-color: bisque;
  }



}

input,
textarea {
  caret-color: transparent;
  /* 隐藏光标，避免干扰 */
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}


/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;

  }

  color-scheme: light only;
  color: #20202C;

  &:focus {
    outline: none;
  }

  p {
    font-size: 1rem;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  strong {
    font-weight: bold;
  }

  /* Task list specific styles */
  ul[data-type="taskList"] {
    list-style: none;
    margin-left: 0;
    padding: 0;

    li {
      align-items: flex-start;
      display: flex;

      >label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      >div {
        flex: 1 1 auto;
      }
    }

    input[type="checkbox"] {
      cursor: pointer;
    }

    ul[data-type="taskList"] {
      margin: 0;
    }
  }



  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;
    margin-top: 1rem;
    text-wrap: pretty;
    font-weight: bold
  }

  h1,
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    background-color: #F5F6F7;
    border-radius: 0.4rem;
    color: #65656C;
    padding: 0.2rem 0.6rem;
    font-size: 1rem;
  }

  pre {
    background: var(--black);
    border-radius: 0.5rem;
    color: var(--white);
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid #F5F6F7;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--gray-2);
    margin: 2rem 0;
  }

  /* Table-specific styling */
  table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;

    td,
    th {
      border: 1px solid var(--gray-3);
      box-sizing: border-box;
      min-width: 1em;
      padding: 6px 8px;
      position: relative;
      vertical-align: top;

      >* {
        margin-bottom: 0;
      }
    }

    th {
      background-color: var(--gray-1);
      font-weight: bold;
      text-align: left;
    }

    .selectedCell:after {
      background: var(--gray-2);
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      pointer-events: none;
      position: absolute;
      z-index: 2;
    }

    .column-resize-handle {
      background-color: var(--purple);
      bottom: -2px;
      pointer-events: none;
      position: absolute;
      right: -2px;
      top: 0;
      width: 4px;
    }
  }

  .tableWrapper {
    margin: 1.5rem 0;
    overflow-x: auto;
  }

  &.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

}
</style>
