import React from "react";
import { Banner, Categories, Header } from "src/components";
import Container from "src/layout/container";

function App() {
  return (
    <Container>
      <Header />
      <Banner />
      <Categories />
    </Container>
  );
}

export default App;
