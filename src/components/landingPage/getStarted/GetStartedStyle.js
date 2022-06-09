import styled from 'styled-components'
import circles from '../../../images/Circles-with-BG-1.png'
import bigCardBG from "../../../images/bigCardBG.jpg"


export const GetStartedContainer = styled.div`
// background: brown;
background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
width: 100vw;
position: relative;
display: flex;
justify-content: center;
background-image: url(${circles});
background-repeat: no-repeat;
background-size: cover;

@media screen and (max-width: 768px){
width: 100vw;
}
@media screen and (max-width: 425px){
// background-image: url(${circles});
}
`;
export const GetStartedWrapper = styled.div`
// background: pink;
width: 80%;
border: none;
border-radius: 14px;
display: flex;
flex-direction: column;
padding-top: 80px;

@media screen and (max-width: 768px){
width: 90%;
}
@media screen and (max-width: 600px){
justify-content: center;
align-items: center;
padding-top: 50px;
}
@media screen and (max-width: 425px){
justify-content: center;
align-items: center;
padding-top: 50px;
}
@media screen and (max-width: 375px){
padding-top: 40px;
}
`;
export const GetText = styled.div`
// background: green;
width: 100%;
`;
export const TextHead = styled.div`
width: 100%;
font-family: Kanit;
font-size: 60px;
font-weight: 500;
line-height: 72px;
text-align: left;
color: #FFFFFF;
line-height: 120%;
margin-top: 64px;
margin-bottom: 64px;

@media screen and (max-width: 768px){
margin-top: 44px;
margin-bottom: 64px;
}
@media screen and (max-width: 600px){
font-size: 50px;
margin-top: 0px;
margin-bottom: 40px;
}
@media screen and (max-width: 425px){
font-size: 50px;
margin-top: 0px;
margin-bottom: 40px;
}
@media screen and (max-width: 375px){
font-size: 40px;
margin-top: 0px;
margin-bottom: 40px;
}
@media screen and (max-width: 320px){
font-size: 40px;
margin-top: 0px;
margin-bottom: 20px;
}
`;
export const BigCard = styled.div`
background: #FFFFFF;
background-image: url(${bigCardBG});
background-repeat: no-repeat;
background-size: fill;
// background-size: contain;
background-position: top right;
width: 100%;
height: 515px;
display: flex;
justify-content: center;
border: none;
border-radius: 14px;

@media screen and (max-width: 768px){
height: 720px;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
}
@media screen and (max-width: 600px){
width: 95%;
// background: tomato;
// background-image: url(${circles});
height: 570px;
background-size: contain;
background-position: top right;
}
@media screen and (max-width: 425px){
width: 95%;
// background: tomato;
// background-image: url(${circles});
height: 520px;
background-size: contain;
background-position: top right;
}
@media screen and (max-width: 375px){
// background: tomato;
height: 460px;
}
@media screen and (max-width: 320px){
// background: tomato;
height: 460px;
}
`;
export const InnerCard = styled.div`
width: 40%;
margin: 77px 0px 102px 60px;

@media screen and (max-width: 768px){
// background: red;
width: inherit;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
}
@media screen and (max-width: 600px){
// background: red;
width: 100%;
}
@media screen and (max-width: 425px){
// background: red;
width: 100%;
}
`;
export const Settings = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
`;
export const SetImg = styled.img`
height: 72px;
width: 72px;

@media screen and (max-width: 768px){
height: 70px;
width: 70px;
margin-top: 60px;
}
@media screen and (max-width: 600px){
height: 60px;
width: 60px;
margin-top: 50px;
}
@media screen and (max-width: 425px){
height: 60px;
width: 60px;
margin-top: 0px;
}
@media screen and (max-width: 375px){
height: 40px;
width: 40px;
margin-top: 0px;
}
`;
export const Powerful = styled.div`
font-family: Kanit;
font-size: 50px;
font-weight: 500;
line-height: 60px;
text-align: left;
width: 383px;
margin-top: 16px;
margin-bottom: 16px;

@media screen and (max-width: 768px){
width: 90%;
display: flex;
align-items: center;
text-align: center;
font-size: 45px;
}
@media screen and (max-width: 600px){
font-size: 30px;
line-height: 40px;
}
@media screen and (max-width: 425px){
font-size: 30px;
line-height: 40px;
}
@media screen and (max-width: 375px){
font-size: 30px;
line-height: 30px;
}
`;
export const ContactNav = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
background: none;
border: none;
border-radius: 30px;
width: 100px;
margin-top: 31px;

:hover{
background: rgba(189, 223, 148, 0.4);
width: 110px;
padding: 10px;
justify-content: space-between;
transition: all 1s;
}

@media screen and (max-width: 768px){
margin-bottom: 60px;
}
`;
export const ButtonText = styled.div`
font-family: Kanit;
font-size: 12px;
font-weight: 500;
line-height: 15px;
text-align: left;
color: #04487F;
`;
export const ButImg = styled.img`
height: 22px;
width: 22px;
margin-left: 8px;

@media screen and (max-width: 768px){
height: 18px;
width: 18px;
}
`;
export const SmallCard = styled.div`
// background: tomato;
// flex: 1;
width: 40%;
color: purple;
display: flex;
justify-content: center;
align-items: flex-end;
border: none;
border-top-right-radius: 14px;
margin-right: 60px;

@media screen and (max-width: 768px){
// background: blue;
width: 100%;
align-items: center;
}
@media screen and (max-width: 600px){
margin-right: 0px;
}
@media screen and (max-width: 425px){
margin-right: 0px;
}
`;
export const InnerCard2 = styled.div`
// background: purple;
width: 100%;
display: flex;
justify-content: right;

@media screen and (max-width: 768px){
justify-content: center;
}
@media screen and (max-width: 600px){
width: 100vw;
justify-content: center;
}
@media screen and (max-width: 425px){
width: 100vw;
justify-content: center;
}
`;
export const InnImg = styled.img`
@media screen and (max-width: 600px){
width: 80%;
}
@media screen and (max-width: 425px){
width: 80%;
}
`;

export const PropsCard = styled.div`
width: 100%;
// background: green;
margin-top: 40px;
margin-bottom: 295px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 30px;

@media screen and (max-width: 1300px){
justify-content: center;
}
@media screen and (max-width: 768px){
width: 100%;
gap: 0px;
}
@media screen and (max-width: 600px){
width: 95%;
justify-content: center;
}
@media screen and (max-width: 425px){
width: 95%;
justify-content: center;
}
`;

// TO DO
// Change the image background size of the 420px screen 