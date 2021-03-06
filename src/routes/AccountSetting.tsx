import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UI } from "../components/UI";
import { authService } from "../myBase";
import "./pages.css";

const Main = styled.div`
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.bgColor};
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 10px;
    background: ${(props) => props.theme.tabColor};
    h2 {
      margin: 0 0 30px;
      padding: 0;
      font-size: 30px;
      font-weight: 500;
      color: #fff;
      text-align: center;
    }
    form {
      .a {
        background-color: #000;
        position: relative;
        padding: 10px 20px;
        color: #bccbde;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        margin-top: 40px;
        margin-left: 90px;
        letter-spacing: 4px;
        border: 0;
        border-radius: 4px;
        &:hover {
          background: #bccbde;
          color: #fff;
          border-radius: 5px;
          box-shadow: 0 0 5px #bccbde, 0 0 25px #bccbde, 0 0 50px #bccbde,
            0 0 100px #bccbde;
        }
      }
    }
  }
`;

function AccountSetting() {
  const [main, setMain] = useState("main");
  const onLogOutClick = () => authService.signOut();
  return (
    <>
      <div className="wrapper">
        <UI setMain={setMain} />
        <Main className={main} id="main">
          <div className="login-box">
            <h2>Account Setting</h2>
            <form>
              <Link to="/">
                <input
                  onClick={onLogOutClick}
                  className="a"
                  type="submit"
                  value={"Log Out"}
                />
              </Link>
            </form>
          </div>
        </Main>
      </div>
    </>
  );
}
export default AccountSetting;
