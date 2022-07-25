import React from "react";
import {
  OtpContainer,
  OtpWrapper,
  Brand,
  OtpDashboard,
  BrandImage,
  BrandText,
  Movement,
  Back,
} from "./OtpVerificationStyle";
import BrandLogo from "../../../images/Argonpag_logo.png";
import BrandName from "../../../images/ArgoneName.png";
import { IoIosArrowBack } from "react-icons/io";

const OtpVerification = () => {
  
  return (
    <OtpContainer>
      <Movement to="/onboarding">
        <IoIosArrowBack />
        <Back>Back</Back>
      </Movement>
      <OtpWrapper>
        <Brand>
          <BrandImage src={BrandLogo} alt="argonpay" />
          <BrandText src={BrandName} alt="argonpay" />
        </Brand>
        <OtpDashboard>
          A card will be here....
        </OtpDashboard>
      </OtpWrapper>
    </OtpContainer>
  );
};

export default OtpVerification;
