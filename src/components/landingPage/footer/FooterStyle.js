import styled from "styled-components"

export const FooterContainer = styled.div`
width: 100vw;
background: #002644;
position: relative;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 768px){
// background: red;
// width: 100vw;
}
`;
export const FooterWrapper = styled.div`
position: relative;
// background: white;
display: flex;
flex-direction: column;
align-items: space-between;
width: 80%;
height: 40%;
color: tomato;
margin-top: 260px;
margin-bottom: 40px;

@media screen and (max-width: 768px){
width: inherit;
// background: red;
width: 90%;
}
@media screen and (max-width: 600px){
width: 90%;
}
@media screen and (max-width: 425px){
width: 90%;
}
`;
export const Navs = styled.div`
// width: 90%;
// background: green;
display: flex;
justify-content: center
width: inherit;
justify-content: space-between;
padding-top: 20px;
padding-bottom: 20px;

@media screen and (max-width: 768px){
// width: 90%;
justify-content: center;
flex-wrap: wrap;
}
@media screen and (max-width: 600px){
width: 100%;
}
@media screen and (max-width: 425px){
width: 100%;
}
`;

export const Qlinks = styled.div`
display: flex;
// background: yellow;
flex-direction: column;
justify-content: flex-start;
height: 100%;

@media screen and (max-width: 768px){
width: 50%;
}
@media screen and (max-width: 600px){
width: 100%;
margin-bottom: 20px;
// background: red;
}
@media screen and (max-width: 425px){
width: 100%;
margin-bottom: 20px;
}
// @media screen and (max-width: 375px){
// width: 50%;
// }
`;
export const Quick = styled.div`
width: 224px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 120%;
color: #979797
`;
export const Customer = styled.div`
width: 264px;
// height: 27px;
left: 176px;
top: 6504px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-top: 18px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    color: #979797
}
`;
export const Merchant = styled.div`
width: 264px;
// height: 27px;
left: 176px;
top: 6504px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-top: 18px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    color: #979797
}
`;
export const Support = styled.div`
display: flex;
// background: tomato;
flex-direction: column;
justify-content: flex-start;
height: 100%;

@media screen and (max-width: 768px){
width: 50%;
}
@media screen and (max-width: 600px){
width: 100%;
// background: blue;
}
@media screen and (max-width: 425px){
width: 100%;
}
// @media screen and (max-width: 375px){
// width: 50%;
// }
`;
export const SupportHead = styled.div`
width: 224px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 120%;
color: #979797

`;
export const Work = styled.div`
width: 264px;
// height: 27px;
left: 176px;
top: 6504px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-top: 18px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    color: #979797
}
`;
export const Contact1 = styled.div`
width: 264px;
// height: 27px;
left: 176px;
top: 6504px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-top: 18px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    color: #979797
}
`;
export const Privacy = styled.div`
width: 264px;
// height: 27px;
left: 176px;
top: 6504px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-top: 18px;
margin-bottom: 10px;
cursor: pointer;
:hover{
    color: #979797
}
`;

export const Connect = styled.div`
display: flex;
// background: tomato;
flex-direction: column;
justify-content: flex-start;
height: 100%;

@media screen and (max-width: 768px){
width: 100%;
display: flex;
margin-top: 30px;
}
@media screen and (max-width: 600px){
width: 100%;
justify-content: center;
// background: yellow;
}
@media screen and (max-width: 425px){
width: 100%;
}
@media screen and (max-width: 375px){
width: 100%;
}
`;
export const ConnectHead = styled.div`
width: 133px;
height: 30px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 18px;
color: #979797;
margin-bottom: 10px;
`;
export const Socials = styled.div`
// background: green;
display: flex;
width: 30%;
margin-bottom: 15px;
`;
export const Facebook = styled.div`
// background: green;
margin-right: 15px;
cursor: pointer;

img{
    width: 27px;
    height: 27px;
    :hover{
        width: 35px;
        height: 35px;
        transition: all 1s;
    }
}
`;
export const Instagram = styled.div`
// background: green;
margin-right: 15px;
cursor: pointer;

img{
    width: 27px;
    height: 27px;
    :hover{
        width: 35px;
        height: 35px;
        transition: all 1s;
    }
}
`;
export const Twitter = styled.div`
// background: green;
margin-right: 15px;
cursor: pointer;

img{
    width: 27px;
    height: 27px;

    :hover{
        width: 35px;
        height: 35px;
        transition: all 1s;
    }
}
`;
export const Address = styled.div`
width: 262px;
height: 40px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-bottom: 15px;
display: flex;

@media screen and (max-width: 768px){
margin-bottom: 0px;
}
@media screen and (max-width: 600px){
margin-bottom: 10px;
}
// }
`;
export const Email = styled.div`
height: 30px;
margin-bottom: 15px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
color: #ffffff;

img{
    height: 17px;
    width: 20px;
    margin-right: 10px;
}
`;
export const Details = styled.div`
width: 126px;
height: 24px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;

`;
export const Phone = styled.div`
width: 110px;
height: 20px;
font-family: 'Kanit';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: #FFFFFF;
margin-bottom: 30px;
display: flex;
justify-content: flex-start;
align-items: center;

img{
    height: 17px;
    width: 20px;
    margin-right: 10px;
}
`;

export const Copywrite = styled.div`
width: 85%;
background: #002644;
display: flex;
justify-content: center;
align-items: center;
height: 42px;
font-family: Kanit;
font-size: 16px;
font-weight: 300;
text-align: left;
color: #ffffff;
border-top: 1px solid #515359;
padding-top: 10px;
padding-bottom: 10px;
`;
// export const Phone = styled.div``;
// export const Phone = styled.div``;