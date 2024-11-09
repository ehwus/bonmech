import React from "react";

const AppointmentForm: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Book an Appointment
      </h2>
      <form className="max-w-2xl mx-auto grid gap-4">
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="service">
            Service Required
          </label>
          <select
            id="service"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option>Leak Detection and Repair</option>
            <option>Comprehensive Plumbing Services</option>
            <option>24/7 Emergency Services</option>
            <option>Drain Services</option>
            <option>Furnace and Boiler Maintenance</option>
            <option>Custom Plumbing Projects</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AppointmentForm;
