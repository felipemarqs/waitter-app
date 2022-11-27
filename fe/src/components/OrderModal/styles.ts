import styled from "styled-components";

export const Overlay = styled.div`
	left: 0px;
	top: 0px;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(4.5px);
	width: 100%;
	height: 100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;


export const ModalBody = styled.div`

	background: white;
	width: 480px;
	padding: 32px;
	border-radius: 8px;

	header {

		display: flex;
		align-items: center;
		justify-content: space-between;

		.bold {
			font-size: 24px;
			font-weight: bold;
		}
		
		button {
			line-height: 0;
			border: 0;
			background: transparent;
		}

		
	}

	.status-container {
		margin-top: 32px;

		small {
			font-size: 14px;
			opacity: 0.8;
		}

		div {
			margin-top: 8px;
			display: flex;
			align-items: center;
			gap: 8px;
		}

	}
	
	

`;