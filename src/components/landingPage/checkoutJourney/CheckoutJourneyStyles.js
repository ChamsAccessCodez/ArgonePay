import styled from 'styled-components'

export const ParentCheckout = styled.div`
// background: grey;
width: 100vw;
display: flex;
justify-content: center;
align-self: center;
`;
export const CheckoutContainer = styled.div`
// background: tomato;
width: 80%;
display: flex;
flex-direction: column;
padding-top: 60px;
padding-bottom: 60px;
`;
export const BusinessPower = styled.div`
// background: tomato;
width: inherit;

@media screen and (max-width: 768px){

}
@media screen and (max-width: 600px){
// background: brown;
width: 100%;
}

@media screen and (max-width: 425px){
// background: brown;
width: 100%;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const TextOne = styled.div`
font-family: Kanit;
font-size: 60px;
font-weight: 500;
line-height: 72px;
letter-spacing: 0em;
text-align: left;

span{
    color: #8ABB2A;
}

@media screen and (max-width: 768px){
font-size: 50px;
}
@media screen and (max-width: 600px){
line-height: 52px;
font-size: 40px;
}

@media screen and (max-width: 425px){
line-height: 52px;
font-size: 40px;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const TextTwo = styled.div`
font-family: Kanit;
font-size: 60px;
font-weight: 500;
line-height: 72px;
letter-spacing: 0em;
text-align: left;

@media screen and (max-width: 768px){
font-size: 50px;
}
@media screen and (max-width: 600px){
line-height: 52px;
font-size: 40px;
}
@media screen and (max-width: 425px){
line-height: 52px;
font-size: 40px;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const Provide = styled.div`
font-family: Kanit;
font-size: 22px;
font-weight: 300;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
width: 62%;
height: 83px;
margin-top: 15px;
margin-bottom: 15px;

@media screen and (max-width: 768px){
width: 80%;
margin-bottom: 40px;
}
@media screen and (max-width: 600px){
width: 100%;
font-size: 20px;
margin-bottom: 90px;
}
@media screen and (max-width: 425px){
width: 100%;
font-size: 20px;
margin-bottom: 60px;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const Connect = styled.div`
// background: white;
height: 467px;
width: 100%;
border-radius: 20px;
border-radius: 20px;
background: linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%);
display: flex;
position: relative;

@media screen and (max-width: 768px){
flex-direction: column;
height: auto;
}
@media screen and (max-width: 600px){
// background: blue;
}
@media screen and (max-width: 425px){
// background: blue;
margin-top: 20px;
}
@media screen and (max-width: 375px){
margin-top: 40px;
}
@media screen and (max-width: 320px){
margin-top: 45px;
}

`;
export const ConnectText = styled.div`
// background: tomato;
width: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 80%;
align-self: center;

@media screen and (max-width: 768px){
position: relative;
width: inherit;
padding-top: 20px;
}
@media screen and (max-width: 600px){
// background: green;
height: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
// align-items: flex-start;
}
@media screen and (max-width: 425px){
// background: green;
height: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
// align-items: flex-start;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const ItemOne = styled.div`
width: 70%;
// background: white;
margin-left: 80px;

@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 600px){
// background: black;
width: 90%;
margin-left: 0px;
}
@media screen and (max-width: 425px){
// background: black;
width: 90%;
margin-left: 0px;
}
`;
export const ImgItem1 = styled.img`
height: 40px;
width: 40px;
`;
export const ItemTwo = styled.div`
width: 70%;
margin-left: 80px;
// background: white;
font-family: Kanit;
font-size: 44px;
font-weight: 600;
line-height: 66px;
color: #ffffff;

@media screen and (max-width: 768px){
    
}
@media screen and (max-width: 600px){
width: 90%;
margin-left: 0px;
font-size: 40px;
margin-left: 0px;
}
@media screen and (max-width: 425px){
width: 90%;
margin-left: 0px;
font-size: 40px;
margin-left: 0px;
}
@media screen and (max-width: 375px){
}
`;
export const ItemThree = styled.div`
width: 70%;
margin-left: 80px;
// background: white;
font-family: Kanit;
font-size: 22px;
font-weight: 400;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #ffffff;

@media screen and (max-width: 768px){
margin-bottom: 20px;
}
@media screen and (max-width: 600px){
width: 90%;
margin-left: 0px;
font-size: 20px;
}
@media screen and (max-width: 425px){
width: 90%;
margin-left: 0px;
font-size: 20px;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const ItemFour = styled.div`
margin-left: 80px;
background: white;
height: 49px;
width: 25%;
left: 189px;
border-radius: 82px;
display: flex;
justify-content: space-around;
align-items: center;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;
transition: width 1s;

:hover{
    width: 40%;
}

@media screen and (max-width: 768px){
margin-bottom: 20px;
}
@media screen and (max-width: 600px){
margin-left: 0px;
width: 45%;
margin-left: 15px;
padding-left: 10px;
padding-right: 10px;
height: 35px;
align-self: flex-start;
justify-content: space-between;


:hover{
    width: 80%;
}
}
@media screen and (max-width: 425px){
margin-left: 0px;
width: 45%;
margin-left: 15px;
padding-left: 10px;
padding-right: 10px;
height: 35px;
align-self: flex-start;
justify-content: space-between;


:hover{
    width: 80%;
}
}
@media screen and (max-width: 375px){
width: 80%;
}
@media screen and (max-width: 320px){
width: 80%;
}
`;
export const ImgItem4 = styled.img`
width: 29px;
height: 29px;

@media screen and (max-width: 600px){
height: 20px;
width: 20px;
padding-left: 0px;
padding-right: 0px;
}
@media screen and (max-width: 425px){
height: 20px;
width: 20px;
padding-left: 0px;
padding-right: 0px;
}
`;
export const Sale = styled.div`
font-family: Kanit;
font-size: 14px;
font-weight: 500;
line-height: 15px;
letter-spacing: 0em;
text-align: left;
`;
export const ConnectImage = styled.div`
position: absolute;
width: 50%;
top: -21%;
right: 0%;

@media screen and (max-width: 768px){
// background: tomato;
width: 100%;
top: 0%;
position: relative;
padding-top: 20px;
padding-bottom: 20px;
display: flex;
justify-content: center;
align-items: center;
}

@media screen and (max-width: 425px){

}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){

}
`;
export const ImgConnect = styled.img`

@media screen and (max-width: 600px){
height: 266px;
width: 297px;
}
@media screen and (max-width: 425px){
height: 266px;
width: 297px;
}
@media screen and (max-width: 375px){

}
@media screen and (max-width: 320px){
height: 200px;
width: 237px;
}
`;

// export const CheckoutContainer = styled.div``;