import React, { useRef, useState } from "react";

const AppointmentForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const FORMSPREE_FORM_ID = "mqapqwdv";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      service: serviceRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
      location: locationRef.current?.value,
      message: messageRef.current?.value,
    };

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return isSubmitted ? (
    <section className="bg-green-100 py-12 px-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Thank you!</h2>
      <p className="text-center">
        Your appointment request has been submitted successfully.
      </p>
    </section>
  ) : (
    <section className="bg-gray-100 py-12 px-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Book an Appointment
      </h2>
      <form className="max-w-2xl mx-auto grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
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
            ref={serviceRef}
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
            ref={emailRef}
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
            ref={phoneRef}
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
            ref={locationRef}
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
            ref={messageRef}
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
