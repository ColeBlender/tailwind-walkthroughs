import { Triangle } from "lucide-react";

function InfiniteScrollAnimationPage() {
  return (
    <div className="overflow-hidden bg-black flex">
      <ul className="flex gap-10 bg-black text-white py-4 animate-infinite-scroll">
        {[...stocks, ...stocks].map((stock) => {
          const priceIncrease = stock.priceChange > 0;

          return (
            <li key={stock.ticker} className="flex gap-2 items-center">
              <p className="text-gray-300">{stock.ticker}</p>
              <p className="text-gray-300">${stock.price}</p>
              <Triangle
                fill="white"
                className={`size-3 ${!priceIncrease && "rotate-180"}`}
              />
              <p
                className={`${
                  priceIncrease ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.priceChange}
              </p>
              <p
                className={`${
                  priceIncrease ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.percentChange}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InfiniteScrollAnimationPage;

const stocks = [
  { ticker: "AAPL", price: 150.23, priceChange: 1.34, percentChange: 0.9 },
  {
    ticker: "GOOGL",
    price: 2754.32,
    priceChange: -15.67,
    percentChange: -0.57,
  },
  { ticker: "AMZN", price: 3421.57, priceChange: 24.19, percentChange: 0.71 },
  { ticker: "MSFT", price: 299.35, priceChange: 2.68, percentChange: 0.9 },
  { ticker: "TSLA", price: 720.54, priceChange: -8.43, percentChange: -1.16 },
  { ticker: "FB", price: 355.64, priceChange: 5.78, percentChange: 1.65 },
  { ticker: "NFLX", price: 594.5, priceChange: 3.29, percentChange: 0.56 },
  { ticker: "NVDA", price: 203.35, priceChange: -1.44, percentChange: -0.7 },
  { ticker: "BABA", price: 157.89, priceChange: -2.13, percentChange: -1.33 },
  { ticker: "V", price: 232.43, priceChange: 1.15, percentChange: 0.5 },
  { ticker: "JPM", price: 157.92, priceChange: 0.99, percentChange: 0.63 },
  { ticker: "DIS", price: 177.89, priceChange: -1.67, percentChange: -0.93 },
  { ticker: "PYPL", price: 290.16, priceChange: -4.76, percentChange: -1.62 },
  { ticker: "ADBE", price: 559.23, priceChange: 8.45, percentChange: 1.53 },
  { ticker: "INTC", price: 54.92, priceChange: 0.12, percentChange: 0.22 },
  { ticker: "CSCO", price: 55.67, priceChange: -0.23, percentChange: -0.41 },
  { ticker: "ORCL", price: 88.43, priceChange: 0.78, percentChange: 0.89 },
  { ticker: "IBM", price: 144.56, priceChange: 1.34, percentChange: 0.94 },
  { ticker: "UBER", price: 44.12, priceChange: -0.67, percentChange: -1.5 },
  { ticker: "LYFT", price: 50.34, priceChange: -0.89, percentChange: -1.74 },
];
