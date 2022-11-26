import { Container, Board } from "./styles";

export function Orders() {
	return (
		<Container>
			<Board>
				<header>
					<span>🕑</span>
					<span className="bold">Fila de espera</span>
					<span>(1)</span>
				</header>
			</Board>
		</Container>
	);
}
