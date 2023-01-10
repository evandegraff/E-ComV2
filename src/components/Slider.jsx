




// import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Slider() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG1.jpeg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG2.jpeg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG3.jpeg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;





// import Carousel from 'react-bootstrap/Carousel';

// function Slider() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG2.jpeg"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Everything you need to start your music career</h3>
//           <p></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG1.jpeg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>The best starting products</h3>
//           <p></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./Images/MG3.jpeg"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3> Peak Sound Quality</h3>
//           <p>
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;



// The CarouselItem component will render the item itself. 
// We just need to pass the width property to this component for now
// The Carousel component will be the main controller to control the item
// we will control the active item by using the transform: translateX for the Div.Inner on line 16
// This method will receive a new index and do the check if the active is the first item or the last item
// Line 18: If the new index less than 0, we just reset it to 0
// Line 20: If the new index equal or greater than number of items , just reset it to number of items — 1
// Line 23: Call setActiveIndex to update the active state