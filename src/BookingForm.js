import { useState } from "react";
//import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, updateTimes }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOcassion] = useState("");
    //const [success, setSuccess] = useState("");
    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //setSuccess("You have successfully reserved a table!! Enjoy your meal.");
        setDate("");
        setTime("");
        setGuests("");
        setOcassion("");
        navigate("/bookingconfirmation", {state : {success:"You have successfully reserved a table!! Enjoy your meal."},});

    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate);
    };

    return (
        <>
            <form
                className="booking-form"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="res_date">Choose Date</label>
                    <input
                        type="date"
                        id="res_date"
                        value={date}
                        onChange={handleDateChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="res_time">Choose Time</label>
                    <select
                        id="res_time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="">--Select a time--</option>
                        {availableTimes && availableTimes.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => setOcassion(e.target.value)}
                    >
                        <option value="">--Select--</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Make Your reservation</button>
                </div>
            </form>
        </>
    );
}

export default BookingForm;
