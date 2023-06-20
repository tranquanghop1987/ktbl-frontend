"use client";
import { useEffect, useRef } from "react";

function ScrollTop() {
  //Update Header Style and Scroll to Top
  const refScroll = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      var windowpos = document.documentElement.scrollTop;
      var scrollLink = refScroll.current;
      if (windowpos >= 110) {
        mainHeader.classList.add("fixed-header");
        scrollLink?.classList.add("open");
      } else {
        mainHeader.classList.remove("fixed-header");
        scrollLink?.classList.remove("open");
      }
    }
  }, []);
  const onClick = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <button
      onClick={onClick}
      className="scroll-top style-two scroll-to-target"
      data-target="html"
    >
      <span className="fa fa-arrow-up"></span>
    </button>
  );
}
export default ScrollTop;
