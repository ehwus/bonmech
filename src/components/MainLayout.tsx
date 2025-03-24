import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBell } from "@fortawesome/free-solid-svg-icons";

const contactInfo = {
  phone: "+1 (705) 796-0243",
  email: "info@bonmech.ca",
  address: "2108 Fairgrounds Rd N, Unit D, Stayner, ON L0M 1S0",
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <header className="shadow-lg">
        {/* Top Navigation Bar */}
        <nav className="bg-gradient-to-r from-indigo-600 to-blue-400 text-white py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-extrabold tracking-tighter">
                BONMECH INC.
              </h1>
              <span className="text-base italic hidden md:inline">
                Plumbing and Mechanical Systems
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden sm:block">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-base font-semibold hover:text-gray-100 transition-colors duration-300"
                >
                  Phone: {contactInfo.phone}
                </a>
              </div>
              <div className="text-base font-medium hidden sm:flex items-center">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-yellow-400 mr-2"
                />
                Mon-Fri, 9:00 am - 5:30 pm
              </div>
              <div className="text-base font-medium hidden sm:flex items-center">
                <FontAwesomeIcon icon={faBell} className="text-red-400 mr-2" />
                <span className="font-bold">
                  24h Emergency Service Available
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto bg-white m-0 p-5">
        {children} {/* Main content slot */}
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4 lg:px-8">
          <div className="text-center md:text-left">
            <h2 className="text-lg md:text-xl font-bold mb-2">
              Hours of Operation
            </h2>
            <p className="text-sm md:text-base">9:00 am &ndash; 5:30 pm</p>
            <p className="text-sm md:text-base">Monday through Friday</p>
          </div>
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold mb-2">
              After Hours and Emergency Service
            </h2>
            <p className="text-sm md:text-base">Available 24/7</p>
            <p className="text-sm md:text-base">{contactInfo.phone}</p>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-lg md:text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm md:text-base">
              Phone/Text: {contactInfo.phone}
            </p>
            <p className="text-sm md:text-base">Email: {contactInfo.email}</p>
            <p className="text-sm md:text-base">
              Address: {contactInfo.address}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
