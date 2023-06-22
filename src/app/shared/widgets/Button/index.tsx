import { Button as BtnAntd } from "antd";
import styles from "./style.module.css";

function Button({
  text = "",
  type = "primary",
  className,
  width,
  ...rest
}: {
  text: string;
  type?: any;
  className?: string;
  width?: number;
}) {
  return (
    <BtnAntd
      type={type}
      className={`${styles.button} ${className}`}
      style={width ? { width: `${width}px` } : {}}
      {...rest}
    >
      {text}
    </BtnAntd>
  );
}
export default Button;
