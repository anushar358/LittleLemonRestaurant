import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { InitializeTimes, updateTimes } from './Main';

test("Tests if the static text is present",()=>{
    render(<BookingForm availableTimes={["17:00", "18:00"]} updateTimes={() => {}}/>)
    const staticText = screen.getByLabelText("Choose Date");
    expect(staticText).toBeInTheDocument();
})

test("tests the function initialiseTimes",()=>{
    render(<BookingForm availableTimes={["17:00", "18:00"]} updateTimes={() => {}}/>)
    const times=screen.getByDisplayValue("[17:00,18:00,19:00,20:00,21:00]");
    expect(times).toBeInTheDocument();
})


// Main.test.js
describe('initializeTimes & updateTimes', () => {
  test('returns correct list of available time slots', () => {
    const expected = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(InitializeTimes()).toEqual(expected);
  });
});


// Main.test.js
describe('updateTimes reducer', () => {
  test('returns same time slots regardless of input', () => {
    const currentState = InitializeTimes();
    const action = { type: 'update', payload: '2023-10-20' };

    const updatedState = updateTimes(currentState, action);

    expect(updatedState).toEqual(currentState);
  });
});
