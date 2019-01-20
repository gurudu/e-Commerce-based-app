
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  margin: 20px;
`;

const ProductDetails = (props) => {
    console.log('props in product details', props);
    return (
      <ProductDetailsContainer>
        <h2>Product details</h2>
        <h3>{props.match.params.id}</h3>
        <p><Link to="/"> Go to Products</Link> </p>
      </ProductDetailsContainer>
    );
  }

  export default ProductDetails;