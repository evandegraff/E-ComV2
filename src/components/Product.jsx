// import React from "react";
// import axios from "axios";

// class Products extends React.Component {
//     state= {
//       products: [],
//       type:"All",
  
  
//     }
//     componentDidMount() {
//         axios.get("/Products1").then((res) => {
//           const Products = res.data;
//           this.setState({products: Products });
//         });
//       } 
//       myFilter (type) {
//         return () => {
//             this.setState({type})
//         }
//     }
    
//       render() {
//         return (<>
// <div className="product">
//         {this.state.products
//           .filter((record) => {
//             if (this.state.type === "All") {
//               return true;
//             } else {
//               return this.state.type === record.category;
//             }
//           })
//           .map((card) => (
//             <div className="products" key={card.id}>
//               <img className="img" src={card.image} alt={card.device} />
//               <p className="console">{card.type}</p>
//               <p className="descriptions">{card.description}</p>
//               <p className="price">${card.price}</p>
//             </div>
//           ))}
//       </div>

//       </>
//           );}}
//       export default Products;

// export const { Product } = (Product) => {
//     return(
//         <>
//     <div class="image"> <img
//                   className="product-image"
//                   src={require("./Images/")}
//                 /> </div>
//     <div class="name">${Products.productName}</div>
//     <div class="specs">${Products.specs}</div>
//     <div class="price">${Products.price}</div>
//     </>
//     )}