import React, { useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  const { total, income, expense } = props.expenses.reduce(
    (acc, curr) => {
      if (curr.amount >= 0) {
        acc.income += curr.amount;
        acc.total += curr.amount;
      } else {
        acc.expense += Math.abs(curr.amount);
        acc.total += curr.amount;
      }
      return acc;
    },
    { total: 0, income: 0, expense: 0 }
  );


  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
