import propTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}) {
  // js에서는 class가 아니라 classname으로 쓴다
  return <button className={styles.btn}>{text}</button>;
}

// propTypes 설정 (props의 타입이 뭐고 어떤 모양이어야 하는지 우리가 설명해줄 수 있다)
Button.propTypes = {
  text:propTypes.string.isRequired,
};

export default Button;