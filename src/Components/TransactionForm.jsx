import { useState } from "react";

const TransactionForm = ({ addtranseaction, setIsshow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // props.addTodoHandler(input);
    addtranseaction(formValues);
    setIsshow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="descrebtion"
      ></input>
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="amount"
      ></input>
      <div className="radioBox">
        <input
          type="radio"
          name="type"
          value="expense"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense">expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          onChange={changeHandler}
          id="income"
          checked={formValues.type === "income"}
        />
        <label htmlFor="income">income</label>
      </div>
      <button type="submit" className="btn primary">
        add transeAction
      </button>
    </form>
  );
};

export default TransactionForm;
