import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const id = useId();

  return (
    <div style={styles.divOne}>
      <div style={styles.innerDivOne}>
        <label htmlFor={id} style={styles.label}>
          {label}
        </label>
        <label htmlFor={id} style={styles.label}>
          Currency Type
        </label>
      </div>
      <div style={styles.innerDivTwo}>
        <input
          id={id}
          style={styles.input}
          value={amount}
          type="number"
          placeholder="0"
          // disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <select
          name=""
          id=""
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
const styles = {
  divOne: {
    width: "300px",
    padding: "15px",
    backgroundColor: "white ",
    borderRadius: "10px",
  },
  innerDivOne: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  innerDivTwo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  label: {
    fontweight: "bold",
    fontSize: "20px",
  },
  input: {
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "18px",
  },
};
