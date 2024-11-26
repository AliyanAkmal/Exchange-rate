import React from "react";

const InputBox = ({ from }) => {
  return (
    <div style={styles.divOne}>
      <div style={styles.innerDivOne}>
        <label style={styles.label}>{from}</label>
        <label style={styles.label}>Currency Type</label>
      </div>
      <div style={styles.innerDivTwo}>
        <input style={styles.input} value="" type="number" placeholder="0" />
        <select name="" id="" value="usd">
          <option value="usd">usd</option>
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
