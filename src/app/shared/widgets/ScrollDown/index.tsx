'use client';
import { scrollToTargetAdjusted } from '@/lib/common';
import { ArrowDownOutlined } from '@ant-design/icons';

const ScrollDown = () => {
  const onClick = () => {
    scrollToTargetAdjusted('product', 66);
  };
  return (
    <div className="scroll-down">
      <span onClick={onClick} className="flex flex-column align-center">
        <ArrowDownOutlined className={`icon`} />
        <span>Scroll down</span>
      </span>
    </div>
  );
};
export default ScrollDown;
