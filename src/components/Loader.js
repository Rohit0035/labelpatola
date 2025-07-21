import React from "react";
import { useSelector } from "react-redux";
import "./Loader.css"; // Create this CSS file for styling

const Loader = () => {
  const isLoading = useSelector(state => state.loader.isLoading);

  if (!isLoading) return null;

  return (
    <div className="global-loader-overlay">
      <div className="global-loader">
        {/* You can use a spinner library (e.g., react-spinners) or custom CSS */}
        <div className="spinner" /> {/* Basic CSS spinner */}
        {/* Or an image, GIF, etc. */}
      </div>
    </div>
  );
};

export default Loader;
