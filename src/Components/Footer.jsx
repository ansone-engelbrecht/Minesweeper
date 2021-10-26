import React from "react";

function Footer() {

  const currentDate = new Date();
  const year = currentDate.getFullYear();

    return(
        <div>
          <p>Created by Ansone {year}</p>
        </div>
    );
}

export default Footer;