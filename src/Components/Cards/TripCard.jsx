import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardLink = styled(Link)`
  text-decoration: none;
  with: 176px;
  height: 240px
  color: inherit;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    color: inherit;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 5px;
`;

const Title = styled.h5`
  margin-bottom: 10px;
  font-size: 12px;
`;

const Infor = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #046cb8;
  color: #fff;
  margin-bottom: 5px;
  height: 30px;
  width: auto;
  font-size: 11px;
  padding: 0 5px;
  border-radius: 5px;
`;

const Icon = styled.div`
  width: 39px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;

  i {
    font-size: 12px;
    color: #666;
    margin-right: 3px;
  }

  p {
    color: #666;
    font-size: 12px;
    line-height: 1;
    margin: 0;
  }
`;
const Author = styled.div`
  display: flex;
  width: 76px;
  height: 16px;
  align-items: center;
  justify-content: start;
  span {
    font-size: 12px;
  }
`;

const Avatar = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 5px;
`;

const FreeTag = styled.span`
  color: #046cb8;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: auto;
`;

const TripInFor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional: to add some shadow */
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  opacity: 0;
  transform: translateY(100%);
  border-radius: 10px 10px 0 0;
  transition: transform 0.7s ease, opacity 0.2s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);

    i {
      margin-right: 10px;
    }
  }
`;
const TripCard = ({ trip }) => {
  const truncatedTitle =
    trip.title.length > 50 ? trip.title.substring(0, 40) + "..." : trip.title;

  const getVehicleIcon = () => {
    switch (trip.vehicle) {
      case "xe máy":
        return <i class="fa-solid fa-motorcycle"></i>;
      case "xe đạp":
        return <i class="fa-solid fa-bicycle"></i>;
      case "ô tô":
        return <i class="fa-solid fa-car"></i>;
      case "đi bộ":
        return <i class="fa-solid fa-person-walking"></i>;
      default:
        return null;
    }
  };
  return (
    <CardLink to={`/tripdetails/${trip.id}`} className="card">
      <Card>
        <Image
          src={trip.thumbnail[0]}
          className="card-img-top"
          alt="Trip location"
        />
        <CardContent>
          <p>{getVehicleIcon()}</p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            {trip.local}
          </p>
        </CardContent>
      </Card>

      <Content className="card-body">
        <Title className="card-title">{truncatedTitle}</Title>
        <Infor>
          <Icon>
            <i class="fas fa-smile  "></i>
            <p>{trip.rating.score}%</p>
          </Icon>
          <InfoItem>{trip.distance}</InfoItem>
          <InfoItem>{trip.time}</InfoItem>
        </Infor>
        <TripInFor>
          <Author>
            <Avatar src={trip.author.avatar} alt={trip.author.name} />
            <span>{trip.author.name}</span>
          </Author>
          {trip.price === 0 && <FreeTag>FREE</FreeTag>}
        </TripInFor>
      </Content>
    </CardLink>
  );
};

export default TripCard;
