import {
  Crosshair,
  Menu,
  MoveUpRight,
  TrendingUp,
  Triangle,
  Zap,
} from "lucide-react";
import Link from "next/link";

function InvestmentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-20 items-center justify-between border-b border-black px-4">
        <h1 className="text-2xl">PropMind</h1>

        <div className="flex items-center gap-4">
          <Link
            href="/investment"
            className="hidden rounded-full border border-black px-6 py-2 sm:block"
          >
            Login
          </Link>
          <Link
            href="/investment"
            className="hidden rounded-full border border-black bg-black px-6 py-2 text-white sm:block"
          >
            Get Started
          </Link>
          <Menu className="size-10" />
        </div>
      </header>

      <main className="flex-1 grid-cols-4 grid-rows-3 sm:grid">
        <div className="col-span-2 row-span-3 border-black bg-gradient-to-b from-white to-blue-500 px-4 pt-20 sm:border-r xl:px-16">
          <p className="text-xl">
            Bringing Security To <p>Your Life</p>
          </p>
          <h1 className="mt-4 text-2xl font-bold uppercase lg:text-6xl lg:leading-[80px]">
            Money <h1>Investment</h1>
          </h1>

          <div className="mt-20 border-y border-black px-1 py-4">
            <div className="flex">
              <p className="flex-1">Wealth Investment</p>
              <p className="flex-1">
                <span className="mr-2">/</span> Up to 10M+ USD
              </p>
              <MoveUpRight className="h-7 w-10 rounded-full bg-black py-1 text-white" />
            </div>

            <hr className="my-4 border-black" />

            <div className="flex">
              <p className="flex-1">Portfolio Manage</p>
              <p className="flex-1">
                <span className="mr-2">/</span> 5 Accounts
              </p>
              <MoveUpRight className="h-7 w-10 rounded-full bg-black py-1 text-white" />
            </div>
          </div>
        </div>

        <div className="row-span-2 flex flex-col border-black bg-gradient-to-b from-white to-purple-500 p-6 px-4 sm:border-r xl:px-16">
          <Zap className="size-10" fill={"black"} />
          <h1 className="mt-4 text-3xl font-semibold">Long-Term</h1>

          <p className="mt-5">
            A Low-Cost Low-Touch Large-Cap Portfolio Meant For The Long-Term
            Investment
          </p>

          <hr className="mb-2 mt-auto border-black" />

          <p className="text-sm">10 Yrs CAGR on Invest</p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-2xl font-bold">6.2%</p>

            <MoveUpRight className="h-7 w-10 rounded-full bg-black py-1 text-white" />
          </div>
        </div>

        <div className="row-span-2 flex flex-col bg-gradient-to-b from-white to-green-500 p-6 px-4 xl:px-16">
          <Crosshair className="size-10" />
          <h1 className="mt-4 text-3xl font-semibold">Short-Term</h1>

          <p className="mt-5">
            Algorithmically Picked Portfolio Of Best Stocks Based On
            Price-Momentum
          </p>

          <hr className="mb-2 mt-auto border-black" />

          <p className="text-sm">25 Yrs Return on Invest</p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-2xl font-bold">24.2%</p>

            <MoveUpRight className="h-7 w-10 rounded-full bg-black py-1 text-white" />
          </div>
        </div>

        <div className="col-span-2 flex flex-col border-black bg-gradient-to-r from-yellow-200 to-white p-6 px-4 sm:border-t xl:px-16">
          <TrendingUp className="size-10" />
          <h1 className="text-3xl font-semibold">Wealth PMS</h1>

          <p className="mt-3 text-xs lg:text-base">
            Up to 25 stocks selected based on Sharpe rations and liquidity
          </p>

          <hr className="mb-2 mt-auto border-black" />

          <p className="text-sm">30 Yrs CAGR on invest</p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-2xl font-bold">28.2%</p>

            <MoveUpRight className="h-7 w-10 rounded-full bg-black py-1 text-white" />
          </div>
        </div>
      </main>

      <div className="flex h-16 items-center overflow-hidden bg-black">
        <ul className="flex animate-tickers items-center gap-10 text-white">
          {[...stocks, ...stocks].map((stock) => {
            const increase = stock.priceChange > 0;
            return (
              <li key={stock.ticker} className="flex gap-2">
                <p className="text-gray-500">{stock.ticker}</p>
                <p className="text-gray-500">{stock.price}</p>
                <p className="flex items-center gap-1">
                  <Triangle
                    className={`size-3 ${!increase && "rotate-180"}`}
                    fill="white"
                  />
                  <p
                    className={`${
                      increase ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stock.priceChange}
                  </p>
                </p>
                <p
                  className={`${increase ? "text-green-500" : "text-red-500"}`}
                >
                  {increase && "+"}
                  {stock.percentageChange}%
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <p>Terms Policy</p>
          <p>•</p>
          <p>Customer Story</p>
        </div>

        <p>Copyright@propmind 2023</p>
      </footer>
    </div>
  );
}

export default InvestmentPage;

const stocks = [
  { ticker: "AAPL", price: 150.75, percentageChange: 1.2, priceChange: 1.79 },
  { ticker: "MSFT", price: 299.1, percentageChange: -0.5, priceChange: -1.5 },
  { ticker: "GOOGL", price: 2750.8, percentageChange: 0.8, priceChange: 22.01 },
  {
    ticker: "AMZN",
    price: 3450.5,
    percentageChange: -0.3,
    priceChange: -10.35,
  },
  { ticker: "TSLA", price: 675.4, percentageChange: 2.5, priceChange: 16.89 },
  { ticker: "NFLX", price: 510.2, percentageChange: -1.1, priceChange: -5.64 },
  { ticker: "FB", price: 325.6, percentageChange: 1.7, priceChange: 5.45 },
  { ticker: "NVDA", price: 640.0, percentageChange: 3.0, priceChange: 18.64 },
  { ticker: "INTC", price: 54.2, percentageChange: -0.8, priceChange: -0.43 },
  { ticker: "ADBE", price: 520.1, percentageChange: 0.6, priceChange: 3.12 },
  { ticker: "PYPL", price: 290.3, percentageChange: -1.5, priceChange: -4.45 },
  { ticker: "CSCO", price: 55.6, percentageChange: 0.4, priceChange: 0.22 },
  { ticker: "ORCL", price: 85.9, percentageChange: 2.1, priceChange: 1.76 },
  { ticker: "IBM", price: 135.7, percentageChange: -0.7, priceChange: -0.95 },
  { ticker: "CRM", price: 250.2, percentageChange: 1.3, priceChange: 3.25 },
  { ticker: "BABA", price: 205.0, percentageChange: 1.0, priceChange: 2.03 },
  { ticker: "SAP", price: 140.4, percentageChange: -0.4, priceChange: -0.56 },
  { ticker: "TM", price: 172.9, percentageChange: 0.7, priceChange: 1.21 },
  { ticker: "SONY", price: 110.5, percentageChange: 2.2, priceChange: 2.41 },
  { ticker: "V", price: 235.2, percentageChange: -1.0, priceChange: -2.38 },
];
