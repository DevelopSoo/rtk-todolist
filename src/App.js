import { useState } from "react";
import "./App.css";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  리덕스추가하는함수,
  리덕스삭제함수,
  리덕스완료취소함수,
} from "./store";

function App() {
  const [입력값들, set입력값들] = useState({
    제목: "",
    내용: "",
  });

  // redux toolkit
  const state = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  const 추가하는함수 = (e) => {
    e.preventDefault();
    dispatch(
      리덕스추가하는함수({
        id: nanoid(),
        ...입력값들,
        완료여부: false,
      })
    );
  };

  const 입력값들변경하는함수 = (e) => {
    set입력값들((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const 삭제함수 = (id) => {
    dispatch(리덕스삭제함수(id));
  };

  const 완료및취소함수 = (id) => {
    dispatch(리덕스완료취소함수(id));
  };

  return (
    <div>
      {/* header */}
      <div style={{ backgroundColor: "#33FFE0" }}>투두리스트</div>
      {/* input */}
      <div>
        <form onSubmit={추가하는함수}>
          <input name="제목" type="text" onChange={입력값들변경하는함수} />
          <input name="내용" type="text" onChange={입력값들변경하는함수} />
          <button>추가하기</button>
        </form>
      </div>
      {/* body */}
      <div>
        {/* isWorking */}
        <div>
          <h3>해라</h3>
          <div style={{ display: "flex" }}>
            {state
              .filter((할일) => !할일.완료여부)
              .map((할일) => (
                <div
                  style={{
                    border: "1px solid black",
                    width: "200px",
                    height: "200px",
                    marginRight: "12px",
                  }}
                >
                  <h4>{할일.제목}</h4>
                  <p>{할일.내용}</p>
                  <button onClick={() => 완료및취소함수(할일.id)}>완료</button>
                  <button>수정</button>
                  <button onClick={() => 삭제함수(할일.id)}>삭제</button>
                </div>
              ))}
          </div>
        </div>

        {/* isDone */}
        <div>
          <h3>했다</h3>
          <div style={{ display: "flex" }}>
            {state
              .filter((할일) => 할일.완료여부)
              .map((할일) => (
                <div
                  style={{
                    border: "1px solid black",
                    width: "200px",
                    height: "200px",
                    marginRight: "12px",
                  }}
                >
                  <h4>{할일.제목}</h4>
                  <p>{할일.내용}</p>
                  <button onClick={() => 완료및취소함수(할일.id)}>취소</button>
                  <button>수정</button>
                  <button onClick={() => 삭제함수(할일.id)}>삭제</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
