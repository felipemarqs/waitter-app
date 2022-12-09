import { Order } from "../../types/Order";
import { Board, OdersContainer } from "./styles";
import { OrderModal } from "../OrderModal/index";
import { useState } from "react";
import { api } from "../../utils/api";

import { toast } from "react-toastify";

interface OdersBoardProps {
	icon: string;
	title: string;
	orders: Order[];
	onCancelOrder: (order: string) => void;
	onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OdersBoard({
	icon,
	title,
	orders,
	onCancelOrder,
	onChangeOrderStatus
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

	async function handleChangeOrderStatus() {
		setIsLoading(true)

		const newStatus = selectedOrder?.status === 'WAITING' ? 'IN-PROGRESS' : 'COMPLETED';

		await api.patch(`/orders/${selectedOrder?._id}`, { status : newStatus});

		toast.success(`O pedido alterado com sucesso!`)
		onChangeOrderStatus(selectedOrder!._id , newStatus);
		setIsLoading(false);
		setIsModalVisible(false);
	}

	async function handleCancelOrder() {
		setIsLoading(true);

		
		await api.delete(`/orders/${selectedOrder?._id}`);

		toast.success(`O pedido cancelado com sucesso!`)
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
				onChangeOrderStatus={handleChangeOrderStatus}
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
