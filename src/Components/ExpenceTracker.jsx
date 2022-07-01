import { useEffect } from "react";
import { useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenceTracker = (props) => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transeAction, setTranseAction] = useState([]);

  const addtranseactionHandler = (formValues) => {
    console.log(formValues);
    setTranseAction([...transeAction, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transeAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
      setExpense(exp);
      setIncome(inc);
    });
  }, [transeAction]);

  return (
    <section className="container">
      <OverviewComponent
        expense={expense}
        income={income}
        addtranseaction={addtranseactionHandler}
      />
      <TransActionComponent transeAction={transeAction} />
    </section>
  );
};

export default ExpenceTracker;
