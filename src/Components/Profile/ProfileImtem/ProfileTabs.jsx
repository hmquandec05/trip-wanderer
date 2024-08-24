import React from "react";

export default function ProfileTabs({ activeTab, onTabChange }) {
  const handleTabClick = (tab) => {
    onTabChange(tab);
  };

  return (
    <div className="d-flex justify-content-center text-uppercase fw-bold">
      <div
        className="d-flex align-items-center px-3 py-2 mx-2 "
        style={{
          cursor: "pointer",
          borderBottom: activeTab === "posts" ? "3px solid #046CB8" : "none",
          color: activeTab === "posts" ? "#046CB8" : "#6c757d",
        }}
        onClick={() => handleTabClick("posts")}
      >
        <span className="d-none d-sm-block" style={{ fontSize: 14 }}>
          <i className="bi bi-grid-3x3-gap-fill mr-1"></i>
          Bài đăng
        </span>
      </div>

      <div
        className="d-flex align-items-center px-3 py-2 mx-2 "
        style={{
          cursor: "pointer",
          borderBottom: activeTab === "trips" ? "3px solid #046CB8" : "none",
          color: activeTab === "trips" ? "#046CB8" : "#6c757d",
        }}
        onClick={() => handleTabClick("trips")}
      >
        <span className="d-none d-sm-block" style={{ fontSize: 14 }}>
          <i className="bi bi-compass-fill mr-1"></i>
          Lịch trình
        </span>
      </div>

      <div
        className="d-flex align-items-center px-3 py-2 mx-2"
        style={{
          cursor: "pointer",
          borderBottom: activeTab === "saved" ? "3px solid #046CB8" : "none",
          color: activeTab === "saved" ? "#046CB8" : "#6c757d",
        }}
        onClick={() => handleTabClick("saved")}
      >
        <span className="d-none d-sm-block" style={{ fontSize: 14 }}>
          <i className="bi bi-bookmark-fill mr-1"></i>
          Đã lưu
        </span>
      </div>
    </div>
  );
}
