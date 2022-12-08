import { Order } from "../../types/Order";
import { Board, OdersContainer } from "./styles";
import { OrderModal } from "../OrderModal/index";
import { useState } from "react";
import { api } from "../../utils/api";

interface OdersBoardProps {
	icon: string;
	title: string;
	orders: Order[];
	onCancelOrder: (order: string) => void;
}

export function OdersBoard({
	icon,
	title,
	orders,
	onCancelOrder,
}: OdersBoardProps) {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
	const [isLoading, setIsLoading] = useState(false);

	function handleOpenModal(order: Order) {
		setIsModalVisible(true);
		setSelectedOrder(order);
	}

	function handleCloseModal() {
		setIsModalVisible(false);
		setSelectedOrder(null);
	}

	async function handleCancelOrder() {
		setIsLoading(true);

		await new Promise((resolve) => setTimeout(resolve, 3000));
		await api.delete(`/orders/${selectedOrder?._id}`);

		onCancelOrder(selectedOrder!._id);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	return (
		<Board>
			<OrderModal
				visible={isModalVisible}
				order={selectedOrder}
				onClose={handleCloseModal}
				onCancelOrder={handleCancelOrder}
				isLoading={isLoading}
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
