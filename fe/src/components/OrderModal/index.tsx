import closeIcon from "../../assets/images/close-icon.svg";
import { Overlay, ModalBody } from "./styles";

interface OrderModalProps {
	visible: boolean;
}

export function OrderModal({ visible }: OrderModalProps) {
	if (!visible) {
		return null;
	}

	return (
		<Overlay>
			<ModalBody>
				<header>
					<span className="bold">Mesa 2</span>

					<button type="button">
						<img src={closeIcon} alt="Ícone de fechar" />
					</button>
				</header>

				<div className="status-container">
					<small>Status do Pedido</small>
					<div>
						<span>🕑</span>
						<strong>Fila de espera</strong>
					</div>
				</div>
			</ModalBody>
		</Overlay>
	);
}
