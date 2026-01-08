import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faBell } from "@fortawesome/free-solid-svg-icons";
import { InstagramIcon, FacebookIcon, HomeStarsIcon } from "./SocialIcons";

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
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
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
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex justify-center items-center space-x-6">
              <a
                href="https://www.instagram.com/bonmech_southgeorgianbay/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/61581214102343/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-8 h-8" />
              </a>
              <a
                href="https://www.homestars.com/profile/2995026-bonmech-inc/reviews?page=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors duration-300"
                aria-label="Read our reviews on HomeStars"
              >
                <HomeStarsIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
