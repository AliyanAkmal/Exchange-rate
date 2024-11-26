import "./App.css";
import InputBox from "./components/inputBoc";

function App() {
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
      <div
        style={{
          width: "400px",
          backgroundColor: "#4E5586",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          // color: "white",
          gap: "15px",
          textTransform: "capitalize",
          position: "relative",
        }}
      >
        <InputBox from="from" />

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
        >
          Swap
        </button>

        <InputBox from="To" />
        <button
          style={{
            backgroundColor: "#215DEA",
            border: "none",
            color: "white",
            width: "320px",
            padding: "15px 20px",
            borderRadius: "5px",
          }}
        >
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
