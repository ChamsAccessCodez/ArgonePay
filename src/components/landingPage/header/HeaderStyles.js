import styled from 'styled-components'
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div`
background: #ffffff;
width: 100vw;
height: 80px;
display: flex;
justify-content: space-around;
align-items: center;
z-index: 1000;

@media screen and (max-width: 960px) {
justify-content: space-between;
position: fixed;
}
`;
export const ArgoneLogo = styled.div`
// background: red;
height: inherit;
display: flex;
justify-content: center;
align-items: center;
padding-left: 15px;
padding-right: 15px;
`;
export const Logo = styled.div`
// background: white;
height: inherit;
display: flex;
justify-content: center;
align-items: center;
margin-right: 8px;
`;
export const ArgoneName = styled.div`
// background: white;
height: inherit;
display: flex;
justify-content: center;
align-items: center;

img{
    margin-top: 5px;
}
`;
export const MobileCover = styled.div`
// background: yellow;
height: inherit;
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 80px;
  left: ${({ toggle }) => (toggle ? 0 : "-100%")};
  transition: all 0.5s ease;
  background: #ffffff;
  z-index: 999;
}
`;
export const BurgerMenu = styled.div`
display: none;

@media screen and (max-width: 960px) {
// background: green;
display: flex;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
}
`;
export const ArgoneNavs = styled.div`
// background: red;
height: inherit;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 960px) {
// background: blue;
height: 50%;
display: flex;
flex-direction: column;
}
`;
export const Items = styled.div`
// background: green;
height: inherit;
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
margin-left: 5px;
margin-right: 5px;
padding-left: 15px;
padding-right: 15px;
cursor: pointer;

:after {
    content: "";
    background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
    width: 40%;
    height: 3px;
    opacity: 0;
    transition: all 650ms;
}

:hover{
    :after {
        width: 100%;
        opacity: 1;
        cursor: pointer;
    }
}

@media screen and (max-width: 960px) {
color: #000000;
// color: #ffffff;
// background: brown;
height: 90px;
}
`;
export const Products = styled.div`
text-transform: capitalize;
font-family: Kanit;
font-weight: 400;
font-size: 16px;

@media screen and (max-width: 960px) {
font-size: 20px;
}

`;
export const Developers = styled.div`
ext-transform: capitalize;
font-family: Kanit;
font-weight: 400;
font-size: 16px;

@media screen and (max-width: 960px) {
font-size: 20px;
}
`;
export const Faq = styled.div`
ext-transform: capitalize;
font-family: Kanit;
font-weight: 400;
font-size: 16px;

@media screen and (max-width: 960px) {
font-size: 20px;
}
`;
export const Contact = styled.div`
ext-transform: capitalize;
font-family: Kanit;
font-weight: 400;
font-size: 16px;

@media screen and (max-width: 960px) {
font-size: 20px;
}
`;
export const ArgoneLinks = styled.div`
// background-color: grey;
display: flex;
justify-content: center;
align-items: center;
height: inherit;
width: 350px;

@media screen and (max-width: 960px) {
// background: blue;
// border-top: 1px solid #F4F4F4;
display: flex;
flex-direction: column;
height: 100%;
width: 100vw;
padding-top: 0px;
}
`;
export const SignIn = styled.div`
background-color: #F4F4F4;
display: flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 30px;
height: 40px;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
margin-right: 10px;
cursor: pointer;
width: 20%;
transition: width 1s;

:hover{
    display: flex;
    width: 30%;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 960px) {
margin-bottom: 10px;
width: 60%;
}
`;
export const SignText = styled.div`
text-transform: capitalize;
font-family: 'Kanit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #16AF6D;

@media screen and (max-width: 960px) {
font-size: 20px;
}
`;
export const SignUp = styled(Link)`
background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
display: flex;
justify-content: space-around;
align-items: center;
border: none;
border-radius: 30px;
height: 40px;
padding-left: 20px;
padding-right: 20px;
padding-top: 5px;
padding-bottom: 5px;
cursor: pointer;
font-weight: 400;
width: 30%;
transition: width 1s;
text-decoration: none;

:hover{
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
}

img{
    margin-left: 10px;
}

@media screen and (max-width: 960px) {
margin-top: 10px;
width: 60%;
justify-content: center;

:hover{
    justify-content: space-between;
}
}
`;
export const SignText2 = styled.div`
text-transform: capitalize;
font-family: 'Kanit';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: white;

@media screen and (max-width: 960px) {
font-size: 20px;
}
`;


