import React from 'react'
import {GetStartedContainer, GetStartedWrapper, GetText, TextHead, BigCard, SmallCard, Settings, Powerful, ContactNav, ButtonText, InnerCard, InnerCard2, PropsCard, SetImg, ButImg, InnImg} from './GetStartedStyle'
import settingsImage from '../../../images/settingsImage.png'
import phoneCoding from '../../../images/phoneCoding.png'
import buttonIcon from '../../../images/NavArrow2.png'
import CardProps from './propsCard/CardProps'
import seamless from '../../../images/seamless.png'
import reasonable from '../../../images/reasonable.png'
import priority from '../../../images/priority.png'

const GetStarted = () => {
  return (
    <GetStartedContainer>
        <GetStartedWrapper>
            <GetText>
                <TextHead>Getting Started</TextHead>
            </GetText>
            <BigCard>
              <InnerCard>
              <Settings>
                <SetImg src={settingsImage} alt="settings_image" />
              </Settings>
              <Powerful>
              Powerful APIs and easy to use integration tools
              </Powerful>
              <ContactNav>
              <ButtonText>Get Started</ButtonText>
              <ButImg src={buttonIcon} alt="button_Icon" />
              </ContactNav>
              </InnerCard>
              <SmallCard>
              <InnerCard2>
              <InnImg src={phoneCoding} alt="phone_coding" />
              </InnerCard2>
              </SmallCard>
            </BigCard>
            <PropsCard>
              <CardProps 
              seamless={seamless}
              seamless_image="seamless_image"
              seamlessOnboarding="Seamless onboarding"
              sigin="Account sign-in"
              buttonIcon={buttonIcon}
              button_image="button_image"
               />
              <CardProps 
              seamless={reasonable}
              seamless_image="reasonable_image"
              seamlessOnboarding="Reasonable Interest Rates"
              sigin="Contact sales"
              buttonIcon={buttonIcon}
              button_image="button_image"
               />
              <CardProps 
              seamless={priority}
              seamless_image="priority_image"
              seamlessOnboarding="Priority Support"
              sigin="Follow us on Twitter"
              buttonIcon={buttonIcon}
              button_image="button_image"
               />
            </PropsCard>
        </GetStartedWrapper>
    </GetStartedContainer>
  )
}

export default GetStarted;