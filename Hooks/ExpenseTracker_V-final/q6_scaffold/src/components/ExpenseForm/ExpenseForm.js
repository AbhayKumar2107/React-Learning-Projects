import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense,
  editExpense,
  editingExpense,
  setEditingExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  // Use the useEffect hook here, to check if an expense is to be updated
  // If yes, then autofill the form values with the text and amount of the expense
    useEffect(() => {
    if (editingExpense) {
      expenseTextInput.current.value = editingExpense.text;
      expenseAmountInput.current.value = editingExpense.amount;
    }
  }, [editingExpense]);


  const onSubmitHandler = (e) => {
    e.preventDefault();

    const text = expenseTextInput.current.value;
    const amount = expenseAmountInput.current.value;

    if (parseInt(amount) === 0) return;

    if (editingExpense) {
      editExpense(editingExpense.id, text, amount);
      setEditingExpense(null);
    }
    else {
      addExpense({
        id: new Date().getTime(),
        text,
        amount
      });
    }

    clearInput();
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>
        {editingExpense ? "Edit Transaction" : "Add New Transaction"}
      </h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {editingExpense ? "Edit Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
