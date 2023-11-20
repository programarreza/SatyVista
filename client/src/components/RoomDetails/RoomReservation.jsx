/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import DatePicker from "./DatePicker";

const RoomReservation = ({ room }) => {
	// price calculation
	// const totalDays = formatDistance(new Date(room?.to), new Date(room?.from))
	const todate = room?.to;
	console.log(todate);
  return (
    <div className="rounded-xl border-2 border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4 text-2xl font-semibold">
        $ {room?.price}
        <p className=" text-base text-[#7a7878] ">night</p>
      </div>
      <hr />
      <div className="flex justify-center">
        <DatePicker />
      </div>
      <hr />
      <div className="px-4">
        <Button label={"Reserve"} />
      </div>
      <br />
      <div className="p-4 flex justify-between items-center font-semibold text-lg">
        <p>Total </p>
       <p>$ {room?.price}</p>
      </div>
    </div>
  );
};

export default RoomReservation;
