import React from "react";
import {
  UserContainer,
  One,
  Two,
  Three,
  Nin,
  Dial,
  UserInput,
  Err,
} from "./UserSignUpStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getNINdata } from "../../Global/state";
import Swal from "sweetalert2";

const UserSignUp = () => {
  const dispatch = useDispatch();
  const dataSchema = yup.object().shape({
    ninData: yup
      .string()
      .length(11)
      .required("Kindly input correct 11 digit NIN"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(dataSchema),
  });

  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (value) => {
    // console.log(value);

    const { ninData } = value;
    try {
      const url =
        "https://argonepayapi.findfood.ng/api/v1/IdentityVerification/VerifyNIN";

      const response = await axios({
        headers: {
          "Content-Type": "application/json",
          Accept: "*",
          mode: "cors",
        },
        url: url,
        method: "post",
        data: {
          "nin": ninData,
        },
      });
      if (ninData === response.data.data.nin) {
        dispatch(getNINdata(response.data.data));
        // console.log(response.data.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your NIN is valid",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/userStep1");
        });
        // navigate("/userStep1");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Oops...",
          text: "You Provided an Invalid NIN",
        });
        console.log(response.data.data.nin);
        console.log(ninData);
        console.log("thi nin data is shown above");
        navigate("/onboarding");
      }
      // @Desc TEST: Dummy test for NIN
      // if (ninData === "57176109497") {
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "success",
      //     title: "Your NIN is valid",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   }).then(() => {
      //     navigate("/userStep1");
      //   });
      // } else {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "You Provided an Invalid NIN",
      //   });
      //   navigate("/onboarding");
      // }
      // reset();
    } catch (error) {
      console.error(error.message);
    }
  });

  return (
    <UserContainer onSubmit={onSubmit}>
      <One>
        <Nin>ENTER YOUR NIN</Nin>
        <Dial>Dial *321*?# for your NIN</Dial>
      </One>
      <Two>
        <Err>{errors?.ninData?.message}</Err>
        <UserInput placeholder="1234567890" {...register("ninData")} />
      </Two>
      <Three type="submit">Continue</Three>
    </UserContainer>
  );
};

export default UserSignUp;
