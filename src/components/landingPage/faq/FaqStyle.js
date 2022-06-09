import styled from "styled-components"

export const FaqContainer = styled.div`
// background: tomato;
width: 100vw;
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;

@media screen and (max-width: 768px){
width: 100vw;
// background: brown;
}
@media screen and (max-width: 600px){
margin-bottom: 20px;
}
@media screen and (max-width: 425px){
margin-bottom: 20px;
}
`;
export const FaqWrapper = styled.div`
// background: gold;
width: 80%;
display: flex;
flex-direction: column;
align-items: flex-start;

@media screen and (max-width: 768px){
// background: green;
width: 80%;
}
`;
export const Commonly = styled.div`
font-family: 'Kanit';
font-style: normal;
font-weight: 500;
font-size: 60px;
line-height: 120%;
color: #000000;
margin-top: 20px;
margin-bottom: 20px;

@media screen and (max-width: 960px){

}
@media screen and (max-width: 768px){
font-size: 55px;
width: 100%;
}
@media screen and (max-width: 600px){
font-size: 50px;
line-height: 100%;
}
@media screen and (max-width: 425px){
font-size: 50px;
line-height: 100%;
}
@media screen and (max-width: 375px){
font-size: 45px;
line-height: 95%;
}
@media screen and (max-width: 320px){
font-size: 40px;
line-height: 95%;
}
`;
export const Answered = styled.div`
font-family: Kanit;
font-size: 24px;
font-weight: 300;
line-height: 31px;
text-align: left;
width: 40%;
color: #37383C;
margin-bottom: 40px;

@media screen and (max-width: 768px){
width: 100%;
}
@media screen and (max-width: 600px){
font-size: 22px;
line-height: 28px;
margin-bottom: 30px;
}
@media screen and (max-width: 425px){
font-size: 22px;
line-height: 28px;
margin-bottom: 30px;
}
@media screen and (max-width: 320px){
font-size: 20px;
line-height: 26px;
margin-bottom: 20px;
}
`;
export const Customer = styled.div`
width: 100%;
background: #F7FBFF;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 768px){
// background: tomato;
width: 100%;
}
`;
export const CustomerNav = styled.div`
width: 90%;
display: flex;
justify-content: flex-start;
align-items: center;
// background: green;

@media screen and (max-width: 768px){
// background: pink;
width: 100%;
justify-content: center;
}
@media screen and (max-width: 600px){
flex-wrap: wrap;
}
@media screen and (max-width: 425px){
flex-wrap: wrap;
}
`;
export const Nav1 = styled.div`
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;
margin-top: 15px;
margin-bottom: 15px;
margin-right: 15px;
margin-left: 0px;
font-family: Kanit;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #000000;
border-radius: 30px;

:hover{
    border-radius: 30px;
    background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;
    margin-right: 15px;
    color: #ffffff;
    transition: all 1s;
}

@media screen and (max-width: 768px ){
font-size: 21px;
white-space: nowrap;
}
@media screen and (max-width: 600px ){
margin-top: 0px;
margin-bottom: 0px;
}
// @media screen and (max-width: 425px ){
// margin-top: 0px;
// margin-bottom: 0px;
// }
@media screen and (max-width: 375px ){
font-size: 18px;
}
@media screen and (max-width: 320px ){
font-size: 14px;
:hover{
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
    margin-right: 0px;
}
}
`;
export const Nav2 = styled.div`
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;
margin-top: 15px;
margin-bottom: 15px;
margin-right: 15px;
margin-left: 0px;
font-family: Kanit;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #000000;
border-radius: 30px;

:hover{
    border-radius: 30px;
    background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;
    margin-right: 15px;
    color: #ffffff;
    transition: all 1s;
}

@media screen and (max-width: 768px ){
font-size: 21px;
white-space: nowrap;
}
@media screen and (max-width: 375px ){
font-size: 18px;
}
@media screen and (max-width: 320px ){
font-size: 14px;
:hover{
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0px;
    margin-right: 0px;
}
}
`;
export const Nav3 = styled.div`
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;
margin-top: 15px;
margin-bottom: 15px;
margin-right: 15px;
margin-left: 0px;
font-family: Kanit;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #000000;
border-radius: 30px;

:hover{
    border-radius: 30px;
    background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;
    margin-right: 15px;
    color: #ffffff;
    transition: all 1s;
}

@media screen and (max-width: 768px ){
font-size: 21px;
white-space: nowrap;
}
@media screen and (max-width: 375px ){
font-size: 18px;
}
@media screen and (max-width: 320px ){
font-size: 14px;
:hover{
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0px;
    margin-right: 0px;
}
}
`;
export const Nav4 = styled.div`
padding-top: 10px;
padding-bottom: 10px;
padding-left: 0px;
padding-right: 0px;
margin-top: 15px;
margin-bottom: 15px;
margin-left: 0px;
margin-right: 15px;
font-family: Kanit;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
border-radius: 30px;
color: #000000;
border-radius: 30px;

:hover{
    border-radius: 30px;
    background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 10px;
    margin-right: 15px;
    color: #ffffff;
    transition: all 1s;
}

@media screen and (max-width: 768px ){
font-size: 21px;
white-space: nowrap;
}
@media screen and (max-width: 375px ){
font-size: 18px;
}
@media screen and (max-width: 320px ){
font-size: 14px;
:hover{
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0px;
    margin-right: 0px;
}
}
`;
export const Text = styled.div`
font-family: Kanit;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #000000;
`;
export const CustomerContent = styled.div`
// background: pink;
width: 90%;
`;
// export const Faq = styled.div``;
// export const Faq = styled.div``;
// export const Faq = styled.div``;
// export const Faq = styled.div``;