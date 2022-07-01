import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverviewComponent = ({ income, expense, addtranseaction }) => {
  const [isshow, setIsshow] = useState(false);
  return (
    <>
      <div className="topsection">
        <p>balance:{income - expense}</p>
        <button
          onClick={() => setIsshow((prevState) => !prevState)}
          className={`btn ${isshow ? "cancel" : ""}`}
        >
          {isshow ? "cancel" : "add"}
        </button>
      </div>
      {isshow && <TransactionForm addtranseaction={addtranseaction} setIsshow={setIsshow}/>}
      <div className="secsection">
        <div className="expenseBox">
          income
          <span style={{ color: "green" }}>{income}$</span>
        </div>
        <div className="expenseBox">
          expense
          <span>{expense}$</span>
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;
