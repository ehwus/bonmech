import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faTools,
  faClock,
  faWrench,
  faShower,
  faFire,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";
import Form from "../components/Form";

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
      <div className="space-y-12">
        {/* First Row: Info and Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="bg-white p-8 shadow-md rounded-lg flex flex-col justify-center">
            <section className="text-center">
              <h2 className="text-5xl font-semibold mb-6 text-indigo-700 tracking-tight">
                Discover Unmatched Plumbing & Mechanical Services
              </h2>
              <div className="flex justify-center mb-8">
                <img
                  src="src/assets/faucet.jpg"
                  alt="Running water from a faucet"
                  className="w-64 h-64 object-cover rounded-full shadow-lg"
                />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Since 2011, BONMECH INC. has been a trusted provider of
                exceptional plumbing and mechanical system services throughout
                South Central Ontario.
              </p>
              <p className="text-md text-gray-600 mb-8">
                Our skilled team brings years of expertise to residential,
                commercial, and industrial projects, delivering unparalleled
                quality and commitment to project excellence.
              </p>
              <a
                href="tel:(705)796-0243"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" /> Call Us Now
              </a>
            </section>
          </div>
          {/* Reviews Column */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
              What Our Customers Say
            </h2>
            <Review
              name="Chris A."
              content="As a major commercial landlord and property manager in Collingwood, I can tell you that we have used Bonmech Inc. since 2013, and we have received very good service from them. Always there when you need them for urgent calls, and their workmanship is unmatched in the Simcoe County area. Fantastic company, would highly recommend for all your plumbing & heating/cooling needs."
            />
            <Review
              name="Bruce B."
              content="Top-notch work! Highly recommend BONMECH INC. for any plumbing needs."
            />
            <Review
              name="Tara D."
              content="Very attentive customer service. Had an after-hours issue and came right away to help us. Very professional. Would highly recommend; we will use them again going forward."
            />
          </div>
        </div>
        {/* Second Row: Services and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Services */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
              Our Services
            </h2>
            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faWater}
                    className="text-indigo-600 mr-2"
                  />
                  Leak Detection and Repair
                </h3>
                <p className="text-sm text-gray-700">
                  Expert leak detection and repair services to keep your
                  property safe and prevent costly damage.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faWrench}
                    className="text-indigo-600 mr-2"
                  />
                  Comprehensive Plumbing Services
                </h3>
                <p className="text-sm text-gray-700">
                  From appliance installations to water heater services, we
                  handle all your plumbing needs with care and expertise.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-indigo-600 mr-2"
                  />
                  24/7 Emergency Services
                </h3>
                <p className="text-sm text-gray-700">
                  Available around the clock to respond swiftly to urgent
                  plumbing and mechanical issues.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faShower}
                    className="text-indigo-600 mr-2"
                  />
                  Drain Services
                </h3>
                <p className="text-sm text-gray-700">
                  Clearing, repairing, and replacing clogged drains and sewer
                  lines using advanced techniques.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faFire}
                    className="text-indigo-600 mr-2"
                  />
                  Furnace and Boiler Maintenance
                </h3>
                <p className="text-sm text-gray-700">
                  Ensure efficient heating with our installation and maintenance
                  services for furnaces and boilers.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  <FontAwesomeIcon
                    icon={faTools}
                    className="text-indigo-600 mr-2"
                  />
                  Custom Plumbing Projects
                </h3>
                <p className="text-sm text-gray-700">
                  From renovations to new installations, we provide tailored
                  solutions for all your plumbing projects.
                </p>
              </div>
            </div>
          </div>
          {/* Appointment Form */}
          <div className="flex flex-col justify-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
