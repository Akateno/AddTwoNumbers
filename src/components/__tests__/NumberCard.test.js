import {fireEvent,
    render,
    screen,
    } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { server } from "./mocks/server";

import App from '../App';
 beforeAll(() => server.listen());
 afterEach(() => server.resetHandlers());
 afterAll(() => server.close());

test('test', ()=> {
    expect(true).toBe(true);
})
 const NumberList = require('../App');


 test('Adds Two Numbers', ()=> {
     render(<App/>);
     const appElement = screen.getByTestId("passed-data");
     expect(appElement).toBeInTheDocument();
 })


//wanted to test array returned from API 
const targetArray = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10];

test("Verify if are received and returned only numbers", () => {
  targetArray.forEach((target) => {
    expect(typeof target).toBe("number");
  });
});

test("displays question prompts after fetching", async () => {
    render(<App />);
  
    fireEvent.click(screen.queryByText(/Add Two Numbers/));
  
  });
// const total=require("../NumberCard")
// test("Sums both Numbers", () => {
//     const result = total(1,2);
//     expect(result).toBe(3)
//   });

test("Adds a new card with the sum and numbers submitted", async () => {
    render(<App />);
  
  
    // click form page
    fireEvent.click(screen.queryByText("Add"));
  
    // fill out form
    fireEvent.change(screen.queryByLabelText(/first number/), {
      target: { value: "first number" },
    });
    fireEvent.change(screen.queryByLabelText(/second number/), {
      target: { value: "second number" },
    });
  
    // submit form
    fireEvent.submit(screen.queryByText(/add/));
  
    
  });


