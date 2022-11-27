export interface Order {
	_id: string;
	table: string;
	status: 'WAITING'| 'COMPLETED'| 'IN-PROGRESS';
	products: {
		_id: string;
		quantity: number;
		product: {
			name: string;
			imagePath: string;
			price: number;
		}
	}[];
}