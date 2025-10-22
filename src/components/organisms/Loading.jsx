import React from "react";
import LoadingMessage from "../molecules/LoadingMessage";

export default function LoadingScreen() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F7F7F7"
    }}>
      <LoadingMessage />
    </div>
  );
}
