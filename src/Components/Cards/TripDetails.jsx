import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Gallery from "./Gallery";

const TripDetailContainer = styled.div`
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
`;

const TripHeader = styled.div`
  margin-top: 20px;
`;

const TripTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TripMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const TripRating = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
`;

const TripActions = styled.div`
  button {
    background: none;
    border: none;
    color: #6c757d;
    margin-left: 10px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UpdateInfo = styled.div`
  font-size: 0.8rem;
  color: #6c757d;
  text-align: right; /* Align to the right */
`;

const UserContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-right: 10px;
  max-width: 66%;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 2px;
`;

const UserRole = styled.span`
  font-size: 0.75rem;
  color: #666;
`;

const UserActions = styled.div`
  padding-right: 100px;
  display: flex;
  gap: 10px;
`;

const UserActionButton = styled.button`
  background-color: #e0e0e0;
  color: ${(props) => (props.primary ? "black" : "#666")};
  border: 2px solid #e0e0e0;
  background-color: #e0e0e0;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 120px;
  height: 40px;
  &:hover {
    background-color: #d0d0d0;
  }
`;
const PriceContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 15px;
  width: 35%;
  text-align: start;
`;
const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #046cb8;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;

  &:hover {
    background-color: #00518c;
  }
`;

const SocialActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  gap: 0.5em;
  padding: 0 1.5em;
  border-left: 2px solid #d0d0d0;
`;

const SocialButton = styled.button`
  background-color: ${(props) => (props.isLike ? "#046cb8" : "#fff")};
  color: ${(props) => (props.isLike ? "#e1e1e1" : "#046cb8")};
  border: 2px solid #046cb8;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #046cb8;
    color: #fff;
  }
`;

const TripSection = styled.div`
  margin-bottom: 20px;
  margin-top: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 15px;
  border-left: #046cb8 solid 4px;
`;

const LocalList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: space-around;
  margin-top: 20px;
`;
const LocalItem = styled.h4`
  width: 120px;
  height: 40px;
  border-radius: 50px;
  background-color: #e1e1e1;
  display: flex;
  align-items: center;
  padding-top: 5px;
  justify-content: space-around;
  font-size: 2px;
  cursor: default;
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:hover {
    background-color: #046cb8;
    color: #e1e1e1;
  }
`;

const Map = styled.div`
  width: 1200px;
  height: 600px;
  background-color: #666;
  border-radius: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .h1 {
    margin: auto;
  }
`;

const TimeLine = styled.div`
  display: flex;
  margin-top: 20px;
  .ActivitiesContainer {
    display: flex;
  }
  .ActivitiesContainer > *:not(:first-child) {
    margin-left: 20px;
  }
  .ActivitiesContainer:not(:first-child) {
    margin-left: 20px;
  }
`;
const TimeLineItem = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #d0d0d0;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #d9e8f7;
  }
`;

const Thumnails = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px
  overflow: hidden;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Title = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #000;
`;

const Subtitle = styled.div`
  font-size: 8px;
  color: #555;
`;

const Rating = styled.div`
  margin-bottom: 20px;
  margin-top: 50px;
  display: flex;
  p {
    align-items: center;
    color: #046cb8;
    font-weight: bold;
    margin-top: 3px;
    padding-left: 20px;
  }
`;

const TripComponent = ({ trip }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLike, setIsLike] = useState(false);
  return (
    <TripDetailContainer>
      <TripHeader>
        <TripTitle>{trip.title}</TripTitle>
        <TripMeta>
          <TripRating>
            <i className="fa-solid fa-face-smile"></i> {trip.rating.score}% (
            {trip.rating.count} đánh giá){"    "}
            <i className="fa-solid fa-location-dot"></i> {"  "}
            {trip.local}
          </TripRating>
          <TripActions>
            <button>
              <i class="fa-solid fa-heart"></i> Yêu thích
            </button>
            <button>
              <i class="fa-solid fa-share"></i> Chia sẻ
            </button>
          </TripActions>
        </TripMeta>
      </TripHeader>
      <Gallery images={trip.thumbnail} />
      <InfoContainer>
        <UserContainer>
          <UserInfo>
            <UserAvatar src={trip.author.avatar} alt="Bich Ngoc" />
            <UserDetails>
              <UserName>{trip.author.name}</UserName>
              <UserRole>Trip maker</UserRole>
            </UserDetails>
          </UserInfo>
          <UserActions>
            <UserActionButton onClick={() => setIsFollowed(!isFollowed)}>
              {isFollowed ? "Bỏ theo dõi" : "Theo dõi"}
            </UserActionButton>
            <UserActionButton>Nhắn tin</UserActionButton>
          </UserActions>

          <SocialActions>
            <SocialButton isLike={isLike} onClick={() => setIsLike(!isLike)}>
              {isLike ? "Bỏ yêu thích" : "Yêu thích"}
            </SocialButton>

            <SocialButton>Chia sẻ</SocialButton>
          </SocialActions>
        </UserContainer>

        <PriceContainer>
          <Price>{trip.price} VNĐ</Price>
          <BuyButton>Mua ngay</BuyButton>
        </PriceContainer>
      </InfoContainer>

      <TripSection>
        <SectionTitle>Tóm tắt</SectionTitle>
        <ul>
          {trip.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </TripSection>

      <TripSection>
        <SectionTitle>Giới thiệu trip</SectionTitle>
        <p>{trip.introduction}</p>
      </TripSection>

      <TripSection>
        <SectionTitle>Thông tin hành trình</SectionTitle>
        <LocalList>
          {trip.itinerary.map((day, index) => (
            <LocalItem key={index}>
              <h4>Ngày {day.day}</h4>
            </LocalItem>
          ))}
        </LocalList>
        <Map>
          <h1>Sau này sẽ tích hợp bản đồ ở đây</h1>
        </Map>
      </TripSection>

      <TripSection>
        <SectionTitle>Chi tiết lịch trình</SectionTitle>
        <TimeLine>
          {trip.itinerary.map((dayPlan, index) => (
            <div className="ActivitiesContainer" key={index}>
              {dayPlan.activities.map((activity, idx) => (
                <TimeLineItem key={idx}>
                  <Thumnails
                    // src="https://via.placeholder.com/50"
                    src={trip.thumbnail[0]}
                    alt="thumnails"
                  />
                  <TextContainer>
                    <Title>Day {dayPlan.day}</Title>
                    <Subtitle>{activity.description}</Subtitle>
                    <Subtitle>{`${activity.time} - Day ${dayPlan.day}`}</Subtitle>
                  </TextContainer>
                </TimeLineItem>
              ))}
            </div>
          ))}
        </TimeLine>
      </TripSection>

      <Rating>
        <SectionTitle>Đánh giá</SectionTitle>
        <TripRating>
          <p>
            <i className="fa-solid fa-face-smile"></i> {trip.rating.score}% (
            {trip.rating.count} đánh giá)
          </p>
        </TripRating>
      </Rating>

      <TripSection>
        <SectionTitle>Những điều cần lưu ý</SectionTitle>
      </TripSection>

      <TripSection>
        <SectionTitle>Lịch trình liên quan</SectionTitle>
      </TripSection>
    </TripDetailContainer>
  );
};

export default TripComponent;
