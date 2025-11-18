<template>
  <div v-if="editor" class="editor-container" ref="editorContainer">
    <editor-content :editor="editor" />
  </div>

  <div class="ai-tip" v-show="aiTip && aiTip.length > 0">
    <span>{{ aiTip }}</span>
  </div>

  <div class="comment" v-if="showComment" @click="setGoodValue">
    <div class="comment-item good" v-show="commentValue !== 2">
      <div class="icon-text" v-show="commentValue === 0">
        <svg t="1747295265485" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1835" width="20" height="20">
          <path style="fill: #FF3B30"
            d="M51.605333 475.797333l35.242667 405.333334A74.666667 74.666667 0 0 0 161.237333 949.333333h46.208a74.666667 74.666667 0 0 0 74.666667-74.666666V469.333333a74.666667 74.666667 0 0 0-74.666667-74.666666H125.994667a71.658667 71.658667 0 0 0-55.04 24.213333 71.658667 71.658667 0 0 0-19.349334 56.917333zM161.237333 885.333333a9.514667 9.514667 0 0 1-10.624-9.749333l-35.242666-405.333333a10.666667 10.666667 0 0 1 10.624-11.584h81.450666a10.666667 10.666667 0 0 1 10.666667 10.666666v405.333334a9.429333 9.429333 0 0 1-10.666667 10.666666zM346.112 456V874.666667q0 74.666667 74.666667 74.666666h362.389333a68.053333 68.053333 0 0 0 71.850667-54.378666l114.56-405.653334a74.666667 74.666667 0 0 0-71.850667-94.954666H709.12l6.421333-21.461334 0.405334-1.322666a458.730667 458.730667 0 0 0 20.565333-95.552 191.296 191.296 0 0 0-21.610667-111.637334 205.589333 205.589333 0 0 0-80.085333-75.797333 95.146667 95.146667 0 0 0-49.770667-13.824 45.013333 45.013333 0 0 0-46.293333 43.221333 96.021333 96.021333 0 0 0-0.725333 10.688l-0.064 2.368q-5.226667 117.504-37.973334 172.096-26.282667 43.861333-108.309333 82.538667a72.746667 72.746667 0 0 0-45.568 70.336z m67.136 426.218667a10.282667 10.282667 0 0 1-3.136-7.552V456a13.333333 13.333333 0 0 1 8.853333-12.458667q99.626667-46.954667 135.936-107.52 39.594667-66.026667 46.528-192.704l2.858667 1.493334a142.72 142.72 0 0 1 55.722667 52.48 130.773333 130.773333 0 0 1 12.629333 74.794666 402.624 402.624 0 0 1-18.005333 81.088l-0.405334 1.344-18.773333 62.634667q-0.426667 1.493333-0.746667 3.050667-0.298667 1.536-0.448 3.093333-0.149333 1.578667-0.149333 3.136t0.170667 3.136q0.149333 1.578667 0.469333 3.114667t0.768 3.050666q0.469333 1.493333 1.066667 2.944 0.618667 1.450667 1.365333 2.837334t1.621333 2.688q0.853333 1.301333 1.877334 2.517333t2.112 2.325333q1.109333 1.109333 2.346666 2.090667 1.194667 1.002667 2.517334 1.856 1.301333 0.874667 2.688 1.621333t2.858666 1.322667q1.450667 0.597333 2.965334 1.066667a31.808 31.808 0 0 0 9.173333 1.344h231.616a10.666667 10.666667 0 0 1 10.261333 13.546666l-114.56 405.674667a9.728 9.728 0 0 1-10.261333 7.765333H420.778667a10.282667 10.282667 0 0 1-7.530667-3.114666z"
            p-id="1836"></path>
        </svg>
        <span>{{ goodValue }}</span>

      </div>

      <svg v-show="commentValue === 1" t="1747295300808" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2037" width="20" height="20">
        <path style="fill: #FF3B30"
          d="M207.445333 394.666667H125.994667a71.658667 71.658667 0 0 0-55.04 24.213333 71.658667 71.658667 0 0 0-19.349334 56.917333l35.242667 405.333334A74.666667 74.666667 0 0 0 161.237333 949.333333h46.208a74.666667 74.666667 0 0 0 74.666667-74.666666V469.333333a74.666667 74.666667 0 0 0-74.666667-74.666666zM957.269333 423.957333a70.997333 70.997333 0 0 0-59.52-29.632H709.12l6.421333-21.44 0.405334-1.322666a458.688 458.688 0 0 0 20.565333-95.552 191.296 191.296 0 0 0-21.610667-111.637334 205.589333 205.589333 0 0 0-80.085333-75.797333 95.146667 95.146667 0 0 0-49.770667-13.824 45.013333 45.013333 0 0 0-46.293333 43.221333 96 96 0 0 0-0.725333 10.688l-0.064 2.368q-5.226667 117.504-37.973334 172.096-26.282667 43.861333-108.309333 82.538667a72.746667 72.746667 0 0 0-45.568 70.336V874.666667q0 74.666667 74.666667 74.666666h362.389333a68.053333 68.053333 0 0 0 71.850667-54.378666l114.56-405.653334a70.976 70.976 0 0 0-12.309334-65.344z"
          p-id="2038"></path>
      </svg>

    </div>

    <div class="comment-gap" v-show="commentValue === 0"></div>

    <div class="comment-item bad" v-show="commentValue !== 1" @click="setBadValue">
      <div class="icon-text" v-show="commentValue === 0">
        <svg t="1747295332535" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2209" width="20" height="20">
          <path style="fill: #65656C"
            d="M110.890667 94.378667A72.213333 72.213333 0 0 0 87.04 143.146667l-35.541333 426.666666a71.68 71.68 0 0 0 19.456 56.746667A71.68 71.68 0 0 0 125.909333 650.666667h81.621334a74.666667 74.666667 0 0 0 74.666666-74.666667V149.333333a71.936 71.936 0 0 0-21.866666-52.8A71.936 71.936 0 0 0 207.530667 74.666667h-46.08a72.213333 72.213333 0 0 0-50.56 19.712zM150.826667 148.437333a9.514667 9.514667 0 0 1 10.624-9.770666h46.08a10.666667 10.666667 0 0 1 10.666666 10.666666v426.666667a9.429333 9.429333 0 0 1-10.666666 10.666667H125.909333a10.666667 10.666667 0 0 1-10.645333-11.541334zM420.864 74.666667q-74.666667 0-74.666667 74.666666v418.666667a72.746667 72.746667 0 0 0 45.568 70.336q82.026667 38.677333 108.330667 82.538667 32.725333 54.592 37.952 172.096l0.064 2.346666a96 96 0 0 0 0.725333 10.688 45.013333 45.013333 0 0 0 46.293334 43.242667 95.146667 95.146667 0 0 0 49.749333-13.824 205.589333 205.589333 0 0 0 80.106667-75.797333 191.296 191.296 0 0 0 21.610666-111.637334 458.709333 458.709333 0 0 0-20.565333-95.552l-0.405333-1.322666-6.421334-21.461334h188.608a74.666667 74.666667 0 0 0 71.850667-94.933333l-114.56-405.674667A68.053333 68.053333 0 0 0 783.253333 74.666667z m-10.666667 493.333333V149.333333a10.666667 10.666667 0 0 1 10.666667-10.666666h362.389333a9.728 9.728 0 0 1 10.24 7.765333l114.581334 405.674667a10.666667 10.666667 0 0 1-10.261334 13.568H666.197333a31.808 31.808 0 0 0-9.173333 1.344q-1.514667 0.426667-2.986667 1.045333t-2.837333 1.322667q-1.386667 0.746667-2.688 1.621333-1.322667 0.853333-2.538667 1.856-1.216 0.981333-2.346666 2.090667-1.088 1.109333-2.090667 2.346666t-1.877333 2.496q-0.896 1.301333-1.642667 2.688-0.725333 1.386667-1.344 2.837334-0.597333 1.450667-1.066667 2.944-0.469333 1.493333-0.768 3.050666-0.32 1.536-0.469333 3.114667t-0.170667 3.136q0 1.557333 0.149334 3.136 0.149333 1.557333 0.448 3.093333 0.298667 1.557333 0.746666 3.050667l18.773334 62.634667 0.426666 1.344a402.602667 402.602667 0 0 1 17.984 81.066666 130.773333 130.773333 0 0 1-12.629333 74.837334 142.72 142.72 0 0 1-55.722667 52.437333l-2.858666 1.514667q-6.933333-126.677333-46.528-192.725334-36.309333-60.544-135.936-107.52a13.333333 13.333333 0 0 1-8.853334-12.437333z"
            p-id="2210"></path>
        </svg>
        <span>{{ badValue }}</span>

      </div>



      <svg v-show="commentValue === 2" t="1747295342461" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2411" width="20" height="20">
        <path style="fill: #65656C"
          d="M207.530667 74.666667h-46.08A74.666667 74.666667 0 0 0 87.04 143.146667l-35.541333 426.666666a71.68 71.68 0 0 0 19.456 56.746667 71.68 71.68 0 0 0 54.954666 24.106667h81.621334a74.666667 74.666667 0 0 0 74.666666-74.666667V149.333333a71.957333 71.957333 0 0 0-21.866666-52.8A71.936 71.936 0 0 0 207.530667 74.666667zM969.664 534.698667L855.104 129.066667A68.053333 68.053333 0 0 0 783.253333 74.666667H420.864q-74.666667 0-74.666667 74.666666v418.666667a72.725333 72.725333 0 0 0 45.568 70.336q82.026667 38.677333 108.330667 82.538667 32.725333 54.592 37.952 172.096l0.064 2.346666a96 96 0 0 0 0.725333 10.688 45.013333 45.013333 0 0 0 46.293334 43.242667 95.146667 95.146667 0 0 0 49.749333-13.824 205.589333 205.589333 0 0 0 80.106667-75.797333 191.274667 191.274667 0 0 0 21.610666-111.637334 458.666667 458.666667 0 0 0-20.565333-95.552l-0.405333-1.322666-6.421334-21.461334h188.608a74.666667 74.666667 0 0 0 71.850667-94.933333z"
          p-id="2412"></path>
      </svg>
    </div>

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
import SearchAndReplace from "@sereneinserenade/tiptap-search-and-replace";
import Image from '@tiptap/extension-image';

