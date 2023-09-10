import React from 'react';

const LoadingSkeleton = () => {
  return (
    <section className="col-md-4" style={{ marginTop: 40 }}>
      <div
        className="border"
        style={{
          borderRadius: 10,
          width: "100%",
          padding: "20px 15px 20px 15px",
          backgroundColor: "white"
        }}
      >
        <div className="row">
          <div className="col-md-4" />
          <div
            className="col-md-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="loading-skeleton-profile-photo" />
            </div>
          </div>
        </div>
        <div className="col-md-12" style={{ marginTop: 45, display: "flex", justifyContent: "center" }}>
          <div className="loading-skeleton-name" />
        </div>
      </div>
    </section>
  );
};

export default LoadingSkeleton;
