import React from 'react';
// import context
import {ProductContext} from '../contexts/ProductContext';
//import components
import Product from '../components/Product'

const Home = () => {
  // get products from product context
  const {products} = React.useContext(ProductContext);
  // get only selected category items
  const filteredProducts = products.filter((item) =>{
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  })

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
          max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((item) => (
              <Product key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
