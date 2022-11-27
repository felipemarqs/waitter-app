import { Order } from "../../types/Order";
import { Board, OdersContainer } from "./styles";
import { OrderModal } from "../OrderModal/index";
import { useState } from "react";

interface OdersBoardProps {
	icon: string;
	title: string;
	orders: Order[];
}

export function OdersBoard({ icon, title, orders }: OdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

	function handleOpenModal(order: Order) {
		setIsModalVisible(true);
		setSelectedOrder(order);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	return (
		<Board>
			<OrderModal 
			visible={isModalVisible}
			order={selectedOrder}
			onClose={handleCloseModal}
			/>

			<header>
				<span>{icon}</span>
				<span className="bold">{title}</span>
				<span>({orders.length})</span>
			</header>

			{orders.length > 0 && (
				<OdersContainer>
					{orders.map((order) => (
						<button
							type="button"
							key={order._id}
							onClick={() => handleOpenModal(order)}
						>
							<span className="bold">Mesa {order.table}</span>
							<span> {order.products.length} Itens</span>
						</button>
					))}
				</OdersContainer>
			)}
		</Board>
	);
}
