import { useState } from "react";
import "./App.css";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  리덕스추가하는함수,
  리덕스삭제함수,
  리덕스완료취소함수,
  리덕스수정함수,
} from "./store";
import ModalPortal from "./ModalPortal";

function App() {
  // 모달창
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

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

  const 수정버튼클릭함수 = (id) => {
    setOpen(true);
    setSelected(id);
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
                  key={할일.id}
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
                  <button onClick={() => 수정버튼클릭함수(할일.id)}>
                    수정
                  </button>
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
                  key={할일.id}
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
                  <button onClick={() => 수정버튼클릭함수(할일.id)}>
                    수정
                  </button>
                  <button onClick={() => 삭제함수(할일.id)}>삭제</button>
                </div>
              ))}
          </div>
        </div>
      </div>
      {isOpen && selected && (
        <ModalPortal closePortal={handleClose}>
          <SampleModal 선택한할일id={selected} onClose={handleClose} />
        </ModalPortal>
      )}
    </div>
  );
}

export default App;

const SampleModal = ({ 선택한할일id, onClose }) => {
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === 선택한할일id)
  );
  const dispatch = useDispatch();
  const [입력값들, set입력값들] = useState({
    제목: todo.제목,
    내용: todo.내용,
  });

  const 입력값들변경하는함수 = (e) => {
    set입력값들((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <input
        name="제목"
        value={입력값들.제목}
        onChange={입력값들변경하는함수}
      ></input>
      <input
        name="내용"
        value={입력값들.내용}
        onChange={입력값들변경하는함수}
      ></input>
      <button
        onClick={() => {
          dispatch(
            리덕스수정함수({
              ...todo,
              제목: 입력값들.제목,
              내용: 입력값들.내용,
            })
          );
          onClose();
        }}
      >
        변경해볼까?
      </button>
    </div>
  );
};
