import React from 'react'
import {CommunityContainer, CommunityWrapper, Join, Inform, Search, SearchText, SearchButton, ButtonText} from "./CommunityStyle"
import buttonIcon from '../../../../images/NavArrow2.png'

const Community = () => {

  return (
    <CommunityContainer>
        <CommunityWrapper>
            <Join>Join our Community</Join>
            <Inform>Be informed when we onboard new partners and never miss a bit of excited updates from us</Inform>
            <Search>
                <SearchText type="text" placeholder="Enter your email here" />
                <SearchButton>
                    <ButtonText>Subscribe</ButtonText>
                    <img src={buttonIcon} alt="props.button_image" />
                </SearchButton>
            </Search>
        </CommunityWrapper>
    </CommunityContainer>
  )
}

export default Community