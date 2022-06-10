import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const OnboardingContainer = styled.div`
background: #F9F9F9;
width: 100vw;
height: 100vh;
// background: tomato;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const OnboardingWrapper = styled.div`
width: 25%;
// background: green;
margin-top: 100px;
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
margin-top:100px;
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
// padding-left: 40px;
// padding-right: 40px;
`;
export const MerchantSignupButton = styled.div`
background: ${({bg})=>bg ? "#EFEFEF" : "#ffffff"};
width: 50%;
hight: 45px;
display: flex;
justify-content: center;
align-items: center;
color: ${({cl})=>cl ? "#707070" : "#8ABB2A"};
cursor: pointer;
border-bottom-right-radius: ${({rd})=>rd ? "0px" : "10px"};
border-bottom: 8px solid ${({bb})=>bb ? "#EFEFEF" : "#8ABB2A"};
`;
export const UserSignupButton = styled.div`
background: ${({bg})=>bg ? "#ffffff" : "#EFEFEF"};
width: 50%;
height: 45px;
display: flex;
justify-content: center;
align-items: center;
color: ${({cl})=>cl ? "#8ABB2A" : "#707070"};
cursor: pointer;
border-bottom-left-radius: ${({rd})=>rd ? "10px" : "0px"};
border-bottom: 8px solid ${({bb})=>bb ? "#8ABB2A" : "#EFEFEF"};
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

span{
font-family: Helvetica Neue;
font-size: 14px;
font-weight: 700;
text-align: center;
color: #04487F;
cursor: pointer;
}
`;
// export const OnboardingContainer = styled.div``;