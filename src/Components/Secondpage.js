import React from "react";

export default function Secondpage() {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        <div className="col-md-12">
          <div className="row mt-5 justify-content-center align-items-center g-0 ">
            <div className="col-2" />
            <div className="col-4">
              <img
                className="big-left-photo"
                src="https://cdn.ikea.com.tr/urunler/2000_2000/PE737754.jpg"
                alt="Image-1"
              />
            </div>
            <div className="col-4">
              <img
                className="second-photo"
                src="https://cdn.ikea.com.tr/urunler/2000_2000/PE737754.jpg"
                alt="Image-2"
              />
              <img
                className="third-photo"
                src="https://cdn.ikea.com.tr/urunler/2000_2000/PE737754.jpg"
                alt="Image-3"
              />
            </div>
            <div className="col-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
