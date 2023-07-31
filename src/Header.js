import { React, useState } from "react";

const Header = () => {
  this.state = {
    items: ["apple", "orange", "olakka", "maanga", "muthiri"],
  };

  return (
    <div>
      <ul>
        {this.state.items.map(function (frt, k) {
          return <li>{frt}</li>;
        })}
      </ul>
    </div>
  );
};

export default Header;
