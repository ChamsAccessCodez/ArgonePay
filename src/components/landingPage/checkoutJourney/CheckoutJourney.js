import React from 'react'
import {ParentCheckout, CheckoutContainer, BusinessPower, Provide, Connect, TextOne, TextTwo, ConnectText, ConnectImage, ItemOne, ItemTwo, ItemThree, ItemFour, Sale, ImgItem1, ImgItem4, ImgConnect} from './CheckoutJourneyStyles'
import connectImage from '../../../images/phone cart.png'
import connectIcon from '../../../images/Connect_Icon.png'
import saleIcon from '../../../images/saleIcon.png'

const CheckoutJourney = () => {
  return (
    <ParentCheckout>
        <CheckoutContainer>
        <BusinessPower>
            <TextOne><span>Power your Business</span></TextOne>
            <TextTwo>with Simplified BNPL</TextTwo>
        </BusinessPower>
        <Provide>
        Provide your online customers with a simplified checkout experience to enable them pay for items in installments; get your value for item instantly. 
        </Provide>
        <Connect>
            <ConnectText>
                <ItemOne>
                    <ImgItem1 src={connectIcon} alt="connect_Icon" />
                </ItemOne>
                <ItemTwo>
                Connect
                </ItemTwo>
                <ItemThree>
                Integrate our API seamlessly to your Wordpress, Shopify, Joomla CMS store
                </ItemThree>
                <ItemFour>
                    <Sale>
                    Contact Sales
                    </Sale>
                    <ImgItem4 src={saleIcon} alt="sale_icon" />
                </ItemFour>
            </ConnectText>
            <ConnectImage>
                <ImgConnect src={connectImage} alt="connect_Image" />
            </ConnectImage>
        </Connect>
    </CheckoutContainer>
    </ParentCheckout>
  )
}

export default CheckoutJourney