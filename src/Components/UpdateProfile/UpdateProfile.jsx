import React, { useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar.jpg";
import Vector from "./Vector.jpg";

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledProfile = styled.div`
  width: 80%;
  height: 70%;
  float: right;
  display: flex;
  flex-direction: column;
`;

const StyledAvatar = styled.div`
  width: 40%;
  height: 35%;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 20%;
    height: 50%;
  }
  button {
    margin-right: 10px;
    border-radius: 20px;
    background-color: #046cb8;
    border: none;
    color: white;
  }

  a {
    color: #046cb8;
    text-decoration: none;
  }

  .vector {
    width: 20px;
    height: 10px;
  }
`;

const StyledInfoProfile = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledForm = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const StyledConfirmButtom = styled.div`
  width: 50px;
  margin-top: 100px;
  margin-right: 20px;

  button {
    width: 100px;
    height: 40px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: #046cb8;
    color: white;
    cursor: pointer;
  }
`;

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    nickName: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    address: "",
    favoriteTravel: "",
    interests: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    // Kiểm tra tên đầy đủ
    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName =
        "Full Name is required and should be at least 3 characters.";
    }

    // Kiểm tra Nick Name
    if (!formData.nickName || formData.nickName.length < 3) {
      newErrors.nickName =
        "Nick Name is required and should be at least 3 characters.";
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Kiểm tra số điện thoại (10-11 chữ số)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Phone number must be a valid 10-11 digit number.";
    }

    // Kiểm tra ngày sinh
    const today = new Date();
    const birthday = new Date(formData.birthday);
    if (!formData.birthday || birthday > today) {
      newErrors.birthday = "Birthday must be a valid date in the past.";
    }

    // Kiểm tra địa chỉ (ít nhất 5 ký tự)
    if (!formData.address || formData.address.length < 5) {
      newErrors.address =
        "Address is required and should be at least 5 characters.";
    }

    // Kiểm tra Loại hình du lịch yêu thích (không được để trống)
    if (
      !formData.favoriteTravelType ||
      formData.favoriteTravelType.length < 3
    ) {
      newErrors.favoriteTravelType = "Favorite Travel Type is required.";
    }

    // Kiểm tra Chủ đề quan tâm (không được để trống)
    if (!formData.interests || formData.interests.length < 3) {
      newErrors.interests = "Interests is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form data is valid!");
      console.log(formData);
    }
  };

  return (
    <StyledContainer>
      <StyledProfile>
        <StyledAvatar>
          <img src={Avatar} alt="Avatar" />
          <div>
            <button>Tripper</button>
            <a href="#">Chỉnh sửa ảnh</a>
          </div>
          <a href="#">
            Nâng cấp tài khoản
            <img className="vector" src={Vector} alt="Vector Icon" />
          </a>
        </StyledAvatar>
        <form onSubmit={handleSubmit}>
          <StyledInfoProfile>
            <StyledForm>
              <label>Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your Full Name"
              />
              {<div style={{ color: "red" }}>{errors.fullName}</div>}
            </StyledForm>
            <StyledForm>
              <label>Nick Name</label>
              <input
                name="nickName"
                value={formData.nickName}
                onChange={handleInputChange}
                placeholder="Your Nick Name"
              />
            </StyledForm>
            <StyledForm>
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
              />
              {<div style={{ color: "red" }}>{errors.email}</div>}
            </StyledForm>
            <StyledForm>
              <label>Phone Number</label>
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
              />
              {<div style={{ color: "red" }}>{errors.phoneNumber}</div>}
            </StyledForm>
            <StyledForm>
              <label>Birthday</label>
              <input
                name="birthday"
                value={formData.birthday}
                onChange={handleInputChange}
                placeholder="Your Birthday"
              />
              {<div style={{ color: "red" }}>{errors.birthday}</div>}
            </StyledForm>
            <StyledForm>
              <label>Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Your Address"
              />
              {<div style={{ color: "red" }}>{errors.address}</div>}
            </StyledForm>
            <StyledForm>
              <label>Loại hình du lịch yêu thích</label>
              <input
                name="favoriteTravel"
                value={formData.favoriteTravel}
                onChange={handleInputChange}
                placeholder="Loại hình du lịch yêu thích"
              />
              {<div style={{ color: "red" }}>{errors.favoriteTravelType}</div>}
            </StyledForm>
            <StyledForm>
              <label>Chủ đề quan tâm</label>
              <input
                name="interests"
                value={formData.interests}
                placeholder="Chủ đề quan tâm"
              />
              {<div style={{ color: "red" }}>{errors.interests}</div>}
            </StyledForm>
          </StyledInfoProfile>
          <StyledConfirmButtom>
            <button type="submit">Lưu</button>
          </StyledConfirmButtom>
        </form>
      </StyledProfile>
    </StyledContainer>
  );
};

export default UpdateProfile;
