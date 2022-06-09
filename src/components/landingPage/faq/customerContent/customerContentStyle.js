import styled from 'styled-components'

export const ContentContainer = styled.div`
// background: green;
width: 100%;
display: flex;

@media screen and (max-width: 768px){
// background: green;
width: 100%;
flex-direction: column;
}
`;
export const CustomerText = styled.div`
// background: red;
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;

@media screen and (max-width: 768px){
width: 100%;
margin-bottom: 20px;
}
`;
export const HeadOne = styled.div`
font-family: Kanit;
font-size: 40px;
font-weight: 500;
line-height: 48px;
text-align: left;
width: 90%;

@media screen and (max-width: 768px){
width: 100%;
margin-bottom: 15px;
}
@media screen and (max-width: 600px){
font-size: 38px;
line-height: 40px;
margin-top: 10px;
}
@media screen and (max-width: 425px){
font-size: 35px;
line-height: 40px;
margin-top: 10px;
}
@media screen and (max-width: 375px){
font-size: 32px;
line-height: 35px;
}
@media screen and (max-width: 320px){
font-size: 30px;
line-height: 33px;
}
`;
export const HeadTwo = styled.div`
font-family: Kanit;
font-size: 20px;
font-weight: 300;
text-align: left;
color: #5D6066;
width: 90%;

@media screen and (max-width: 768px){
width: 100%;
margin-bottom: 15px;
}
@media screen and (max-width: 375px){
font-size: 18px;
}
@media screen and (max-width: 320px){
font-size: 18px;
}
`;
export const HeadThree = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
width: 100px;
background: none;
border: none;
border-radius: 30px;

:hover{
background: rgba(189, 223, 148, 0.4);
width: 110px;
padding: 10px;
justify-content: space-between;
transition: all 1s;
}

@media screen and (max-width: 768px){
width: 100%;
margin-bottom: 15px;

// :hover{
// background: rgba(189, 223, 148, 0.4);
// width: 110px;
// padding: 10px;
// justify-content: space-between;
// transition: all 1s;
// }
}
`;
export const CustImg1 = styled.img`
height: 22px;
width: 22px;
margin-left: 8px;

@media screen and (max-width: 600px){
height: 18px;
width: 18px;
}
@media screen and (max-width: 425px){
height: 16px;
width: 16px;
}
`;
export const CustomerImage = styled.div`
// background: blue;
width: 50%;

@media screen and (max-width: 768px){
width: 100%;
// background: red;
display: flex;
justify-content: center;
align-items: center;
}
`;
export const CustImg2 = styled.img`

@media screen and (max-width: 768px){
width: 90%;
}
`;

export const ButtonText = styled.div`
font-family: Kanit;
font-size: 12px;
font-weight: 700;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
color: #04487F;
`;
// export const ContentContainer = styled.div``;
// export const ContentContainer = styled.div``;