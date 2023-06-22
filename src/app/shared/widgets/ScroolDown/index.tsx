"use client";
import { ArrowDownOutlined } from "@ant-design/icons";

function ScrollDown() {
  return (
    <div className="scroll-down">
      <a href="#product" className="flex flex-column align-center">
        <ArrowDownOutlined />
        <span>Scroll down</span>
      </a>
    </div>
  );
}
export default ScrollDown;
