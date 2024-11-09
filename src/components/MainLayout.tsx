import React from "react";

interface NavLink {
  name: string;
  href: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Info", href: "/contact" },
];

const contactInfo: ContactInfo = {
  phone: "(705) 796-0243",
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
            <ul className="flex space-x-6 text-lg font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gray-100 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden sm:block">
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-base font-semibold hover:text-gray-100 transition-colors duration-300"
              >
                Phone: {contactInfo.phone}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-7xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
        {children} {/* Main content slot */}
      </main>

      <footer className="bg-gray-800 text-white py-10 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4 lg:px-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Hours of Operation</h2>
            <p>9:00 am &ndash; 5:30 pm</p>
            <p>Monday through Friday</p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">
              After Hours and Emergency Service
            </h2>
            <p className="text-sm">Available 24/7</p>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">Phone/Text: {contactInfo.phone}</p>
            <p className="text-sm">Email: {contactInfo.email}</p>
            <p className="text-sm">Address: {contactInfo.address}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
