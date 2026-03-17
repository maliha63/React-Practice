import { useState, useEffect } from "react";

const flagMap = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  GBP: "🇬🇧",
  JPY: "🇯🇵",
  CAD: "🇨🇦",
  AUD: "🇦🇺",
  CHF: "🇨🇭",
  CNY: "🇨🇳",
  HKD: "🇭🇰",
  NZD: "🇳🇿",
  INR: "🇮🇳",
  BRL: "🇧🇷",
  SGD: "🇸🇬",
};

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data)));
  }, []);

  useEffect(() => {
    const convert = async () => {
      if (fromCurrency === toCurrency) {
        setConvertedAmount(Number(amount).toFixed(2));
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
        );
        const data = await res.json();
        setConvertedAmount(data.rates[toCurrency].toFixed(2));
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    const debounce = setTimeout(convert, 400);
    return () => clearTimeout(debounce);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 font-sans antialiased text-slate-900">
     
      <div className="fixed top-0 left-0 w-full h-1 "></div>

      <div className="w-full max-w-lg">
        <header className="mb-10 text-center">
          <h1 className="text-xl font-semibold tracking-tight text-slate-800">
            Currency Converter
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Interbank rates updated in real-time
          </p>
        </header>

        <main className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          {/* Amount Section */}
          <div className="mb-8">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
              Amount
            </label>
            <div className="relative group">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full text-4xl font-light tracking-tight border-b border-slate-100 pb-4 focus:outline-none focus:border-indigo-500 transition-colors bg-transparent"
                placeholder="0.00"
              />
              <span className="absolute right-7 bottom-4 text-slate-300 font-medium">
                {fromCurrency}
              </span>
            </div>
          </div>

          {/* Selectors Grid */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4 mb-10">
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                From
              </label>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="text-lg">{flagMap[fromCurrency] || "🏳️"}</span>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="bg-transparent text-sm font-semibold focus:outline-none w-full appearance-none"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                setFromCurrency(toCurrency);
                setToCurrency(fromCurrency);
              }}
              className="p-2 mb-1 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all active:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l4-4M17 20l-4-4" />
              </svg>
            </button>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                To
              </label>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 hover:bg-slate-100 transition-colors">
                <span className="text-lg">{flagMap[toCurrency] || "🏳️"}</span>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="bg-transparent text-sm font-semibold focus:outline-none w-full appearance-none"
                >
                  {currencies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Final Result Display */}
          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-400 mb-1 font-medium">
              Converted Value
            </p>
            <div
              className={`text-5xl font-semibold tracking-tighter transition-all duration-300 ${loading ? "opacity-30 scale-95" : "opacity-100"}`}
            >
              {convertedAmount}{" "}
              <span className="text-2xl text-slate-300 font-normal">
                {toCurrency}
              </span>
            </div>
            {!loading && (
              <p className="mt-4 text-[12px] text-indigo-500 font-medium bg-indigo-50 inline-block px-3 py-1 rounded-full">
                1 {fromCurrency} = {(convertedAmount / amount).toFixed(4)}{" "}
                {toCurrency}
              </p>
            )}
          </div>
        </main>

        <footer className="mt-10 text-center text-slate-400 text-[11px] font-medium tracking-widest uppercase" >
          Precision Data • Secure Connection
        </footer>
      </div>
    </div>
  );
}

export default App;
