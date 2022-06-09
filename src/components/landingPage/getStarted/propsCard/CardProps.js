import React from 'react'
import {CardPropsWrapper, Settings, Powerful, ContactNav, ButtonText, SeamImg} from './CardPropsStyle'


const CardProps = (props) => {
  return (
        <CardPropsWrapper>
            <Settings>
                <SeamImg src={props.seamless} alt="props.seamless_image" />
            </Settings>
            <Powerful>
            {props.seamlessOnboarding}
            </Powerful>
            <ContactNav>
              <ButtonText>{props.sigin}</ButtonText>
              <img src={props.buttonIcon} alt="props.button_image" />
            </ContactNav>
        </CardPropsWrapper>
  )
}

export default CardProps