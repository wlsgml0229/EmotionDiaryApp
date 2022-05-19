import { useSearchParams, useNavigate } from "react-router-dom";
const Edit = () => {
  //페이지를 이동시켜주는 함수를 반환
  const navigate = useNavigate();
  //커스텀 훅
  //첫번째 배열은 get
  //두번째 항목은 set
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log(id, mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정입니다.</p>
      <button onClick={() => setSearchParams({ who: "jinny" })}>
        param변경
      </button>
      <button onClick={() => navigate("/home")}>home</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
