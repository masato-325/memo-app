import React from "react";

const MemoList = ({ memos }) => { //関数コンポーネントを定義,propsでmemosを受け取る
  return (
    <ul>
      {memos.map((memo, index) => ( //memosの要素を一つずつ取り出してli要素に格納
        <li key={index}>{memo}</li> //key属性にindexを指定
      ))}
    </ul>
  );
}

export default MemoList;