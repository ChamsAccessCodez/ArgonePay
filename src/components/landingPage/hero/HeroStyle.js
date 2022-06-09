import styled from "styled-components"

export const ParentHero = styled.div`
// background: grey;
display: flex;
justify-content: center;
width: 100vw;

@media screen and (max-width: 768px){
// background: green;
width: 100vw;
height: 100vh;
}
@media screen and (max-width: 425px){
margin-bottom: 30px;
height: auto;
}
`;
export const HeroContainer = styled.div`
// background: gold;
width: 80vw;
height: 70vh;
display: flex;

@media screen and (max-width: 768px){
width: 100%;
padding-top: 40px;
height: inherit;
}

@media screen and (max-width: 600px){
flex-direction: column;
height: auto;
}

@media screen and (max-width: 425px){
flex-direction: column;
height: auto;
}
`;
export const FlashText = styled.div`
// background: red;
// background: white;
width: 50%;
height: inherit;
display: flex;
flex-direction: column;
justify-content: center;
// margin-left: 120px;

@media screen and (max-width: 768px){
// background: pink;
width: 50%;
display: flex;
justify-content: center;
align-items: flex-start;
padding-left: 20px;
}

@media screen and (max-width: 600px){
width: 100%;
margin-top: 40px;
margin-bottom: 40px;
}

@media screen and (max-width: 425px){
width: 100%;
padding: 0px;
align-items: center;
}
@media screen and (max-width: 375px){
width: 100%;
padding: 0px;
}
`;
export const Img001 = styled.img`
// display: none;
// width: 608px;
width: 90%;

@media screen and (max-width: 768px){
// background: black;
width: 90%;
padding-top: 50px;
margin-bottom: 20px;
}

@media screen and (max-width: 425px){
width: 70%;
margin: 30px;
}

@media screen and (max-width: 375px){
width: 60%;
margin: 25px;
}
`;

export const Now = styled.div`
font-family: kanit;
font-weight: 300;
font-size: 20px;
line-height: 29px;
width: 85%;
margin-top: 40px;
margin-bottom: 40px;

@media screen and (max-width: 768px){
font-size: 24px;
line-height: 24px;
margin-top: 0px;
margin-bottom: 20px;
}
@media screen and (max-width: 600px){
font-size: 20px;
line-height: 22px;
width: 70%;
margin-right: 30px;
margin-left: 30px;
margin-bottom: 30px;
}
@media screen and (max-width: 425px){
font-size: 16px;
line-height: 18px;
width: 70%;
margin-right: 30px;
margin-left: 30px;
margin-bottom: 30px;
}
@media screen and (max-width: 375px){
width: 60%;
}
`;
export const FlashButtons = styled.div`
width: 100%;
display: flex;
align-items: center;

@media screen and (max-width: 768px){
// background: green;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

@media screen and (max-width: 600px){
// background: green;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media screen and (max-width: 425px){
// background: green;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

@media screen and (max-width: 375px){
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 30px;
padding-right: 30px;
padding-bottom: 30px;
}
`;
export const UserSignupButton = styled.div`
background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
height: 50px;
border: none;
border-radius: 55px;
display: flex;
justify-content: center;
align-items: center;
padding-left: 12px;
padding-right: 12px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-right: 10px;
width: 30%;
transition: width 1s;

:hover{
    width: 32%;
    justify-content: space-around;
}

@media screen and (max-width: 768px){
// background: red;
width: 45%;
height: 35px;
padding-left: 10px;
padding-right: 10px;

:hover{
    width: 42%;
    justify-content: space-around;
}
}
@media screen and (max-width: 600px){
height: 40px;
width: 65%;
margin-bottom: 10px;

:hover{
    width: 68%;
    justify-content: space-around;
}
}
@media screen and (max-width: 425px){
height: 40px;
width: 65%;
margin-bottom: 10px;

:hover{
    width: 68%;
    justify-content: space-around;
}
}

@media screen and (max-width: 375px){
height: 35px;
width: 55%;

:hover{
    width: 58%;
    justify-content: space-around;
}
}
@media screen and (max-width: 320px){
height: 35px;
width: 50%;

:hover{
    width: 53%;
    justify-content: space-around;
}
}
`;
export const Text01 = styled.div`
text-transform: capitalize;
font-size: 14px;
font-family: Poppins;
margin-right: 10px;
font-weight: 500;
color: #f1f1f1;

@media screen and (max-width: 768px){  
font-size: 12px;
}
`;
export const Img002 = styled.img`
// display: none;

@media screen and (max-width: 768px){
}
`;
export const MarchantSignUpButton = styled.div`
background: #F6FBFF;
height: 50px;
border: none;
border-radius: 55px;
display: flex;
justify-content: center;
align-items: center;
padding-left: 12px;
padding-right: 12px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: 30%;
transition: width 1s;

:hover{
    width: 33%;
    justify-content: space-around;
}

@media screen and (max-width: 768px){
// background: red;
width: 45%;
height: 35px;
padding-left: 10px;
padding-right: 10px;
}

@media screen and (max-width: 600px){
height: 40px;
width: 65%;

:hover{
    width: 68%;
    justify-content: space-around;
}
}

@media screen and (max-width: 425px){
height: 40px;
width: 65%;

:hover{
    width: 68%;
    justify-content: space-around;
}
}
@media screen and (max-width: 375px){
height: 35px;
width: 55%;

:hover{
    width: 58%;
    justify-content: space-around;
}
}
@media screen and (max-width: 320px){
height: 35px;
width: 50%;

:hover{
    width: 53%;
    justify-content: space-around;
}
}
`;
export const Text02 = styled.div`
text-transform: capitalize;
font-size: 14px;
font-family: Poppins;
margin-right: 10px;
font-weight: 500;

@media screen and (max-width: 768px){
font-size: 12px;
}
`;
export const Img003 = styled.img`
// display: none;

@media screen and (max-width: 768px){

}
`;
export const FlashImage = styled.div`
// background: black;
width: 50%;
height: inherit;
display: flex;
justify-content: flex-end;
align-items: center;

@media screen and (max-width: 768px){
width: 50%;
justify-content: center;
align-items: center;
}
@media screen and (max-width: 600px){
width: 100%;
}
@media screen and (max-width: 425px){
width: 100%;
}
`;
export const Img004 = styled.img`
// display: none;
width: 550px;

// @media screen and (max-width: 960px){
// width: 350px;
// }
@media screen and (max-width: 768px){
width: 250px;
}
@media screen and (max-width: 600px){
width: 250px;
padding: 30px;
}
@media screen and (max-width: 425px){
width: 250px;
padding: 30px;
}
@media screen and (max-width: 375px){
width: 200px;
padding: 10px;
}
`;
// export const HeroContainer = styled.div``;
// export const HeroContainer = styled.div``;
// export const HeroContainer = styled.div``;