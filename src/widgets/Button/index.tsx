import { Button as BtnAntd } from "antd";
import styles from "./style.module.css";

function Button({
  text = "",
  type = "primary",
  ...rest
}: {
  text: string;
  type?: string;
}) {
  return (
    <BtnAntd type={type} className={styles.button} {...rest}>
      {text}
    </BtnAntd>
  );
}
export default Button;
