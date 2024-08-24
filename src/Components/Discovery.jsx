import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "./Layout/Layout";
import TripCard from "./Cards/TripCard";
import { getTrips } from "../lib/controller";
import RecommendPopup from "./Cards/RecommendPopup";
import SearchComponent from "./Form/SearchComponent";

const Main = styled.main`
  padding: 20px;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Banner = styled.div`
  width: 100%;
  height: 285px;
  display: flex;
  color: #fff;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/tripwanderer-f58d6.appspot.com/o/wallpaperflare.com_wallpaper%20(1).jpg?alt=media&token=39d0f1b6-83e2-4df1-a55e-5e2226ff80e6");
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 612px;
  max-height: 180px;
  margin: 0 auto;
  border-radius: 20px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px;

  h1 {
    color: #046cb8;
    font-weight: bold;
  }

  p {
    color: #1a1a1a;
    font-weight: bold;
  }
`;

const removeVietnameseTones = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
`;

const PageButton = styled.button`
  background: ${({ active }) => (active ? "#046cb8" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#046cb8")};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: ${({ active }) => (active ? "#fff" : "#046cb8")};
    color: ${({ active }) => (active ? "#046cb8" : "#fff")};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Ellipsis = styled.span`
  font-size: 16px;
  color: #046cb8
  margin: 0 10px;
`;

const Discovery = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 20;
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsData = await getTrips();
        setTrips(tripsData);
        setFilteredTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const handleSearch = (searchTerm) => {
    const normalizedSearchTerm = removeVietnameseTones(
      searchTerm.toLowerCase()
    );

    const results = trips.filter((trip) =>
      removeVietnameseTones(trip.local.toLowerCase()).includes(
        normalizedSearchTerm
      )
    );

    setFilteredTrips(results);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredTrips.length / tripsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false); 
  };

  const renderPaginationButtons = () => {
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        buttons.push(
          <PageButton
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </PageButton>
        );
      } else if (
        (i === 2 && currentPage > 3) ||
        (i === totalPages - 1 && currentPage < totalPages - 2)
      ) {
        buttons.push(<Ellipsis key={`ellipsis-${i}`}>...</Ellipsis>);
      }
    }
    return buttons;
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <Layout>
      <Banner>
        <TitleContainer>
          <h1>Xin chào!</h1>
          <p>Khám phá những chuyến đi tuyệt vời cùng TripWanderer</p>
          <SearchComponent onSearch={handleSearch} />
        </TitleContainer>
      </Banner>

      <Main>
        <ImageGrid>
          {filteredTrips.length === 0 ? (
            <p>Không tìm thấy kết quả phù hợp.</p>
          ) : (
            filteredTrips
              .slice(
                (currentPage - 1) * tripsPerPage,
                currentPage * tripsPerPage
              )
              .map((trip) => <TripCard key={trip.id} trip={trip} />)
          )}
        </ImageGrid>

        <PaginationContainer>
          <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt;
          </PageButton>
          {renderPaginationButtons()}
          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </PageButton>
        </PaginationContainer>
      </Main>

      <RecommendPopup isVisible={isPopupVisible} onClose={handleClosePopup} />
    </Layout>
  );
};

export default Discovery;
