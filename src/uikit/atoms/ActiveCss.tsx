const ActiveCSS = ({ className = '' }: { className?: string }) => {
  return <input type="checkbox" className={`${className} active w-full z-10 absolute opacity-0 top-0 left-0`} />;
};

export default ActiveCSS;
