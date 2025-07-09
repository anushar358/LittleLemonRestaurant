import { useState } from "react";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOcassion] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        const formData = {
            date,
            time,
            guests,
            occasion,
            name,
            email,
        };
        e.preventDefault();
        setDate("");
        setTime("");
        setGuests("");
        setOcassion("");
        submitForm(formData);
        setName("");
        setEmail("");
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
                aria-label="Table Reservation form"
            >
                <fieldset>
                    <legend>Resrvation Details</legend>
                    <div className="form-group">
                        <label htmlFor="name">Enter Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            aria-required="true"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-required="true" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="res_date">Choose Date</label>
                        <input
                            type="date"
                            id="res_date"
                            value={date}
                            onChange={handleDateChange}
                            required
                            aria-required="true"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="res_time">Choose Time</label>
                        <select
                            id="res_time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            aria-required="true">
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
                            aria-label="Number of guests"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occasion">Occasion</label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOcassion(e.target.value)}
                            required
                            aria-required="true">
                            <option value="">--Select--</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button disabled={!time || !occasion || !date || !name || !email} aria-disabled={!time || !occasion || !date || !name || !email} type="submit">Make Your reservation</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default BookingForm;

