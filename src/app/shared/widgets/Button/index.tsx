function PrimaryButton({
  text = '',
  width,
  className = '',
  ...rest
}: {
  text: string;
  type?: any;
  width?: number;
  className?: string;
  [x: string]: any;
}) {
  return (
    <button
      className={`${className} bg-gradient-to-b from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-full`}
      style={{ width }}
      {...rest}
    >
      {text}
    </button>
  );
}
export default PrimaryButton;
