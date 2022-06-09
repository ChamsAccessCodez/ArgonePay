import React from 'react'
import {TrustedContainer, TrustedWrapper, TrustedBy, TrustedLogo, ImgT1, ImgT2, ImgT3} from "./TrustedStyle"
import CustomerLogo from "../../../images/customerLogo.png"


const Trusted = () => {
  return (
    <TrustedContainer>
        <TrustedWrapper>
            <TrustedBy>trusted by</TrustedBy>
            <TrustedLogo>
                <ImgT1 src={CustomerLogo} alt="sample1" style={{
                }}/>
                <ImgT2 src={CustomerLogo} alt="sample1" style={{
                }}/>
                <ImgT3 src={CustomerLogo} alt="sample1" style={{
                }}/>
            </TrustedLogo>
        </TrustedWrapper>
    </TrustedContainer>
  )
}

export default Trusted