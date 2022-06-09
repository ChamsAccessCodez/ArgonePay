import React from 'react'
import { HeroContainer, FlashText, FlashImage, Now, FlashButtons, UserSignupButton, MarchantSignUpButton, Text01, Text02, ParentHero, Img001, Img002, Img003, Img004} from './HeroStyle'
import imageText from "../../../images/imageText.png"
import NavArrow from '../../../images/NavArrow.png'
import NavArrow2 from '../../../images/NavArrow2.png'
import FlashImages from '../../../images/flashImage.png'


export const Hero = () => {
  return (
    <ParentHero>
        <HeroContainer>
        <FlashText>
            <Img001 src={imageText} alt="flash_text" style={{
                // width: "608px",
                // height: "244px"
            }}/>
            <Now>
            Now you can shop conveniently for goods and pay in bits, with zero paperwork and low interest rates! 
            </Now>
            <FlashButtons>
                <UserSignupButton>
                    <Text01>user signUp</Text01>
                    <Img002 src={NavArrow} alt="Nav_Arrow" style={{
                        height: "20px",
                        width: "20px"
                    }}/>
                </UserSignupButton>
                <MarchantSignUpButton>
                    <Text02>merchant signUp</Text02>
                    <Img003 src={NavArrow2} alt="Nav_Arrow" style={{
                        height: "20px",
                        width: "20px"
                    }}/>
                </MarchantSignUpButton>
            </FlashButtons>
        </FlashText>
        <FlashImage>
            <Img004 src={FlashImages} alt="Flash_Images" />
        </FlashImage>
    </HeroContainer>
    </ParentHero>
  )
}

export default Hero;
