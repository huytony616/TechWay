export interface Order {
  cartItems: [
    {
      id: number;
      quantity: number;
      product: {
        id: number;
        name: string;
        price: number;
        image: string;
      };
    }
  ];
  shipping: number;
  address: string;
  phone: string;
}
