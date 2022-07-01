import { useEffect, useState } from "react";

const TransActionComponent = ({ transeAction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transeAction);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transeAction);
      return;
    }
    const filtered = transeAction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };

  useEffect(() => {
    filterTransactions(searchItem);
  }, [transeAction]);

  if (!transeAction.length)
    return <h4 className="addTransaction">add some transaction !</h4>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for ..."
        className="search"
      />
      {filteredTnx.length ? (
        filteredTnx.map((t) => (
          <div
            key={t.id}
            className="transaction"
            style={{ borderRight: t.type === "expense" && "4px solid red" }}
          >
            <span>{t.desc}</span>
            <span>$ {t.amount}</span>
          </div>
        ))
      ) : (
        <h4 className="addTransaction">no item matchs !</h4>
      )}
    </section>
  );
};

export default TransActionComponent;
