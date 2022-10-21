/* eslint-disable react/prop-types */
function Button({ event, text }) {
  return (
    <button type="button" onClick={event}>
      {text}
    </button>
  );
}

export default Button;
