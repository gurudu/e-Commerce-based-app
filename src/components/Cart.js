
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  margin: 20px;
`;

const Cart = ({match}) => {
    return (
      <CartContainer>
        <h2>Cart</h2>
        <h3>{match.params.id}</h3>
        <p><Link to="/"> Go to Products</Link> </p>
      </CartContainer>
    );
  }
 
  export default Cart;
  