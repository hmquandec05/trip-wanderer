import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fireStore } from "../lib/controller";
import TripComponent from "./Cards/TripDetails";

function Details() {
  const { id } = useParams();

  // Fetch a single document
  const getTrip = doc(fireStore, `trips/${id}`);

  const [isLoading, setIsLoading] = useState(false);
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(getTrip);
      if (docSnap.exists()) {
        const newTripObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setTrip(newTripObj);
      } else {
        console.log("No such document");
      }
      setIsLoading(false);
    };
    fetchHotelData();
  }, [id]);

  console.log(trip);

  if (isLoading) return <div>Đang tải...</div>;

  return (
    <div className="trip-details">
      {trip ? (
        <TripComponent trip={trip} />
      ) : (
        <div>Không có thông tin về chuyến đi</div>
      )}
    </div>
  );
}

export default Details;
