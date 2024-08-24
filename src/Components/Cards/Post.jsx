import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";
import {
  addComment as addCommentToDB,
  likePost,
  unlikePost,
} from "../../lib/controller";

const Card = styled.div`
  max-width: 740px;
  margin: 20px auto;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const PostImage = styled.img`
  width: 700px;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #65676b;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const CommentInput = styled.input`
  border: none;
  border-radius: 20px;
  background-color: #f0f2f5;
  padding: 8px 12px;
  font-size: 0.9rem;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1877f2;
  }
`;

const Post = ({ post }) => {
  const [likeCount, setLikeCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentList, setCommentList] = useState(post.comments);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await unlikePost(post.id); // Cập nhật Firebase
        setLikeCount(likeCount - 1);
      } else {
        await likePost(post.id); // Cập nhật Firebase
        setLikeCount(likeCount + 1);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error updating like: ", error);
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = async (text) => {
    const newComment = {
      author: "Current User", // Thay thế bằng thông tin người dùng thực tế
      text,
      likes: 0,
    };

    try {
      await addCommentToDB(post.id, newComment); // Cập nhật Firebase
      setCommentList([...commentList, newComment]);
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  return (
    <Card className="card">
      <div className="card-body p-3">
        <div className="d-flex align-items-center mb-2">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h6 className="card-title mb-0 fw-bold">{post.author.name}</h6>
            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
              {post.time}
            </small>
          </div>
        </div>
        <p className="card-text mb-2" style={{ fontSize: "0.9rem" }}>
          {post.content}
        </p>
      </div>
      <PostImage src={post.imageUrl} alt="Post" className="img-fluid" />
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className="text-muted" style={{ fontSize: "0.8rem" }}>
            <i className="fas fa-heart text-danger me-1"></i>
            {likeCount}
          </small>
          <div>
            <small className="text-muted me-2" style={{ fontSize: "0.8rem" }}>
              {commentList.length} bình luận
            </small>
            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
              {post.shares} lượt chia sẻ
            </small>
          </div>
        </div>
        <hr className="my-2" />
        <div className="d-flex justify-content-between">
          <ActionButton className="btn flex-grow-1" onClick={handleLike}>
            <i
              className={`${isLiked ? "fas" : "far"} fa-heart me-2 ${
                isLiked ? "text-danger" : ""
              }`}
            ></i>{" "}
            Thích
          </ActionButton>
          <ActionButton className="btn flex-grow-1" onClick={toggleComments}>
            <i className="far fa-comment-alt me-2"></i> Bình luận
          </ActionButton>
          <ActionButton className="btn flex-grow-1">
            <i className="far fa-share-square me-2"></i> Chia sẻ
          </ActionButton>
        </div>
        {showComments && (
          <div className="mt-3">
            {commentList.map((comment, index) => (
              <div key={index} className="mb-2">
                <strong>{comment.author}</strong>: {comment.text}
              </div>
            ))}
            <CommentInput
              type="text"
              placeholder="Viết bình luận..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Post;
