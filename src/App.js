import { useEffect, useState } from "react";
import "./App.css";
import InputBox from "./components/inputBoc";
import CurrencyApi from "./hooks/currencyApi";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setconvertedAmount] = useState();

  /////////////////

  const currencyInfo = CurrencyApi(from);
  const options = Object.keys(currencyInfo);

  //////////Still not understanding the concept of this component need to understand deeply/////
  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };
  ////////swap//////////////

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setTimeout(() => setAmount(convertedAmount), 10);
    console.log(amount, convertedAmount);
  };
  /////////////
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <form
        style={{
          width: "400px",
          backgroundColor: "#4E5586",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          gap: "15px",
          textTransform: "capitalize",
          position: "relative",
          color: "#215DEA",
          fontWeight: "600",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />

        <button
          style={{
            backgroundColor: "#215DEA",
            padding: "10px",
            border: "none",
            color: "white",
            borderRadius: "5px",
            position: "absolute",
            top: "40%",
            left: "45%",
          }}
          onClick={swap}
        >
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisabled
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#215DEA",
            border: "none",
            color: "white",
            width: "320px",
            padding: "15px 20px",
            borderRadius: "5px",
          }}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