import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { Markdown } from "tiptap-markdown";


import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

// import content from '@/assets/data/test.md?raw'





const editor = ref()
const _editable = ref(false)
const searchTerm = ref("");
const replaceTerm = ref("");
const editorContainer = ref()
const showComment = ref(false)
const commentValue = ref(0)
const goodValue = ref("");
const badValue = ref("");
const aiTip = ref("");
// const caseSensitive = ref(false);
// const autofocusStr = ref('')

onMounted(() => {
  // http://localhost:5173/?editable=true&autofocus=true
  // const urlParams = new URLSearchParams(window.location.search)
  // editableStr.value = urlParams.get('editable')
  // autofocusStr.value = urlParams.get('autofocus')

  // console.log(editableStr.value, autofocusStr.value);


  setupFunction();

  // 测试
  // initEditor({
  //   editable: true,
  //   autofocus: true,
  //   content: content,
  //   show_comment: true,
  //   comment_value: 0,
  //   good_value: "好评",
  //   bad_value: "差评",
  //   ai_tip: "AI 助手正在为您服务",
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

const initEditor = (data) => {

  const { editable, autofocus, content, show_comment, comment_value, good_value, bad_value, ai_tip } = data;
  _editable.value = editable;
  console.log('show_comment', show_comment);

  showComment.value = show_comment;
  commentValue.value = comment_value;
  goodValue.value = good_value;
  badValue.value = bad_value;
  aiTip.value = ai_tip;
  console.log('initEditor', editable, autofocus, content);


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
      SearchAndReplace.configure(),
      Image,
    ],
    content: content,
    editable: editable == true || editable == 'true',
    // autofocus: autofocus,
    onUpdate: () => {
      const markdownContent = editor.value.storage.markdown.getMarkdown();
      sendMessageToNative({ event: 'onUpdate', data: markdownContent });
      // updateHeight();
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

  // updateHeight();

}

// 发送消息到 Flutter
const sendTransactionToNative = () => {

  if (editor.value && (_editable.value === true)) {

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


// const updateHeight = () => {
//   nextTick(() => {
//     setTimeout(() => {
//       if (editorContainer.value) {
//         const height = editorContainer.value.offsetHeight;
//         sendMessageToNative({ event: 'offsetHeight', data: height + '' });
//       }
//     }, 100);



//   });
// };


const setupFunction = () => {
  window.initEditor = initEditor;
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
  // 处理搜索替换
  window.setSearchValue = setSearchValue;
  window.setReplaceValue = setReplaceValue;
  window.replace = replace;
  window.next = next;
  window.previous = previous;
  window.clear = clear;
  window.replaceAll = replaceAll;

}



// 暴露一个全局函数供 Flutter 调用
const setEditorContent = (message) => {
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

// -------------处理搜索替换-----------------


const setSearchValue = (value) => {
  searchTerm.value = value || '';
};
const setReplaceValue = (value) => {
  replaceTerm.value = value || '';
};

const updateSearchReplace = (clearIndex = false) => {
  if (!editor.value) return;

  if (clearIndex) editor.value.commands.resetIndex();

  editor.value.commands.setSearchTerm(searchTerm.value);
  editor.value.commands.setReplaceTerm(replaceTerm.value);
  // editor.value.commands.setCaseSensitive(caseSensitive.value);
};


const goToSelection = () => {
  if (!editor.value) return;

  const { results, resultIndex } = editor.value.storage.searchAndReplace;
  const position = results[resultIndex];

  if (!position) return;

  editor.value.commands.setTextSelection(position);

  const { node } = editor.value.view.domAtPos(
    editor.value.state.selection.anchor
  );
  node instanceof HTMLElement &&
    node.scrollIntoView({ behavior: "smooth", block: "center" });
};


watch(
  () => searchTerm.value.trim(),
  (val, oldVal) => {
    if (!val) clear();
    if (val !== oldVal) updateSearchReplace(true);
  }
);

watch(
  () => replaceTerm.value.trim(),
  (val, oldVal) => (val === oldVal ? null : updateSearchReplace())
);

watch(
  () => editor.value?.storage?.searchAndReplace?.resultIndex,
  (val, oldVal) => {
    if (val !== oldVal) {
      sendMessageToNative({ event: 'searchResultIndex', data: val + '' });
    }
  }
);
watch(
  () => editor.value?.storage?.searchAndReplace?.results.length,
  (val, oldVal) => {
    if (val !== oldVal) {
      sendMessageToNative({ event: 'searchResults', data: val + '' });
    }
  }
);

// watch(
//   () => caseSensitive.value,
//   (val, oldVal) => (val === oldVal ? null : updateSearchReplace(true))
// );

const replace = () => {
  editor.value?.commands.replace();
  goToSelection();
};

const next = () => {
  editor.value?.commands.nextSearchResult();
  goToSelection();
};

const previous = () => {
  editor.value?.commands.previousSearchResult();
  goToSelection();
};

const clear = () => {
  searchTerm.value = replaceTerm.value = "";
  editor.value.commands.resetIndex();
};

const replaceAll = () => editor.value?.commands.replaceAll();


/// 处理评论

const setGoodValue = () => {
  if (commentValue.value === 0) {
    commentValue.value = 1;
    sendMessageToNative({ event: 'setGoodValue', data: commentValue.value + '' });
  }

};
const setBadValue = () => {
  if (commentValue.value === 0) {
    commentValue.value = 2;
    sendMessageToNative({ event: 'setBadValue', data: commentValue.value + '' });
  }
};


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

  .search-result {
    background-color: rgba(255, 226, 0, 0.3);

    &-current {
      background-color: rgba(255, 226, 0, 1);
    }
  }

  img {
    display: block;
    height: auto;
    margin: 1.5rem 0;
    max-width: 100%;

    &.ProseMirror-selectednode {
      outline: 3px solid var(--purple);
    }
  }

}

.ai-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #65656C;

}

.comment {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  padding: 24px 0 180px 0;


  .comment-item {
    padding: 10px 26px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-text {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #65656C;

      span {
        padding-left: 8px;
      }

    }

    &.good {
      background-color: #FFECEB;
    }

    &.bad {
      background-color: #F5F6F7;
    }


  }

  .comment-gap {
    width: 26px;
    height: 24px;
  }
}
</style>
