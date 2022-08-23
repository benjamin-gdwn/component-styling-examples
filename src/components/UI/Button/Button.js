import classes from './Button.module.css'
// this module is styled using css modules.
const Button = props => {
  return (
    <button className={classes.button} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
