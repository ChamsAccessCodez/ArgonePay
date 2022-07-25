import styled from "styled-components";
import { Link } from "react-router-dom";

export const OtpContainer = styled.div`
  background: #f9f9f9;
  width: 100vw;
  height: 100vh;
  // background: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OtpWrapper = styled.div`
  // background: green;
  width: 400px;
  // width: 25%;
  // background: green;
  margin-top: 0px;
  margin-bottom: 100px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Movement = styled(Link)`
  width: 80%;
  margin-top: 30px;
  // background-color: red;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
`;
export const Back = styled.div`
  font-family: Helvetica Neue;
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
`;
export const Brand = styled.div`
width: 100%;
// background: red;
display: flex;
justify-content: center;
align-items: center;
color red;
margin-bottom: 20px;
`;
export const SignUpDescription = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue;
  font-size: 20px;
  font-weight: 500;
`;
export const OtpDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: blue;
`;
export const BrandImage = styled.img`
  height: 39px;
  width: 39px;
  margin-right: 10px;
`;
export const BrandText = styled.img`
  margin-left: 10px;
  height: 25px;
`;
// export const OnboardingContainer = styled.div``;
