import React from 'react'
import {EveryoneContainer, EveryoneWrapper, TextWrapper, CardWrapper, Circle, CircleText, HeadingText, Cards, BodyText, Card, CardImage, One, Two, Three, Four, FourText, FourImage, CardImg} from './ArgoneEveryoneStyle'
import Map from "../../../images/map.png"
import IndividualIcon from "../../../images/individualIcon.png"
import MerchantIcon from "../../../images/merchantIcon.png"
import SmallIcon from "../../../images/NavArrow2.png"

const ArgoneEveryone = () => {
  return (
    <EveryoneContainer>
        <EveryoneWrapper>
            <TextWrapper>
                {/* <img src={} alt="circle" /> */}
                <Circle></Circle>
                <CircleText>
                    <HeadingText>Argone Pay is for <span>everyone...</span></HeadingText>
                    <BodyText>
                    Whether you’re an individual looking to finance a purchase or you’re a business seeking out avenues to sell more, Argone pay has you covered
                    </BodyText>
                </CircleText>
            </TextWrapper>
            <CardWrapper>
                <Cards>
                    <Card>
                        <One>
                            <img src={IndividualIcon} alt="fourImage" />
                        </One>
                        <Two>For Individuals</Two>
                        <Three>Register to get profiled on Argone pay and enjoy financial benefits to shop for products online that your credit score allows you access to.</Three>
                        <Four>
                            <FourText>Create an account</FourText>
                            <FourImage>
                                <img src={SmallIcon} alt="fourImage" />
                            </FourImage>
                        </Four>
                    </Card>
                    <Card>
                        <One>
                            <img src={MerchantIcon} alt="fourImage" />
                        </One>
                        <Two>For Merchants</Two>
                        <Three>Register to get your business and get your products available to verified customers who have been profiled as credible buyers.</Three>
                        <Four>
                            <FourText>Get started</FourText>
                            <FourImage>
                                <img src={SmallIcon} alt="fourImage" />
                            </FourImage>
                        </Four>
                    </Card>
                </Cards>
                <CardImage>
                    <CardImg src={Map} alt="twoMaps" />
                </CardImage>
            </CardWrapper>
        </EveryoneWrapper>
    </EveryoneContainer>
  )
}

export default ArgoneEveryone