'use client';
import { useState } from 'react';
import Image from 'next/image';
import './styles.css';  

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const initialProducts: Product[] = [
  { id: 1, name: 'iPhone 15 Pro', price: 36900, image: 'https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Pro_Natural_Titanium_PDP_Image_Position-1A_Natural_Titanium_Color.jpg?v=1707277926&width=1445' },
  { id: 2, name: 'iPhone 15', price: 26900, image: 'https://www.istudio.store/cdn/shop/files/TH_iPhone_15_Blue_PDP_Image_Position-1A_Blue_Color.jpg?v=1707277872&width=1445' },
  { id: 3, name: 'iPad Pro', price: 39900, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=YXpaUEtKWGhlNnNrVGZkTEo4T0xsN2dzSmpObkZCM3MrNmJ5SkhESlNDaktqSkExTHB4VHJRR1hzOGdBenBuczN0bWR6ME9RYmIrVG9PSXZFalM2aHdBb0pjWml6bllCL0Y5a1RKc2gxZjlIaERUT3FJbHFiWTlmb2lodm1tWE55UjVHcmIzQTc0UDFXY0hsUWdxUDFRPT0=&traceId=1' },
  { id: 4, name: 'iPad Air', price: 23900, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-11inch-blue-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=TENLTVRoeFdHUUI5ZE1ZZmxpQUlNMm5pQUoxb0NIVEJFSjRVRzZ4dzV5U1FlOUdhQlk1UEtGbkd3TUk4RW5YMThiZjRKRUJ6ZU96N3VHVCtXdS9WdVVCNWUrcXd0bG5Na3hKOEEyeFZtNE45Q2drLzhtOFgzejV4MENrZ0JFZVBYWlVOYndCL3BHZGxSTXNxSlZHZlZ3PT0=&traceId=1' },
  { id: 5, name: 'iPad', price: 13900, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-blue-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=OVJOVlhQelp3cUxDNnpBK0hFNFYrQUxaUVVtOUhUT0c2NzZRUllPeEJTd2Nla0ZzY0hJUkxYWE1PZHIramdKSGJWU3RPOURZS0RCaG1weXBRYytNTENhUThSUC84VzArL0cyckNrL25wa0VEaXdsQXhSUVJEK2lURHg1RU5ZZUNWcnlSVk40T21vTFdCcWxRSGNlUFBRPT0=&traceId=1' },
  { id: 6, name: 'iPad mini', price: 19900, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=eDJDc00wczl1QWk5QmpVYitFNXQwOVgrSXpWVEhWaW9YTGlWRHFoSHU0OG5mNEIvMUVsODRNNlRVVkNDQ2g4akpxbExkakZwOW1FVDBpNHlyYVFtRnM2c3NSYUM4YjA0RTQxLytvRzE4M0EvQzZsTkY3bUlhQXlnYVQ4OG1ybUl3bnNtc1k3Q0ZsRTVFSitUaitMYlFBPT0=&traceId=1' },
  { id: 7, name: 'MacBook Air', price: 39900, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034' },
  { id: 8, name: 'MacBook Pro', price: 56200, image: 'https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png' },
  { id: 9, name: 'iMac', price: 48000, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618' },
  { id: 10, name: 'Mac mini', price: 20900, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341' },
  { id: 11, name: 'Mac Studio', price: 74900, image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-studio-202306-gallery-2?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1683939204939' },
];

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]); 

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find((item) => item.id === product.id);
      if (productInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }]; 
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('th-TH', { style: 'currency', currency: 'THB' });
  };

 
  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Shopping Cart</h1>

      <div className="product-container">
        {initialProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <Image src={product.image} alt={product.name} width={500} height={500} className="product-image" /> 
            </div>
            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{formatPrice(product.price)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="cart-title text-3xl font-semibold mt-12 text-center text-gray-800">Your Cart</h2>
      {cart.length > 0 ? (
        <div className="mt-8">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-6">
              <div className="flex items-center">
                <div className="cart-image-container">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="cart-image" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">Price: {formatPrice(item.price)}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <div className="flex items-center mt-2">
                    <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 rounded">-</button>
                    <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 rounded ml-2">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 ml-4 rounded-lg hover:bg-red-700 transition duration-300">Remove</button>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-800">{formatPrice(item.price * item.quantity)}</p>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold text-gray-800">Total: {formatPrice(totalCartPrice)}</h3>
          </div>
        </div>
      ) : (
        <p className="mt-8 text-center text-gray-500">Your cart is empty</p>
      )}
    </div>
  );
}
