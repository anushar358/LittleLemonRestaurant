import { render, screen } from '@testing-library/react';
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

