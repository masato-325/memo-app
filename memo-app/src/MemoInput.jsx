import React, {useState} from 'react'
// useStateを使うことで、関数コンポーネントで状態を持つことができる

const MemoInput = ({onAddMemo}) => { //関数コンポーネントを定義,propsでonAddMemoを受け取る
  const [input, setInput] = useState(''); // inputの状態を持つ初期値は空文字

  const handleInput = (event) => { // テキストエリアの入力値が変更されたときに呼ばれる関数
    setInput(event.target.value) // 入力値をinputの状態にセット
  };

  const handleSubmit = (event) => { // フォームが送信されたときに呼ばれる関数
    event.preventDefault(); // ページがリロードされるのを防ぐ
    onAddMemo(input); // onAddMemo関数にinputの状態を渡す
    setInput(''); // inputの状態をリセット
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={input} onChange={handleInput} />
      <button type="submit">追加</button>
    </form>
  );
}

export default MemoInput