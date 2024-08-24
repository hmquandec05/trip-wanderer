import React from "react";

export default function ProfilePost() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-75"
        style={{ opacity: 1, transition: "all 0.3s ease", zIndex: 1 }}
      >
        <img
          src="https://file1.dangcongsan.vn/data/0/images/2022/06/11/oanhvh/f01d3683bc1f7c41250e.jpg"
          alt="profile post"
          className="img-fluid"
          style={{ objectFit: "cover", width: "260px", height: "195px" }}
        />
        <div className="d-flex justify-content-center align-items-center gap-5">
          <div className="d-flex align-items-center">
            <i class="bi bi-heart"></i>
            <strong className="ms-2">50</strong>
          </div>
          <div className="d-flex align-items-center">
            <i class="bi bi-chat"></i>
            <strong className="ms-2">18</strong>
          </div>
        </div>
      </div>
    </>
  );
}
