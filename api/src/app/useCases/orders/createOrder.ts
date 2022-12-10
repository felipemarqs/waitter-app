import { Request, Response } from 'express';
import { isObjectIdOrHexString } from 'mongoose';
import { io } from '../../../index'

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

		if (!table || !products) {
			return 	res.status(400).json({
				error: 'Table and Products are required.'
			})
		}
		
    const order = await Order.create({ table, products });
		const orderDetails = await order.populate('products.product');

		io.emit('orders@new', orderDetails) 

    res.json(order);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

