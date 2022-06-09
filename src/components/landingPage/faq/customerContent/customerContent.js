import React from 'react'
import {ContentContainer, CustomerText, CustomerImage, HeadOne, HeadTwo, HeadThree, ButtonText, CustImg1, CustImg2} from './customerContentStyle'

const CustomerContent = (props) => {
  return (
    <ContentContainer>
        <CustomerText>
            <HeadOne>
            {props.heading}
            </HeadOne>
            <HeadTwo>
            {props.description1} <br/><br/>
            {props.description2}
            </HeadTwo>
            <HeadThree>
                <ButtonText>{props.getStarted}</ButtonText>
                <CustImg1 src={props.buttonIcon} alt="props.title" />
            </HeadThree>
        </CustomerText>
        <CustomerImage>
            <CustImg2 src={props.customerImage} alt="props.title" />
        </CustomerImage>
    </ContentContainer>
  )
}

export default CustomerContent









// const CustomerContent = () => {
//   return (
//     <ContentContainer>
//         <CustomerText>
//             <HeadOne>
//             What do i need to use Argone Pay as a customer?
//             </HeadOne>
//             <HeadTwo>
//             Argone Pay provides instant credit facilities to everybody. All you need is credit worthiness, and our system will profile you with just enough to finance your desired items from your favorite online vendors.<br/><br/> 

//             We partner with some of the leading credible online vendors in Nigeria. We do not offer loans, we only let you pay for items in installments directly from the websites of our partner websites.
//             </HeadTwo>
//             <HeadThree>
//                 <ButtonText>Get started</ButtonText>
//                 <img src={buttonIcon} alt="missingIcon" />
//             </HeadThree>
//         </CustomerText>
//         <CustomerImage>
//             <img src={customerImage} alt="missingIcon" />
//         </CustomerImage>
//     </ContentContainer>
//   )
// }

// export default CustomerContent