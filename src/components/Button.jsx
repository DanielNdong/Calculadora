import "../styles/Button.css";

function Button({ value, handleClick, eraseDigit, cleanAllScreen, calculate }) {
  const isOperator = value => {
    return isNaN(value)  && (value !== '.') && (value !== '=' )
  };
 /*  isNumber ? 'button' : 'highligh'  */
  return (
    <button 
      name={value} 
      className=
      {`button-wrapper ${isOperator(value) ? ' highligh' : ' numbers'}`.trimEnd()} 
      onClick=
      {value === 'C' ? 
      eraseDigit : value === 'AC' ? 
      cleanAllScreen : value === "=" ?
      calculate : handleClick}>
      {value}
    </button>
  );
}

export default Button;
