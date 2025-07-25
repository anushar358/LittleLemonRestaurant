import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { InitializeTimes, updateTimes } from './Main';


test("Tests if the static text is present",()=>{
    render(<BookingForm availableTimes={["17:00", "18:00"]} updateTimes={() => {}} submitForm={()=>{}}/>)
    const staticText = screen.getByLabelText("Choose Date");
    expect(staticText).toBeInTheDocument();
})


describe('InitializeTimes', () => {
  it('should return times from fetchAPI using today\'s date', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];

    // Mock today's date string
    const today = new Date().toISOString().split('T')[0];

    // Mock global fetchAPI
    window.fetchAPI = jest.fn().mockReturnValue(mockTimes);

    const result = InitializeTimes();

    expect(window.fetchAPI).toHaveBeenCalledWith(today);
    expect(result).toEqual(mockTimes);
  });
});

describe('updateTimes', () => {
  it('should return current state if action payload is missing', () => {
    const initialState = ['18:00', '19:00'];
    const result = updateTimes(initialState, {});
    expect(result).toBe(initialState); // should return same reference
  });

  it('should call fetchAPI with action.payload and return new times', () => {
    const newDate = '2025-07-10';
    const mockTimes = ['17:30', '20:00'];
    window.fetchAPI = jest.fn().mockReturnValue(mockTimes);

    const result = updateTimes([], { payload: newDate });

    expect(window.fetchAPI).toHaveBeenCalledWith(newDate);
    expect(result).toEqual(mockTimes);
  });
});

describe("Booking Form",()=>{
test("disables make reservation button when all of the inputs are not entered",()=>{
 const mockhandleSubmit=jest.fn();
 render(<BookingForm onsubmit={mockhandleSubmit} />);

 const nameInput =screen.getByLabelText(/Enter Name/);
 fireEvent.change(nameInput,{target:{value:"1234"}});

 const emailInput =screen.getByLabelText(/Enter Email/);
 fireEvent.change(emailInput,{target:{value:"1234"}});

 const dateInput =screen.getByLabelText(/Choose Date/);
 fireEvent.change(dateInput,{target:{value:"1234"}});

 const timeInput =screen.getByLabelText(/Choose Time/);
 fireEvent.change(timeInput,{target:{value:"1234"}});

 const guestInput =screen.getByLabelText(/Number of guests/);
 fireEvent.change(guestInput,{target:{value:"0"}});

 const ocassionInput =screen.getByLabelText(/Occasion/);
 fireEvent.change(ocassionInput,{target:{value:"1234"}});

 const Reservationbutton = screen.getByRole("button");
 fireEvent.click(Reservationbutton);

 expect(mockhandleSubmit).not.toHaveBeenCalled();
 expect(Reservationbutton).toHaveAttribute("disabled");
})
})
