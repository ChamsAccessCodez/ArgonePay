import styled from 'styled-components'


export const EveryoneContainer = styled.div`
width: inherit;
// background: red;
display: flex;
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;

@media screen and (max-width: 768px){
padding-top: 40px;
padding-bottom: 40px;
}
@media screen and (max-width: 600px){
padding-top: 40px;
padding-bottom: 40px;
}
@media screen and (max-width: 425px){
padding-top: 10px;
padding-bottom: 20px;
}
`;
export const EveryoneWrapper = styled.div`
width: 80%;
// background: green;
display: flex;

@media screen and (max-width: 768px){
// background: brown;
width: 80vw;
display: flex;
flex-direction: column;
}
`;
export const TextWrapper = styled.div`
// background-color: grey;
width: 40%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
position: relative;

@media screen and (max-width: 768px){
// background: green;
width: 95%;
align-self: center;
}
 `;
export const Circle = styled.div`
height: 200px;
width: 200px;
top: -30px;
left: -100px;
border-radius: 100%;
background: linear-gradient(289.11deg, rgba(4, 72, 127, 0.1) 7.4%, rgba(160, 197, 89, 0.1) 117.27%);
position: absolute;
z-index: -1;

@media screen and (max-width: 768px){
height: 100px;
width: 100px;
top: -0px;
left: -50px;
}
 `;
export const CircleText = styled.div`
// background: green;
width: 100%;
display: flex;
flex-direction: column;
margin-top: 40px;

@media screen and (max-width: 768px){
width: 100vw;
}
 `;
export const HeadingText = styled.div`
font-family: Kanit;
font-size: 44px;
font-weight: 500;
line-height: 48px;
text-align: left;
width: 70%;
margin-bottom: 20px;

span{
color: #8ABB2A;
}

@media screen and (max-width: 375px){
font-size: 38px;
line-height: 45px;
}
 `;
export const BodyText = styled.div`
font-family: Kanit;
font-size: 20px;
font-weight: 300;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
width: 70%;
color: #37383C;

@media screen and (max-width: 768px){
color: #515359;
margin-bottom: 15px;
}
 `;
export const CardWrapper = styled.div`
// background-color: tomato;
width: 60%;
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;
position: relative;

@media screen and (max-width: 768px){
width: 100%;
}
`;
export const Cards = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
// background-color: tomato;
flex-wrap: wrap;

@media screen and (max-width: 768px){
// background: green;
width: inherit;
}
`;
export const CardImage = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
// background: brown;
flex-wrap: wrap;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: -50.27%;

@media screen and (max-width: 768px){
width: 100%;
display: flex;
justify-content: center;
align-items: center;
// background: brown;
flex-wrap: wrap;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: -50.27%;
}
`;
export const CardImg = styled.img`
position: absolute;
left: 15%;
right: 0%;
top: 42%;
bottom: 0%;

@media screen and (max-width: 768px){
position: absolute;
left: 35%;
right: 0%;
top: 22%;
bottom: 0%;
z-index: 0;
}
`;
export const Card = styled.div`
height: 300px;
width: 326px;
border-radius: 8px;
background: #FFFFFF;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
border-radius: 8px;
margin: 18px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding-left: 20px;
cursor: pointer;
z-index: 1;

:hover{
    transform: scale(0.9);
    transition: all 0.5s ease-out;
}

@media screen and (max-width: 768px){
// background: brown;
width: 90%;
z-index: 1;
}
@media screen and (max-width: 425px){
// background: brown;
width: 100%;
margin-left: 8px;
margin-right: 8px;
}
`;
export const One = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 30px;
width: 40px;

img{
    height: 30px;
    width: 40px;
}
`;
export const Two = styled.div`
width: 90%;
font-family: Kanit;
font-size: 18px;
font-weight: 400;
text-align: left;

`;
export const Three = styled.div`
width: 90%;
font-family: Kanit;
font-size: 14px;
font-weight: 300;
line-height: 20px;
text-align: left;
color: #37383C;
`;
export const Four = styled.div`
width: 52%;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
padding-top: 10px;
padding-bottom: 10px;
border: none;
border-radius: 100px;
transition: width 1s;

:hover{
    width: 57%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 425px){
width: 70%;

:hover{
    width: 75%;
}
}
@media screen and (max-width: 375px){
width: 80%;

:hover{
    width: 85%;
}
}
@media screen and (max-width: 375px){
width: 90%;

:hover{
    width: 95%;
}
}

`;
export const FourText = styled.div`
margin-right: 10px;
color: #209653;

@media screen and (max-width: 425px){
font-size: 16px;
}
@media screen and (max-width: 375px){
font-size: 14px;
}
`;
export const FourImage = styled.div`
// background: red;
width: 22px;
height: 22px;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 22px;
    height: 22px;
}
@media screen and (max-width: 425px){
img{
    width: 20px;
    height: 20px;
}
`;
// export const ArgoneEveryone = styled.div`

// `;
// export const ArgoneEveryone = styled.div`

// `;
// export const ArgoneEveryone = styled.div`

// `;
// export const ArgoneEveryone = styled.div`

// `;
