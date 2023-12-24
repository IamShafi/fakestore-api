import React, {useState, useEffect, createContext} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //products states
  const [products, setProducts] = useState([]);
  // fethc products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
