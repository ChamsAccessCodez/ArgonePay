import styled from 'styled-components'
import mediumCardBG from '../../../../images/mediumCardBG.jpg'


export const CommunityContainer = styled.div`
// background: grey;
width: 100vw;
display: flex;
justify-content: center;
position: absolute;
top: -120px;

@media screen and (max-width: 768px){
width: 100vw;
}
`;
export const CommunityWrapper = styled.div`
// background: tomato;
background-image: url(${mediumCardBG});
background-repeat: no-repeat;
background-size: cover;
width: 80%;
height: 331px;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
// width: 80%;
}
@media screen and (max-width: 600px){
width: 85%;
}
@media screen and (max-width: 425px){
width: 85%;
}
@media screen and (max-width: 375px){
width: 85%;
}
@media screen and (max-width: 320px){
width: 85%;
}
`;
export const Join = styled.div`
font-family: Kanit;
font-size: 60px;
font-weight: 500;
text-align: left;
color: #150035;
width: 559px;
margin-bottom:

@media screen and (max-width: 768px){
text-align: center;
// background: green;
width: 80%;
}
@media screen and (max-width: 600px){
width: 100%;
text-align: center;
font-size: 40px;
}
@media screen and (max-width: 425px){
width: 100%;
text-align: center;
font-size: 40px;
}
@media screen and (max-width: 375px){
font-size: 33px;
}
@media screen and (max-width: 320px){
font-size: 28px;
}
`;
export const Inform = styled.div`
font-family: Kanit;
font-size: 18px;
font-weight: 300;
text-align: center;
color: #37383C;
width: 397px;
margin-bottom: 16px;
line-height: 120%;

@media screen and (max-width: 600px){
font-size: 18px;
width: 100%;
margin-top: 10px;
}
@media screen and (max-width: 425px){
font-size: 18px;
width: 100%;
margin-top: 10px;
}
@media screen and (max-width: 375px){
// width: 80%;
}
@media screen and (max-width: 320px){
font-size: 15px;
}
`;
export const Search = styled.div`
background: #F2F3F4;
border: 1px solid #DCDAE2;
border-radius: 30px;
width: 565px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 600px){
width: 90%;
height: 40px;
}
@media screen and (max-width: 425px){
width: 90%;
height: 40px;
}
@media screen and (max-width: 375px){
// width: 80%;
}
@media screen and (max-width: 320px){
// width: 80%;
}
`;
export const SearchText = styled.input`
background-color: transparent;
resize: none;
outline: none;
border: none;

font-family: Kanit;
font-size: 18px;
font-weight: 300;
line-height: 22px;
text-align: left;
width: 60%;
height: inherit;
border-radius: 30px;
color: green;
padding-left: 20px;
text-transform: sentence;

::placeholder {
    color: #BDBDBD;;
  }

@media screen and (max-width: 600px){
font-size: 16px;
}
@media screen and (max-width: 425px){
font-size: 14px;
}
@media screen and (max-width: 375px){
// width: 80%;
}
@media screen and (max-width: 320px){
// width: 80%;
}
`;
export const SearchButton = styled.div`
background: red;
margin-right: 8px;
width: 145px;
height: 45px;
background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
border-radius: 55px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

img{
    width: 25px;
    height: 25px;
}

:hover{
    width: 155px;
    display: flex;
    justify-content: space-around;
    transition: all 1s;
}

@media screen and (max-width: 600px){
width: 30%;
height: 35px;
}
@media screen and (max-width: 425px){
width: 30%;
height: 35px;
}
@media screen and (max-width: 375px){
width: 45%;
}
@media screen and (max-width: 320px){
// width: 80%;
}
`;
export const ButtonText = styled.div`
font-family: Kanit;
font-size: 12px;
font-weight: 400;
line-height: 15px;
text-align: left;
color: #FFFFFF;
margin-right: 13px;

@media screen and (max-width: 600px){
font-size: 12px;
}
@media screen and (max-width: 425px){
font-size: 12px;
}
@media screen and (max-width: 375px){
// width: 80%;
}
@media screen and (max-width: 320px){
// width: 80%;
}
`;