import styled from 'styled-components'
import smallCard from '../../../../images/smallCardBG.png'

export const CardPropsWrapper = styled.div`
width: 20%;
// width: 362px;
border-radius: 14px;
background: #FFFFFF;
background-image: url(${smallCard});
background-repeat: no-repeat;
background-size: cover;
border: none;
border-radius: 14px;
padding: 65px 110px 75px 61px;
cursor: pointer;

:hover{
    transform: scale(0.9);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    transition: all 1s;
}
@media screen and (max-width: 768px ){
// background: red;
width: inherit;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// width: 100%;
margin-top: 10px;
margin-bottom: 10px;
}
@media screen and (max-width: 600px ){
padding-top: 30px;
padding-bottom: 30px;
padding-left: 0px;
padding-right: 0px;
}
@media screen and (max-width: 425px ){
padding-top: 30px;
padding-bottom: 30px;
padding-left: 0px;
padding-right: 0px;
}
`;
export const Settings = styled.div`
// background: yellow;
display: flex;
justify-content: flex-start;
align-items: center;
width: 100vw;

@media screen and (max-width: 768px ){
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`;
export const SeamImg = styled.img`
height: 72px;
width: 72px;
margin-bottom: 29px;

@media screen and (max-width: 768px ){
height: 70px;
width: 70px;
}
@media screen and (max-width: 600px ){
height: 68px;
width: 68px;
}
@media screen and (max-width: 425px ){
height: 68px;
width: 68px;
}
@media screen and (max-width: 375px ){
height: 60px;
width: 60px;
}
@media screen and (max-width: 320px ){
height: 50px;
width: 50px;
}
}
`;
export const Powerful = styled.div`
font-family: Kanit;
font-size: 30px;
font-weight: 400;
line-height: 32px;
width: 210px;
margin-top: 16px;
margin-bottom: 29px;

@media screen and (max-width: 768px ){
// background-color: red;
width: inherit;
display: flex;
justify-content: center;
align-items: center;
}
@media screen and (max-width: 600px ){
text-align: center;
}
@media screen and (max-width: 425px ){
text-align: center;
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
width: 140px;
margin-top: 31px;

:hover{
background: rgba(189, 223, 148, 0.4);
width: 142px;
padding: 10px;
justify-content: space-between;
transition: all 1s;
}

img{
    height: 22px;
    width: 22px;
    margin-left: 8px;
}

@media screen and (max-width: 768px ){
// background: red;
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
// export const CardPropsContainer = styled.div``;
// export const CardPropsContainer = styled.div``;
