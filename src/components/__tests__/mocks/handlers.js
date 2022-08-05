import { rest } from "msw";


let numbers = data;

export const handlers = [
  rest.get("http://localhost:4000/numbers", (req, res, ctx) => {
    return res(ctx.json(numbers));
  }),
  rest.post("http://localhost:4000/numbers", (req, res, ctx) => {
    const id = numbers[numbers.length - 1]?.id + 1 || 1;
    const number = { id, ...req.body };
    numbers.push(number);
    return res(ctx.json(number));
  })
  
  
];
