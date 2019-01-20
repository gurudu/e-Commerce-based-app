
import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { products } from '../mock-data';

const AppContainer = styled.div`
  text-align: center;
  width: 100%;
  font-family: 'Lato', sans-serif;
  background-color: #f2f2f2;
  color: #555;
  font-size: 20px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  float: left;
`;

const SideBar = styled.aside` 
     width: 15%;
     float: left; 
     @media (max-width : 768px) {
       display: none;
   };
`;

const Aside = styled.aside`
   font-size: 16px;
   text-align: left;
   min-height: 100vh;
   padding-top: 10px;
   padding-left: 30px;
   background-color: #fff;
   margin: 22px 12px 30px 20px; 
`;

const Content = styled.section`
   width: 85%;
   float: left;
   background-color: #f2f2f2;
   margin-top:17px;
   
   @media (min-width : 571px) and (max-width : 768px) {
       width: 98%;
       margin-left: 12px;  
   };
   @media (min-width : 421px) and (max-width : 570px) {
       width: 96%;
       margin-left: 12px;
   };
   @media (max-width : 420px) {
       width: 92%;
       margin-left: 12px;
   };
`;

const ProductsList = styled.ul`
   list-style-type: none;
   pointer-events:none;
   padding: 0;
   margin: 0;
   &::after{
     display:table;
     content: "";
     clear: both;
   }
`;


const Products = (props) => {
        const { history } = props;
        console.log('Home', props);
        return (
             <AppContainer>
                <SideBar>
                  <Aside>
                    <p>Lorem ipsum</p>
                    <p>Dolor sit amet</p>
                    <p>Lorem ipsum</p>
                    <p>Dolor sit amet</p>
                    <p>Lorem ipsum</p>
                    <p>Dolor sit amet</p>
                  </Aside>
                </SideBar>
                <Content>
                    <ProductsList >
                      { products.map(product => 
                            <Product key={product.id} product={product} history={history}/>
                      )}
                    </ProductsList>
                </Content>
              </AppContainer>
        );
  }

 export default Products; 