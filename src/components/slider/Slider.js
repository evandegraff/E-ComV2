// import React, {useState} from 'react'
// import './Slider.css'
// import BtnSlider from './BtnSlider'
// import dataSlider from './dataSlider'

// export default function Slider() {
// // Declares my variable. Index of current slide being shown.
//     const [slideIndex, setSlideIndex] = useState(1)
// // Will be used to change what slide is currently being displayed on the slider.
// // Takes one argument which is an integer representing how many slides would be skipped, before starting again.
// // Uses recursion to iterate through all of its arguments until it reaches its final arguments.
// // Which represents that we've reached our last step in the process.
// const nextSlide = () => {
//     // if this happens it sets itself back up so it can start over.
//         if(slideIndex !== dataSlider.length){
//             setSlideIndex(slideIndex + 1)
//         } // otherwise it doesn't happen. Changes the value if it isn't the max value, or increases by one if it's max.
//         else if (slideIndex === dataSlider.length){
//             setSlideIndex(1)
//         }
//     }
// // Trying to set the slide index back to 1 if it is not already at 1. 
// // If the current slideIndex is greater than or equal to one.
//     const prevSlide = () => {
//         if(slideIndex !== 1){
//             setSlideIndex(slideIndex - 1)
//         }
// // If there are no slides left then it sets our Index back to 0. 
//         else if (slideIndex === 1){
//             setSlideIndex(dataSlider.length)
//         }
//     }
// // Set slide index to the value of the passed in argument.
//     const moveDot = index => {
//         setSlideIndex(index)
//     }
// // 
//     return (
//         <div className="container-slider">
//             {dataSlider.map((obj, index) => {
//                 return (
// // Creates an object called obj.id and assigns it the key property. The key is then used in conjunction with JS .eq method to determine which slide shoudl be active on screen.

//                     <div
//                     key={obj.id}
//                     className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//                     >

//                         <img 
//                         src={process.env.Client_URL + `/imgs/img${index + 1}.jpg`} 
                    
//                         />
//                     </div>
//                 )
//             })}
//  {/* Changes the slide to be next if the user clicks on the left button, then previous if they click right. */}
//             <BtnSlider moveSlide={nextSlide} direction={"next"} />
//             <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
// {/* // Iterates through each of the dots using slideIndex as an index to determine which class to use. Our buttons at the bottom of the slider. */}
//             <div className="container-dots">
//                 {Array.from({length: 5}).map((item, index) => (
//                     <div 
//                     onClick={() => moveDot(index + 1)}
//                     className={slideIndex === index + 1 ? "dot active" : "dot"}
//                     ></div>
//                 ))}
//             </div>
//         </div>
//     )
// }