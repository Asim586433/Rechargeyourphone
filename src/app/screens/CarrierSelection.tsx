import { useNavigate } from "react-router";
import carrierGrid from "../../imports/1111-1.jpeg";

const carriers = [
  { name: "Tigo", row: 1, col: 1 },
  { name: "Movistar", row: 1, col: 2 },
  { name: "Virgin", row: 1, col: 3 },
  { name: "Unefon", row: 1, col: 4 },
  { name: "AT&T", row: 1, col: 5 },
  { name: "Telcel", row: 1, col: 6 },
  { name: "Wireless Prepaid Payment", row: 2, col: 1 },
  { name: "US Cellular", row: 2, col: 2 },
  { name: "Ultra Mobile", row: 2, col: 3 },
  { name: "Tracfone", row: 2, col: 4 },
  { name: "T-Mobile Prepaid", row: 2, col: 5 },
  { name: "Straight Talk", row: 2, col: 6 },
  { name: "Simple Mobile", row: 3, col: 1 },
  { name: "Page Plus", row: 3, col: 2 },
  { name: "Net10", row: 3, col: 3 },
  { name: "MetroPCS", row: 3, col: 4 },
  { name: "Lyca Mobile", row: 3, col: 5 },
  { name: "H2O Wireless", row: 3, col: 6 },
  { name: "Cricket", row: 4, col: 1 },
  { name: "AT&T Prepaid", row: 4, col: 2 },
];

export default function CarrierSelection() {
  const navigate = useNavigate();

  const handleCarrierSelect = (carrier: string) => {
    navigate(`/plan/${encodeURIComponent(carrier)}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 py-6 md:py-10 lg:py-12 relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Main Heading */}
        <div className="relative z-10 px-4">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2" style={{
            background: 'linear-gradient(135deg, #00D4FF 0%, #0099FF 25%, #0066FF 50%, #9933FF 75%, #FF00FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(0, 153, 255, 0.5), 0 0 80px rgba(153, 51, 255, 0.3)',
            filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.6))'
          }}>
            Recharge Your Phone in Seconds
          </h1>
          
          {/* Subheading */}
          <p className="text-center text-base sm:text-lg md:text-xl font-medium text-gray-300 tracking-wide">
            Fast • Easy • Instant
          </p>
        </div>
        
        {/* Glow line accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
      </header>

      {/* Hero Heading Section */}
      <div className="bg-white py-8 md:py-12 lg:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 tracking-tight leading-tight uppercase">
            BUY MINUTES FOR YOUR CELL PHONE
          </h2>
          <div className="mt-4 md:mt-6 flex justify-center">
            <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 py-6 md:py-8">
        <div className="relative w-full max-w-6xl">
          <img 
            src={carrierGrid} 
            alt="Choose a Carrier" 
            className="w-full block"
          />
          {/* Clickable overlay grid - positioned to match the actual carrier logos */}
          <div className="absolute inset-0 grid grid-rows-4 gap-[3px]" style={{ paddingTop: '52px', paddingLeft: '21px', paddingRight: '21px', paddingBottom: '15px' }}>
            {[1, 2, 3, 4].map((row) => (
              <div key={row} className="grid grid-cols-6 gap-[10px]">
                {carriers
                  .filter((c) => c.row === row)
                  .map((carrier) => (
                    <button
                      key={carrier.name}
                      onClick={() => handleCarrierSelect(carrier.name)}
                      className="hover:bg-blue-500/10 transition-colors rounded-md cursor-pointer border-2 border-transparent hover:border-blue-400"
                      style={{
                        gridColumnStart: carrier.col,
                        gridColumnEnd: carrier.col + 1,
                      }}
                      aria-label={`Select ${carrier.name}`}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}