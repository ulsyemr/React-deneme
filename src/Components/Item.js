import React from "react";

export default function Item() {
  return (
    <div className="container-fluid">
      <div className="row mt-5 g-0">
        <div className="col-12">
          <div className="Item-background">
            <div className="row g-0 text-center">
              <div className="col-4" />
              <div className="col-4">
                <div className="paragraphs mt-5">
                  <h1>Exclusive Collection</h1>
                  <h2>UPTO %50 OFF</h2>
                  <p>Lorem ipsum dolor sit.</p>
                  <button type="button" className="btn btn-primary mybtn">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="col-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
