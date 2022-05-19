import { Link } from "react-router-dom";
// a태그 대신 Link를 사용해서 변경
//페이지전환시 깜빡임이 없고 속도가 빠름 SPA
const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>EDIT</Link>
      <br />
    </>
  );
};

export default RouteTest;
