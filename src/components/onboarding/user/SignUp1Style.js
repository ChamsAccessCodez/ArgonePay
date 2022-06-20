import styled from "styled-components";
import { Link } from "react-router-dom";

export const OnboardingContainer = styled.div`
  background: #f9f9f9;
  width: 100vw;
  height: auto;
  // background: tomato;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const OnboardingWrapper = styled.div`
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
// export const Arrow = styled.img`
// height: 13px;
// width: 7px;
// margin-right: 8px;
// border: 1.5px solid #000927;
// `;
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
export const AuthDashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: blue;
`;
export const Buttons = styled.div`
  width: 100%;
  // background: blue;
  display: flex;
  justify-content: center;
  margin-bottom: 33.3px;
`;
export const Infos = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding-left: 40px;
  // padding-right: 40px;
`;
export const Step2Button = styled.div`
  background: ${({ bg }) => (bg ? "#EFEFEF" : "#ffffff")};
  width: 50%;
  hight: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ cl }) => (cl ? "#707070" : "#8ABB2A")};
  border-bottom-right-radius: ${({ rd }) => (rd ? "0px" : "10px")};
  border-bottom: 8px solid ${({ bb }) => (bb ? "#EFEFEF" : "#8ABB2A")};
`;
export const Step1Button = styled.div`
  background: ${({ bg }) => (bg ? "#ffffff" : "#EFEFEF")};
  width: 50%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ cl }) => (cl ? "#8ABB2A" : "#707070")};
  cursor: pointer;
  border-bottom-left-radius: ${({ rd }) => (rd ? "10px" : "0px")};
  border-bottom: 8px solid ${({ bb }) => (bb ? "#8ABB2A" : "#EFEFEF")};
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
export const LinkUp = styled.div`
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #707070;
  margin-top: 20px;

  span {
    font-family: Helvetica Neue;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color: #04487f;
    cursor: pointer;
  }
`;
export const Send = styled.button`
  outline: none;
  border: 0;
  width: 90%;
  height: 44px;
  text-align: center;
  margin-top: 20px;
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
export const FormFields = styled.div`
  width: 90%;
  // background-color: pink;
  display: flex;
  flex-direction: column;
`;
export const One = styled.div`
  width: 100%;
  // background-color: blue;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const OneCountry = styled.div`
  width: 100%;
  // background-color: blue;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const OneEducation = styled.div`
  width: 100%;
  // background-color: blue;
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Left = styled.div`
  // background: green;
  width: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;
export const LeftCountry = styled.div`
  // background: green;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;
export const LeftEducation = styled.div`
  // background: green;
  width: 100%;
  margin-right: 10px;
  margin-left: 10px;
`;
export const FirstName = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const MiddleName = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const LastName = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Email = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Dob = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Gender = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Country = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Education = styled.div`
  // background: pink;
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  background: none;
  color: gray;
  padding-left: 0px;
  font-size: 14px;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const Address = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const State = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const BankName = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const AccountNumber = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const PhoneNumber = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const FirstNameData = styled.div`
width: 100%;
height: 20px;
border: none;
border-bottom: 1px solid #B7B7B7;
font-family: Helvetica Neue;
font-size: 12px;
font-weight: 500;
text-align: left;
color: #B7B7B7;
text-transform: uppercase;

  }
  // width: 100%;
  // height: 30px;
  // border: none;
  // border-bottom: 1px solid #B7B7B7;

  // ::placeholder {
  //   color: #b7b7b7;
  //   margin-top: 5px;
  //   margin-bottom: 5px;
  // }
`;
export const MiddleNameData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const LastNameData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const DobData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const GenderData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const CountryData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const EducationData = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  color: #b7b7b7;
  text-transform: uppercase;
`;
export const EmailData = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const AddressData = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const StateData = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;
  text-transform: uppercase;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const BankData = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;
  text-transform: uppercase;
  background: #fafff0;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const AccountData = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;
  text-transform: uppercase;
  background: #fafff0;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const PhoneData = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;
  text-transform: uppercase;
  background: #fafff0;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #c7c7c7;
  }
`;
export const Right = styled.div`
  // background: white;
  width: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;
export const BvnDesc = styled.div`
  font-family: Helvetica Neue;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #8abb2a;
  margin-bottom: 10px;
`;
export const BvnForm = styled.div`
  width: 95%;
  background: #fafff0;
  border: 1px solid #cdef8a;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const BVNnumber = styled.div`
  width: 100%;
  justify-self: center;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #150035;
`;
export const BVNdata = styled.input`
  width: 95%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #b7b7b7;
  font-size: 12px;
  text-transform: uppercase;
  align-self: center;
  background: #fafff0;

  ::placeholder {
    color: #707070;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
export const BVNcode = styled.div`
  width: 100%;
  font-family: Helvetica Neue;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #b7b7b7;
  margin-bottom: 10px;
`;
export const PhoneInfo = styled.div`
  background: #fff9e9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PhoneText = styled.div`
  // background: blue;
  width: 90%;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #b7b7b7;
  margin-top: 2px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;
export const PhoneIcon = styled.img`
  // background: green;
  height: 14px;
  width: 14px;
  align-self: flex-end;
`;
export const Cover = styled.div`
  display: flex;
  // flex-direction: column;
  width: 100%;
`;
export const Dummy = styled.div`
  width: 43px;
  height: 31px;
  background: #efefef;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #c7c7c7;
`;
// export const OnboardingContainer = styled.div``;
