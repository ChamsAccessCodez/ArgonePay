import React from "react";
import styled from "styled-components";
import { MdMarkEmailRead } from "react-icons/md";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// verification component
const VerificationPage = () => {
	// const history = useNavigate();
	const { id, token } = useParams();

	const onSubmit = async () => {
        // base url
		const main = "http://localhost:4000/api";
        // verification link sent to user email
		const url = `${main}/user/verify/${id}/${token}`;

		const urlDetails = await axios.get(url).then((res) => {
			if (res) {
				console.log(res.data.message);
				// history("/signin-artecian");
				// window.location.reload();
			}
		}).catch((error)=>{
            console.log(error)
        });
		// window.location.reload()
	};

	return (
		<Container>
			<br />
			<br />
			<br />
			<br />
			<Cont>
				<MdMarkEmailRead />
			</Cont>
			<Box>
				<h2>Verification Success</h2>
				<p>You need to click the link bellow for complete verification of your email to access your dashboard.</p>
				<ButHol onClick={onSubmit}>CLICK TO CONTINUE</ButHol>
			</Box>
		</Container>
	);
};

export default VerificationPage;

const ButHol = styled.div`
	cursor: pointer;
	margin-top: 25px;
	:hover {
		color: #4eaa99;
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

const Cont = styled.div`
	height: 150px;
	width: 150px;
	border-radius: 50%;
	background-color: #4eaa99;
	position: absolute;
	top: -30px;
	margin-top: 270px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 50px;
	@media (max-width: 1445px) {
		margin-top: 170px;
	}
`;
const Box = styled.div`
	height: 200px;
	width: 100%;
	background-color: #f9fbfa;
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
	text-align: center;
	h2 {
		margin-top: 50px;
		font-weight: bold;
	}
	/* align-items: center; */
`;