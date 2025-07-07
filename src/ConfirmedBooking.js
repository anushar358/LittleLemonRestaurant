import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const location = useLocation();
    const success = location.state?.success||"Reservation Confirmed";
    return (<>
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }} >
            {success}</p>
    </>)

}
export default ConfirmedBooking;