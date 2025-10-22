import React from "react";
import Spinner from "../atoms/Spinner";
import Text from "../atoms/Text";

export default function LoadingMessage() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh",
    }}>
      <Spinner />
      <Text content="Cargando pokemons..." className="loading-text" />
    </div>
  );
}
