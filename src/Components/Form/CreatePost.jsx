import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { uploadPost } from "../../lib/controller";

const PostCard = styled.div`
  margin-top: 20px;
  min-width: 100%;
  height: 90px;
  background-color: #f0f2f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    background-color: #e4e6e9;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const PostPrompt = styled.span`
  color: #65676b;
  font-size: 17px;
`;

const StyledModal = styled.div`
  .modal-content {
    border-radius: 8px;
  }
`;

const SubmitButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-weight: bold;
  &:hover {
    background-color: #166fe5;
  }
`;

const PostForm = ({ author }) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // test upload post
  let authorObj = {
    name: "Nhat Nguyen",
    avatar:
      "https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/IMG_4671%202.JPG?alt=media&token=03a3180d-a4e0-4cb7-9117-1b24da600fab",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() && !imageFile) {
      alert("Vui lòng nhập nội dung hoặc chọn ảnh để đăng bài.");
      return;
    }
    setIsUploading(true);
    try {
      await uploadPost(content, imageFile, authorObj);
      setContent("");
      setImageFile(null);
      handleClose();
    } catch (error) {
      console.error("Lỗi khi đăng bài:", error);
      alert("Có lỗi xảy ra khi đăng bài. Vui lòng thử lại.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <>
      <PostCard onClick={handleShow}>
        <ProfileImage src={author.avatar} alt="Profile" />
        <PostPrompt>{author.name} muốn chia sẻ điều gì thế?</PostPrompt>
      </PostCard>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <StyledModal className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tạo bài viết</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Bạn đang nghĩ gì?"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faImage} /> Thêm ảnh
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={handleImageChange}
                      accept="image/*"
                    />
                  </div>
                  <SubmitButton
                    type="submit"
                    className="btn"
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      "Đang đăng..."
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} /> Đăng
                      </>
                    )}
                  </SubmitButton>
                </form>
              </div>
            </StyledModal>
          </div>
        </div>
      )}
      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default PostForm;
