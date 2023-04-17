import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="download">
      <section className="download">
        <div className="download-content">
          <div className="download-img">
            <img src="	https://team11cricket.com/web/images/qrcode.png" alt="" />
          </div>
          <div>
            <h1>
              Scan QR Code
              <br />
              To Get Link,
            </h1>
            <h2>Download Now!</h2>
          </div>
        </div>
        <div className="download-btn">
          <a href="/">
            <img
              src="https://team11cricket.com/web/images/btn_android.png"
              alt=""
            />
          </a>
          <a href="/">
            <img
              src="https://team11cricket.com/web/images/btn_android.png"
              alt=""
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
