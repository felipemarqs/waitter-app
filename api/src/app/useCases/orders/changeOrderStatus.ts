import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    
		const { orderId } = req.params;

		const { status } = req.body;

		if (!['WAITING', 'COMPLETED', 'IN-PROGRESS'].includes(status)) {
			return res.status(400).json({
				error: 'Invalid order status!'
			});
		}

		await Order.findByIdAndUpdate(orderId, {status});

		res.sendStatus(204);

	
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
}