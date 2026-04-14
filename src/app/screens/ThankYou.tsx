import { useNavigate, useLocation } from "react-router";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { carrier, phoneNumber, amount } = location.state || {};

  const handleDone = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 lg:px-12">
      <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 lg:p-16 max-w-2xl w-full text-center shadow-sm">
        {/* Success Icon */}
        <div className="mb-6 md:mb-10">
          <CheckCircle2 className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-green-500 mx-auto" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-6 md:mb-8">
          THANK YOU
        </h1>

        {/* Message */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 md:mb-12">
          Recharge successful
        </p>

        {/* Done Button */}
        <button
          onClick={handleDone}
          className="bg-[#00A9E0] text-white px-12 sm:px-16 md:px-20 py-4 md:py-5 rounded-lg text-lg sm:text-xl md:text-2xl font-medium hover:bg-[#0090c0] transition-colors w-full sm:w-auto"
        >
          Done
        </button>
      </div>
    </div>
  );
}