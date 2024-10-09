"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Logo from "./Logo";

export default function SearchForm() {
  const [location, setLocation] = useState<string>("");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);

  const [errors, setErrors] = useState<{
    location?: string;
    fromDate?: string;
    toDate?: string;
  }>({});

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);

    // Remove error if location is no longer empty
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, location: undefined }));
    }
  };

  const handleFromDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);

    // Remove error if fromDate is no longer empty
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, fromDate: undefined }));
    }

    // Clear toDate if it's earlier than the new fromDate
    if (toDate && new Date(e.target.value) > new Date(toDate)) {
      setToDate("");
    }
  };

  const handleToDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);

    // Remove error if toDate is valid
    if (e.target.value && new Date(e.target.value) >= new Date(fromDate)) {
      setErrors((prevErrors) => ({ ...prevErrors, toDate: undefined }));
    }
  };

  const handleAdultsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdults(Number(e.target.value));
  };

  const handleChildrenChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setChildren(Number(e.target.value));
  };

  const validateForm = () => {
    const newErrors: { location?: string; fromDate?: string; toDate?: string } =
      {};

    // Check if the fields are empty
    if (!location) newErrors.location = "Location is required.";
    if (!fromDate) newErrors.fromDate = "From date is required.";
    if (!toDate) newErrors.toDate = "To date is required.";
    // Check if toDate is earlier than fromDate
    if (fromDate && toDate && new Date(toDate) < new Date(fromDate)) {
      newErrors.toDate = "To date cannot be earlier than From date.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission logic here if validation passes
      console.log({
        location,
        fromDate,
        toDate,
        adults,
        children,
      });

      // Redirect to the specified URL
      window.location.href = "https://brandeth.gitlab.io/online-resume/";

      // Reset the form
      setLocation("");
      setFromDate("");
      setToDate("");
      setAdults(1);
      setChildren(0);
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg md:absolute md:w-[26rem]">
      <Logo />
      <h1 className="font-bold mt-6 mb-4 text-xl md:text-2xl ">
        Find places to stay anywhere
      </h1>
      <p className="text-gray-600 mb-6 ">
        Discover entire homes and rooms perfect for any trip or special
        occasion.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            placeholder="Anywhere"
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:border-primary-focus focus:ring-primary-focus p-4 py-3 bg-gray-100"
            value={location}
            onChange={handleLocationChange}
          />
          {errors.location && (
            <p className="text-red-500 text-sm mt-2">{errors.location}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              From
            </label>
            <input
              type="date"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:border-primary-focus focus:ring-primary-focus p-4 py-3 bg-gray-100"
              value={fromDate}
              placeholder="Add date"
              onChange={handleFromDateChange}
            />
            {errors.fromDate && (
              <p className="text-red-500 text-sm mt-2">{errors.fromDate}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              To
            </label>
            <input
              type="date"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:border-primary-focus focus:ring-primary-focus p-4 py-3 bg-gray-100"
              value={toDate}
              placeholder="Add date"
              onChange={handleToDateChange}
              min={fromDate} // Disable earlier dates than fromDate
            />
            {errors.toDate && (
              <p className="text-red-500 text-sm mt-2">{errors.toDate}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Adults
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:border-primary-focus focus:ring-primary-focus p-4 py-3 bg-gray-100 pr-10 custom-select"
              value={adults}
              onChange={handleAdultsChange}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Children
            </label>
            <select
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:outline-none focus:border-primary-focus focus:ring-primary-focus p-4 py-3 bg-gray-100 custom-select"
              value={children}
              onChange={handleChildrenChange}
            >
              {[0, 1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-hovered active:bg-primary-hovered focus:outline-none focus:ring focus:ring-primary-focus transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
}
