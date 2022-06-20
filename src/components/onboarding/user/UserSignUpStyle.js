import styled from "styled-components";

// const UserContainer = styled.div``;
// const UserContainer = styled.div``;
// const UserContainer = styled.div``;

export const Err = styled.div`
  font-size: smaller;
  color: red;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
  margin-left: 30px;
`;

export const UserContainer = styled.form`
  width: 100%s;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const One = styled.div`
  width: 80%;
  // background-color: pink;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Nin = styled.div`
  width: 50%;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #707070;
  justify-content: left;
`;
export const Dial = styled.div`
  width: 50%;
  font-family: Helvetica Neue;
  font-size: 10px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  display: flex;
  justify-content: right;
`;
export const Two = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
`;
export const UserInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #8abb2a;
  padding-left: 10px;

  ::placeholder {
    color: #b7b7b7;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const Three = styled.button`
  outline: none;
  border: 0;
  width: 80%;
  height: 44px;
  text-align: center;
  margin-bottom: 20px;
  background: #04487f;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  transition: all 1s;

  :hover {
    background: #efefef;
    color: #04487f;
    cursor: pointer;
  }
`;
