import React, { Component } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.li`
   float: left;
   width: 24%;
   height: 425px;
   margin-bottom: 25px;
   margin-right: 10px;
   cursor: pointer;
   @media  (min-width : 549px) and (max-width : 1533px) {
    height: 360px;
   }
   @media  (min-width : 445px) and (max-width : 548px) {
    height: 370px;
   }
   @media (max-width:349px){
    height: 360px;
   }
   @media (min-width : 926px) and (max-width : 1190px) {
       width: 31%;
   };
 
   @media (min-width : 549px) and (max-width : 925px) {
       width: 47%;
   };
   @media (max-width : 548px) {
       width: 100%;
   };
   &:hover{
    background-color: #f2f2f2;
   }
   pointer-events:none;
`; 

const ProductItem = styled.div`
    pointer-events: all;
    background-color: #fff;
    transition: all 0.3s ease;
    padding-bottom: 3px;
    &:hover {
    box-shadow: 1px 6px 8px 0px #ccc; 
    margin-top: -6px;
    border-bottom: ${ props => props.inStock ? '2px solid #3677d2' : 'none'};
    padding-bottom:  ${ props => props.inStock ? '0 ' : '2px'};
  }
`;

const ProductImage = styled.div`
   margin: 5px;
   padding-top: 6px;
`;

const ProductDescription = styled.div`
   font-size: 16px;
   margin: 20px 10px 25px 10px;
   line-height: 18px;
   height: 36px;
   overflow:hidden;
   margin-right: -1em;
   padding-right: 3em;
   position: relative;

  &:before{
      content:'...';
      position:absolute;
      right:37px;
      bottom:0;
  }
  &:after{
      content:'';
      position: absolute;
      right:31px;
      width:2em;
      height: 2em;
      margin-top: 0.2em;
      background-color:#fff;
  }
`;

const ProductPrice = styled.div`
   display: inline-block;
   font-size: 16px;
`;

const OldPrice = styled.div`
   float: left;
   margin-right: 25px;
   color: ${ props => props.inStock ? '#555' : '#c3c3c3'};
`;

const NewPrice = styled.div`
   float: left;
   color: ${ props => props.inStock ? '#66f3a5' : '#c3c3c3'};
`;

const AddToCart = styled.div`
   transition: background-color 0.2s, border 0.2s, color 0.2s;
   pointer-events: ${ props => props.inStock ? 'all' : 'none' };
   height: 38px;
   font-size: 16px;
   padding-top: 9px;
   color: ${ props => props.inStock ? '#3677d2' : '#c3c3c3'};
   margin: 10px 15px 10px  15px;
   border: ${ props => props.inStock ? '2px solid #3677d2' : '2px solid #c3c3c3'};
   &:hover {
    color: ${ props => props.inStock ? '#fff' : '#c3c3c3'};
    background-color: ${ props => props.inStock ? '#3677d2' : '#fff' };
    cursor: pointer;
    zoom: 1;
   }
`;

class Product extends Component {

    handleProduct = (id) => {
        this.props.history.push(`/product/${id}`);
    }

    handleCart = (event) => {
        event.stopPropagation();
        this.props.history.push(`/cart/add/${this.props.product.id}`);
    }
   
    
    render() {
    
        const { description, price, discount, image, inStock, id  } = this.props.product;
        const isDiscount =  discount.formatted !== "0" ? true: false;
        const newPrice = price.formatted - Math.round(discount.formatted/100*price.formatted);
       
        return (
            <ProductContainer>
              <ProductItem inStock={inStock} onClick={() => this.handleProduct(id)}>
                    <ProductImage>
                        <picture>
                            <source media="(min-width: 1534px)" srcSet={`${image}/300x250/e3005d`} />
                            <source media="(min-width: 549px)" srcSet={`${image}/230x190/e3005d`} />
                            <source media="(min-width: 445px)" srcSet={`${image}/400x200/e3005d`} />
                            <source media="(min-width: 350px)" srcSet={`${image}/300x250/e3005d`} />
                            <source media="(max-width: 349px)" srcSet={`${image}/230x190/e3005d`} />
                            <img src="" alt="Flowers" style={{ width: "auto", margin: 0}} />
                        </picture>
                    </ProductImage>
                    <ProductDescription>
                     { description}
                    </ProductDescription>
                    <ProductPrice>
                        <OldPrice inStock={inStock}> { isDiscount ? <del>{price.raw}</del>   : <span>{price.raw}</span>}</OldPrice> 
                        { isDiscount === true && <NewPrice inStock={inStock}> <strong>€ {newPrice.toString().replace('.', ',')}</strong></NewPrice>}
                    </ProductPrice>
                      <AddToCart inStock={inStock} onClick={this.handleCart}><strong>In den Warenkorb</strong></AddToCart> 
                </ProductItem>
            </ProductContainer>
        )
    }
}

export default Product;