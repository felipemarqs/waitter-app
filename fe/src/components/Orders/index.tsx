import { Container } from "./styles";
import { OdersBoard } from "../OdersBoard";
import { Order } from "../../types/Order"

const orders: Order[] = [
	{
		"_id": "63812e986a0ae9a6da0b473d",
		"table": "123",
		"status": "IN-PROGRESS",
		"products": [
				{
						"product": {	
								"name": "Pizza quatro queijos",	
								"imagePath": "1669407421979-quatro-queijos.png",
								"price": 40,
						},
						"quantity": 2,
						"_id": "63812e986a0ae9a6da0b473e"
				},
				{
						"product": {
								"name": "Coca Cola",
								"imagePath": "1669409529478-coca-cola.png",
								"price": 7,
						},
						"quantity": 2,
						"_id": "63812e986a0ae9a6da0b473f"
				}
		],
},
{
	"_id": "63812e986a0ae9a6da0b473d",
	"table": "123",
	"status": "IN-PROGRESS",
	"products": [
			{
					"product": {	
							"name": "Pizza quatro queijos",	
							"imagePath": "1669407421979-quatro-queijos.png",
							"price": 40,
					},
					"quantity": 2,
					"_id": "63812e986a0ae9a6da0b473e"
			},
			{
					"product": {
							"name": "Coca Cola",
							"imagePath": "1669409529478-coca-cola.png",
							"price": 7,
					},
					"quantity": 2,
					"_id": "63812e986a0ae9a6da0b473f"
			}
	],
}
]

export function Orders() {
	return (
		<Container>
			<OdersBoard
				icon = "🕑"
				title = "Fila de espera"
				orders = {orders}
			/>

			<OdersBoard
				icon = "⌛"
				title = "Em preparação" 
				orders={[]}
			/>

			<OdersBoard
				icon = "✅"
				title = "Concluído!" 
				orders={[]}
			
			/>
		</Container>
	);
}
