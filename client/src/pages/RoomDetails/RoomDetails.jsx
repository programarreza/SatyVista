import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Shared/Loader";
const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>

      <div className=" max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="">
          <Header room={room} />
        </div>

        <div className="grid md:grid-cols-7 md:gap-10 mt-12">
          {/* Room info */}
          <RoomInfo room={room} />

          {/* room reservation */}
          <div className="col-span-3 order-first md:order-last mx-auto">
            <RoomReservation room={room} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
