import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [입력값들, set입력값들] = useState({
    제목: "",
    내용: "",
  });

  const [투두리스트, set투두리스트] = useState([
    { id: nanoid(), 제목: "리액트 공부", 내용: "빡세게 공부", 완료여부: false },
    { id: nanoid(), 제목: "국어 공부", 내용: "열심히 공부", 완료여부: false },
    {
      id: nanoid(),
      제목: "영어 공부",
      내용: "너무 어려운 공부",
      완료여부: true,
    },
    { id: nanoid(), 제목: "수학 공부", 내용: "포기", 완료여부: true },
  ]);

  const 추가하는함수 = (e) => {
    e.preventDefault();
    set투두리스트((prev) => {
      return [
        ...prev,
        {
          id: nanoid(),
          ...입력값들,
          완료여부: false,
        },
      ];
    });
  };

  const 입력값들변경하는함수 = (e) => {
    set입력값들((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const 삭제함수 = (id) => {
    set투두리스트((prev) => {
      return prev.filter((투두) => 투두.id !== id);
    });
  };

  const 완료및취소함수 = (id) => {
    set투두리스트((prev) => {
      return prev.map((할일) => {
        if (할일.id === id) {
          return {
            ...할일,
            완료여부: !할일.완료여부,
          };
        }
        return {
          ...할일,
        };
      });
    });
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
            {투두리스트
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
            {투두리스트
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
