import { useState } from 'react';
import MemoInput from './MemoInput';
import MemoList from './MemoList';


function App() {
  const [memos, setMemos] = useState([]); // メモの初期値は空の配列

  const addMemo = (memo) => {   // メモを追加する関数
    setMemos([...memos, memo]); // 新しいメモを追加
  };

  return (
    <div className="App">
      <h1>メモアプリ</h1>
      <MemoInput onAddMemo={addMemo}/>  
      <MemoList memos={memos}/>

    </div>
  );
}

export default App;
