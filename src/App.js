import "./App.css";

function App() {
  return (
    <div>
      {/* header */}
      <div style={{ backgroundColor: "#33FFE0" }}>투두리스트</div>
      {/* input */}
      <div>
        <input type="text" />
        <input type="text" />
        <button>추가하기</button>
      </div>
      {/* body */}
      <div>
        {/* isWorking */}
        <div>
          <h3>해라</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "200px",
                marginRight: "12px",
              }}
            >
              <h4>제목</h4>
              <p>내용내용내용내용</p>
              <button>완료</button>
              <button>수정</button>
              <button>삭제</button>
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "200px",
              }}
            >
              <h4>제목</h4>
              <p>내용내용내용내용</p>
              <button>완료</button>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>

        {/* isDone */}
        <div>
          <h3>했다</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "200px",
                marginRight: "12px",
              }}
            >
              <h4>제목</h4>
              <p>내용내용내용내용</p>
              <button>취소</button>
              <button>수정</button>
              <button>삭제</button>
            </div>
            <div
              style={{
                border: "1px solid black",
                width: "200px",
                height: "200px",
              }}
            >
              <h4>제목</h4>
              <p>내용내용내용내용</p>
              <button>취소</button>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
