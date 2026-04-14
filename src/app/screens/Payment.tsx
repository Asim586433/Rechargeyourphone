import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { CreditCard } from "lucide-react";

const MXN_TO_USD_RATE = 0.06846;

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { carrier, phoneNumber, amount } = location.state || {};

  useEffect(() => {
    // Redirect if no payment data
    if (!carrier || !phoneNumber || !amount) {
      navigate("/");
      return;
    }

    // Auto-navigate to thank you after 3 seconds
    const timer = setTimeout(() => {
      navigate("/thank-you", {
        state: {
          carrier,
          phoneNumber,
          amount,
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [carrier, phoneNumber, amount, navigate]);

  const amountUSD = amount ? (amount * MXN_TO_USD_RATE).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4 md:px-8 lg:px-12">
      <div className="bg-white rounded-lg border-2 border-gray-300 p-8 md:p-12 lg:p-20 max-w-3xl w-full text-center">
        {/* Title with Amount */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16">
          PAYMENT: ${amount} MXN (${amountUSD})
        </h1>

        {/* Card Icon */}
        <div className="mb-8 md:mb-12">
          <CreditCard className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-gray-400 mx-auto" strokeWidth={1.5} />
        </div>

        {/* Instruction */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
          Please insert or tap card for payment
        </p>
      </div>
    </div>
  );
}