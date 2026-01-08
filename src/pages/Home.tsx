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
import InstagramFeed from "../components/InstagramFeed";

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
                  src="/faucet.jpg"
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
                href="tel:+1(705)796-0243"
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
              content="Great customer service and knowledge. Andrew was fantastic and was efficient in the job we required. I'd highly recommend these folks!"
            />
            <Review
              content="Fast and efficient, completed in 1 visit. Very Happy!"
            />
            <Review
              content="Our issue was a winter water line blow out in our shower, and replacement of the cracked drain. Our tech was Andrew, and he arrived promptly and had the job done in under 2 hours. Booking in with the office was a painless experience. Overall experience was super. Thank you!"
            />
            <Review
              content="Very impressed with the communication and promptness of service. They showed up on time and did a very thorough job to fix our plumbing issue as well as cleaned up afterwards. The job was a little more than expected but they completed it in a timely and professional manner. Would highly recommend them and definitely use them again!"
            />
            <Review
              content="We are a GC that works with BonMech on a regular basis for all our plumbing, mechanical and gas needs. Bonmech is a pleasure to work with. There is always a high level of professionalism and attention to detail, not to mention the friendly service. They are quick to act when needed in emergencies, and are always reliable."
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
        {/* Third Row: Instagram Feed */}
        <div className="mt-12">
          <InstagramFeed />
        </div>
      </div>
    </div>
  );
};

export default Home;
