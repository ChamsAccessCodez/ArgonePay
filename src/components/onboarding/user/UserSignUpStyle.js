import styled from 'styled-components'

export const UserContainer = styled.div`
width: 100%;
background-color: #ffffff;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
margin-bottom: 20px;
`;
export const One = styled.div`
width: 80%;
// background-color: pink;
display: flex;
margin-top: 20px;
margin-bottom: 20px;
`;
export const Nin = styled.div`
width: 50%;
font-family: Helvetica Neue;
font-size: 12px;
font-weight: 400;
text-align: left;
color: #707070;
justify-content: left;
`;
export const Dial = styled.div`
width: 50%;
font-family: Helvetica Neue;
font-size: 10px;
font-weight: 500;
text-align: left;
color: #B7B7B7;
display: flex;
justify-content: right;
`;
export const Two = styled.div`
width: 100%;
margin-bottom: 30px;
text-align: center;

`;
export const UserInput = styled.input`
width: 80%;
height: 30px;
border: none;
border-bottom: 1px solid #8ABB2A;

::placeholder{
    color: #B7B7B7;
    margin-top: 5px;
    margin-bottom: 5px;
}
`;
export const Three = styled.div`
width: 80%;
height: 44px;
text-align: center;
margin-bottom: 20px;
background: #04487F;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
font-family: Helvetica Neue;
font-size: 18px;
font-weight: 700;
color: #ffffff;
cursor: pointer;
transition: all 1s;

:hover{
    background: #EFEFEF;
    color: #04487F;
}
`;
// const UserContainer = styled.div``;
// const UserContainer = styled.div``;
// const UserContainer = styled.div``;
// const UserContainer = styled.div``;