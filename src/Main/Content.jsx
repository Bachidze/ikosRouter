import React from "react";
import "./Content.css";
import Card from "../Card/Card";

const Content = () => {
  return (
    <main>
      <Card
        image="./Bottles.jfif"
        header="ბოთლები"
        description="ბოთლები, რომლებიც თავისით ივსება ნებისმიერ სითხით"
      />
      <Card
        image="Sneakers.jfif"
        header="ბოტასები"
        description="ბოტასები, რომლებიც თავისით დარბის"
      />
      <Card
        image="./Soap.jfif"
        header="საპონი"
        description="საპონი, რომელიც აცლის 100% ჭუჭყს"
      />
    </main>
  );
};

export default Content;
