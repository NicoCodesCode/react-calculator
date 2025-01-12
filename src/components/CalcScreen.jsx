import "../index.css";

export default function CalcScreen({ textOnScreen }) {
  return (
    <div className="calc-screen">
      <p className={"calc-text"}>{textOnScreen}</p>
    </div>
  );
}
