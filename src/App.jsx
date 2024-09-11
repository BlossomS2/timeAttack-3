import { useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

// 1. useQuery로 posts를 불러오는 로직을 작성합니다.. ?
//     1. posts를 위한 query key : “posts”
// 2. 데이터가 로딩중일 때, “로딩중입니다…” / 오류가 발생했을 때, “오류가 발생하였습니다…”를 출력합니다.
// 3. 데이터 로딩이 완료되면 map 함수를 이용하여 데이터를 순회하며 출력합니다.
//     1. 이 때, posts 정보의 title과 views가 보여야 합니다.
// 4. 컴포넌트 상단에 views와 title을 입력하여 추가하는 로직을 작성합니다. useMutation을 활용해서요.
// 5. 추가가 완료되면 invalidateQueries로 데이터 갱신을 합니다.
const { data: posts, isLoading, isError } = useQuery("posts", fetchPosts);

const [title, setTitle] = useState("");
const [views, setViews] = useState("");

const fetchPosts = async () => {
  const { data } = await axios.get("http//localhost:4000/posts");
  return data;
};

const App = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <input
          type="number"
          value={views}
          onChange={(e) => {
            setViews(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default App;
