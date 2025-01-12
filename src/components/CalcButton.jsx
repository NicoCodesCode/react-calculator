import "../index.css";

export default function CalcButton({ children, handleButtonClick, name }) {
  return (
    <button
      onClick={handleButtonClick}
      className={`${name}-button calc-button`}
    >
      {children}
    </button>
  );
}
