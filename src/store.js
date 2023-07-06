// 기본세팅
import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

// redux state 생성
let 투두리스트 = createSlice({
  name: "투두리스트",
  initialState: [
    { id: nanoid(), 제목: "리액트 공부", 내용: "빡세게 공부", 완료여부: false },
    { id: nanoid(), 제목: "국어 공부", 내용: "열심히 공부", 완료여부: false },
    {
      id: nanoid(),
      제목: "영어 공부",
      내용: "너무 어려운 공부",
      완료여부: true,
    },
    { id: nanoid(), 제목: "수학 공부", 내용: "포기", 완료여부: true },
  ],
  reducers: {
    리덕스추가하는함수: (state, action) => {
      state.push(action.payload);
    },
    리덕스삭제함수: (state, action) => {
      return state.filter((할일) => 할일.id !== action.payload);
    },
    리덕스완료취소함수: (state, action) => {
      const 선택된놈 = state.find((할일) => 할일.id === action.payload);
      선택된놈.완료여부 = !선택된놈.완료여부;
    },
    리덕스수정함수: (state, action) => {
      return state.map((할일) => {
        if (할일.id === action.payload.id) {
          return {
            ...할일,
            제목: action.payload.제목,
            내용: action.payload.내용,
          };
        }
        return {
          ...할일,
        };
      });
    },
  },
});

const store = configureStore({
  reducer: {
    todos: 투두리스트.reducer,
  },
});

export const {
  리덕스수정함수,
  리덕스추가하는함수,
  리덕스삭제함수,
  리덕스완료취소함수,
} = 투두리스트.actions;
export default store;
