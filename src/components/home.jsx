import { useRef, useEffect } from "react";

const MyComponent = () => {
  const menu = useRef(null);
  const menuLinks = useRef(null);
  const productContainers = useRef([]);
  const nxtBtn = useRef([]);
  const preBtn = useRef([]);

  useEffect(() => {
    menu.current = document.querySelector("#mobile-menu");
    menuLinks.current = document.querySelector(".navMenu");
    productContainers.current = [
      ...document.querySelectorAll(".product-container"),
    ];
    nxtBtn.current = [...document.querySelectorAll(".nxt-btn")];
    preBtn.current = [...document.querySelectorAll(".pre-btn")];

    // menu.current.addEventListener("click", () => {
    //   menu.current.classList.toggle("is-active");
    //   menuLinks.current.classList.toggle("active");
    // });

    productContainers.current.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn.current[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });

      preBtn.current[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });
  }, []);

  return (
    <>
      <button className="pre-btn">
        <img src="./Images/arrow.png" alt="Left Arrow" />
      </button>
      <button className="nxt-btn">
        <img src="./Images/arrow.png" alt="Right Arrow" />
      </button>
    </>
  );
};

export default MyComponent;
