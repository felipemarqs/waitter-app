import styled from "styled-components";

export const Board = styled.div`
	padding: 16px;
	border: 1px solid rgba(204, 204, 204, 0.4);
	border-radius:16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;

	> header {
		padding: 8px;
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.bold {
		font-weight: bold;
	}


`; 

export const OdersContainer = styled.div`

	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 24px;

	button {
		
		width: 100%;
		background: white;
		border: 1px solid rgba(204, 204, 204, 0.4);
		height: 128px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 4px;
		margin-top: 24px;
	}



	span {
		font-size: 14px;
		color: #666
	}

	.bold {
		font-weight: 500;
		font-size: 1rem;
	}

`;