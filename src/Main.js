import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

const getTodayDate=function(){
  const today = new Date();
  return today.toISOString().split('T')[0]; // 'YYYY-MM-DD'
}

const InitializeTimes =()=>{
return window.fetchAPI(getTodayDate);
}

const updateTimes = (state, action) => {
  if (!action?.payload) return state;
  return window.fetchAPI(action.payload); // returns array of times
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], InitializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSuccess = window.submitAPI(formData);
    if (isSuccess) {
      navigate("/bookingconfirmation", { state: { success: "You have successfully reserved a table!! Enjoy your meal." }, });
    }
  };

  return (
    <main className="form-section">
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch}  submitForm={submitForm}/>
    </main>
  );
}

export default Main;
export { InitializeTimes, updateTimes };