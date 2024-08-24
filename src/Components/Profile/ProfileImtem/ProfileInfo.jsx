import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";
export default function ProfileInfo() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    avatar:
      "https://th.bing.com/th/id/OIP.MaDrjtmPQGzKiLHrHEPfFAHaHa?rs=1&pid=ImgDetMain",
    fullName: "Hồ Minh Quân",
    username: "hmquandec05",
    followers: 100,
    following: 50,
    Bio: "",
  });
  const [tempAvatar, setTempAvatar] = useState(null);

  const handleSave = () => {
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      fullName: userInfo.fullName,
      Bio: userInfo.Bio,
      avatar: tempAvatar || prevInfo.avatar,
    }));
    setShowEditModal(false);
    setTempAvatar(null);
  };

  return (
    <>
      <div className="d-flex flex-column flex-sm-row gap-4">
        <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
          <img
            src={userInfo.avatar}
            alt="Avatar"
            className="rounded-circle mb-3 shadow-4"
            style={{ width: "140px", height: "140px" }}
          />
          <p
            className="mb-2 badge d-flex justify-content-center align-items-center"
            style={{
              width: "90px",
              height: "36px",
              borderRadius: "50px",
              fontSize: "18px",
              backgroundColor: "#046CB8",
              cursor: "pointer",
            }}
          >
            Tripper
          </p>
          <a
            href="/upgradeUser"
            style={{ color: "#046CB8", textDecoration: "underline" }}
          >
            Nâng cấp tài khoản
            <i className="bi bi-arrow-right ms-1"></i>
          </a>
        </div>

        <div className="d-flex flex-column align-items-start gap-2 mx-auto flex-grow-1">
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-sm-start align-items-center w-100">
            <h3 className="mb-1">
              <strong>{userInfo.fullName}</strong>
            </h3>
            <div className="d-flex gap-4 align-items-center justify-content-center">
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
                onClick={() => setShowEditModal(true)}
              >
                <i className="bi bi-pencil-square  mr-2"></i>
                Chỉnh sửa
              </button>
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
              >
                <i className="bi bi-share mr-2"></i>
                Chia sẻ
              </button>
            </div>
          </div>
          <div className="d-flex align-items-center gap-4">
            <h5 className="mb-2 text-muted">
              <strong>{"@" + userInfo.username}</strong>
            </h5>
          </div>
          <div className="d-flex align-items-center gap-2 gap-sm-4 mb-1">
            <span>
              <strong className="mr-1">{userInfo.followers}</strong> Followers
            </span>
            <span>
              <strong className="mr-1">{userInfo.following}</strong> Following
            </span>
          </div>

          <p className=" mb-0">
            <i>{userInfo.Bio}</i>
          </p>
        </div>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin cá nhân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <div>
              <label>Avatar</label>
              <label
                htmlFor="avatar-upload"
                className=" btn btn-secondary"
                style={{ marginLeft: "10px", cursor: "pointer" }}
              >
                Chọn ảnh
              </label>
            </div>
            <input
              type="file"
              id="avatar-upload"
              className="d-none"
              accept="image/*" // Chỉ chấp nhận các loại tập tin hình ảnh
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  if (file.type.startsWith("image/")) {
                    setTempAvatar(URL.createObjectURL(file));
                  } else {
                    alert("Vui lòng chọn một tập tin hình ảnh.");
                  }
                }
              }}
            />
            <img
              src={tempAvatar || userInfo.avatar}
              alt="Avatar"
              className="img-thumbnail mt-3"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="form-group">
            <label>Họ tên</label>
            <input
              type="text"
              className="form-control"
              value={userInfo.fullName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, fullName: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Tiểu sử</label>
            <textarea
              className="form-control"
              value={userInfo.Bio}
              onChange={(e) =>
                setUserInfo({ ...userInfo, Bio: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Hủy
          </Button>
          <Button
            style={{
              backgroundColor: "#046CB8",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.7)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            onClick={() => handleSave(userInfo)}
          >
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
