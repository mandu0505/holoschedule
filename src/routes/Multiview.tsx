import { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { UI } from "../components/UI";
import "./pages.css";

const Main = styled.div`
  background: ${(props) => props.theme.bgColor};
  color: #fff;
`;
const Head = styled.div``;

function Multiview() {
  const [main, setMain] = useState("main");
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={`Watch multiple vtuber streams at the same time. 
          Easily customize and share your layout, and experience a new way to enjoy your favorite collabs...`}
        />
      </Helmet>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <Head>Multiview</Head>
          <h1>멀티뷰(콜라보용)</h1>
        </Main>
      </div>
    </>
  );
}
export default Multiview;
