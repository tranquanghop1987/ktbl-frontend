'use client';
import { ArrowDownOutlined } from '@ant-design/icons';
import Link from 'next/link';

function ScrollDown() {
  return (
    <div className="scroll-down">
      <Link href="#product" className="flex flex-column align-center">
        <ArrowDownOutlined />
        <span>Scroll down</span>
      </Link>
    </div>
  );
}
export default ScrollDown;
