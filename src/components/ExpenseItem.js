import React from "react";
const ExpenseItem = ({
  expense: { charge, amount },
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;