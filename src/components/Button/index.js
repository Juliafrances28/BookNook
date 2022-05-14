import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props["data-value"]}`}
      data-value={props["data-value"]}
    >
      <a href="https://www.amazon.com/Book-Meant-Be-Novel/dp/1368053386/ref=sr_1_2_sspa?crid=YBRGVLOXO1JK&keywords=by+the+book+jasmine+guillory&qid=1652481466&s=books&sprefix=by+the+%2Cstripbooks%2C72&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRDRKS0FTV1E1UDJNJmVuY3J5cHRlZElkPUEwMjE0OTY2OFFJNzQ0V0I2TVhSJmVuY3J5cHRlZEFkSWQ9QTAxNDUyNDkzRTFRUUs4QUpDWlomd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl">
        Amazon.com
      </a>
    </button>
  );
}

export default Button;
