import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const planAmounts = [500, 300, 200, 150, 100, 80, 50, 30, 20, 10];
const MXN_TO_USD_RATE = 0.06846;

export default function SelectPlan() {
  const { carrier } = useParams();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handlePayNow = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (amount && phoneNumber) {
      navigate("/payment", {
        state: {
          carrier,
          phoneNumber,
          amount,
        },
      });
    }
  };

  const handlePlanSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCarrierLogo = (name?: string) => {
    if (!name) return "M";
    // Return first letter as placeholder
    return name.charAt(0).toUpperCase();
  };

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;
  const amountUSD = currentAmount ? (currentAmount * MXN_TO_USD_RATE).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 md:py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl flex items-center gap-3 md:gap-4">
          {/* Carrier Logo */}
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#00A9E0] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl md:text-2xl font-bold">
              {getCarrierLogo(carrier)}
            </span>
          </div>
          {/* Title */}
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-gray-900">
              {carrier} Mexico Recharge
            </h1>
            <p className="text-xs md:text-sm text-gray-500">Instant Refill & Bill Payment</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-6 md:py-10 max-w-6xl">
        <div className="space-y-6 md:space-y-8">
          {/* Phone Number Input */}
          <div>
            <label className="block text-gray-900 font-medium mb-2 md:mb-3 text-sm md:text-base">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 bg-white">
              <input
                type="tel"
                placeholder="55-1234-5678"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 text-sm md:text-base focus:outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Plan Selection */}
          <div>
            <h2 className="text-gray-900 font-medium mb-2 md:mb-3 text-sm md:text-base">
              Select a Plan (MXN)
            </h2>
            
            {/* Custom Amount Input */}
            <div className="mb-4 md:mb-6 flex items-center border border-gray-300 rounded-lg px-3 md:px-4 py-2 md:py-3 bg-white">
              <span className="text-gray-500 text-sm md:text-base mr-2">$</span>
              <input
                type="number"
                placeholder="Enter amount ($10 - $500)"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                min="10"
                max="500"
                className="flex-1 text-sm md:text-base focus:outline-none bg-transparent"
              />
            </div>

            {/* Plan Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {planAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePlanSelect(amount)}
                  className={`border rounded-lg p-4 md:p-6 text-center transition-all relative ${
                    selectedAmount === amount
                      ? "border-[#00A9E0] bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  {/* Radio Button - top right */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAmount === amount
                          ? "border-[#00A9E0]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedAmount === amount && (
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#00A9E0]"></div>
                      )}
                    </div>
                  </div>
                  {/* Amount */}
                  <div className="text-2xl md:text-4xl font-medium text-[#00A9E0] mb-1 md:mb-2">
                    ${amount}
                  </div>
                  {/* Description */}
                  <div className="text-xs text-gray-500">
                    {carrier} Mexico ${amount} MXN
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Preview - Shows when amount is selected */}
          {currentAmount && (
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 md:p-6 text-center">
              <p className="text-base md:text-xl text-gray-800">
                <span className="font-bold">PAYMENT:</span> ${currentAmount} MXN (${amountUSD}). Please insert or tap card for payment
              </p>
            </div>
          )}

          {/* Pay Now Button */}
          <button
            onClick={handlePayNow}
            disabled={!phoneNumber || (!selectedAmount && !customAmount)}
            className="w-full bg-[#00A9E0] text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-medium hover:bg-[#0090c0] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed uppercase"
          >
            PAY NOW
          </button>
        </div>
      </main>
    </div>
  );
}