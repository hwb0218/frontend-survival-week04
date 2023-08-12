import fetch from 'node-fetch';

import type { ResOrders, ShoppingCart } from '../types/restaurants';

export default function useFetchOrders() {
  const sendPostRequest = async (
    url: string,
    data: ShoppingCart,
  ) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = (await response.json()) as ResOrders;
    return responseData;
  };
  return sendPostRequest;
}
