import styled from 'styled-components'

export const ParentWork = styled.div`
// background: tomato;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`;
export const WorkContainer = styled.div`
// background: green;
width: 80%;

@media screen and (max-width: 768px) {
width: 80%;
}
@media screen and (max-width: 600px) {
width: 80%;
}
`;
export const HowItWorks = styled.div`
font-family: Kanit;
font-size: 60px;
font-weight: 500;
line-height: 72px;
letter-spacing: 0em;
text-align: left;
width: 100%;
margin-top: 20px;

span{
    color: #8ABB2A;
}

@media screen and (max-width: 768px) {

}
@media screen and (max-width: 600px) {
font-size: 50px;
}
@media screen and (max-width: 425px) {

}
`;
export const UseArgone = styled.div`
width: 37%;
font-family: Kanit;
font-size: 22px;
font-weight: 300;
line-height: 28px;
letter-spacing: 0em;
margin-top: 20px;
// margin-bottom: 20px;
color: #37383C;

@media screen and (max-width: 768px) {
width: 100%;
margin-bottom: 15px;
}
@media screen and (max-width: 600px) {

}
@media screen and (max-width: 425px) {

}
@media screen and (max-width: 375px) {

}
@media screen and (max-width: 320px) {

}
`;
export const VisitOur = styled.div`
// background: red;
width: inherit;
display: flex;

@media screen and (max-width: 768px){
    // display: none;
}
@media screen and (max-width: 600px){
}
@media screen and (max-width: 425px){
}
@media screen and (max-width: 375px){
}
@media screen and (max-width: 320px){
}
`;
export const VisitText = styled.div`
width: 50%;
// background: blue;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const PointerContainer= styled.div`
// background: brown;
width: 100%;
display: flex;
flex-direction: column;
cursor: pointer;
padding-left: 20px;
border-left: 8px solid ${({bg})=>bg ? "#8ABB2A" : "#F8F8F8"};

`;
export const One= styled.div`
font-family: Kanit;
font-size: 32px;
font-weight: 500;
line-height: 38px;
letter-spacing: 0em;
text-align: left;
margin-top: 15px;
margin-bottom: 15px;
width: 90%;
color: ${({cl})=>cl ? "#000000" : "#979797"};

:hover{
    color: #000000;
}
`;
export const Two= styled.div`
font-family: Kanit;
font-size: 16px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 15px;
width: 70%;
color: #979797;
`;

export const VisitImage = styled.div`
// background: pink;
width: 50%;
display: flex;
justify-content: center;

@media screen and (max-width: 768px) {
// display: none;
}
`;


// mobile view for visit our;
export const MobileVisitOur = styled.div`
display: none;
@media screen and (max-width: 768px) {
background: green;
display: flex;
width: inherit;
}
`;

export const Oya = styled.div`
display: flex;
width: 80%;
background: tomato;
`;