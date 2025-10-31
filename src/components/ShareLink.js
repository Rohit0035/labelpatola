import React from "react";
import { Link } from "react-router-dom";

const ShareLink = () => {
  const handleSystemShare = async (e) => {
    e.preventDefault(); // prevent navigation if it's a <Link>
    const shareData = {
      title: document.title,
      text: "Check this out!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Share cancelled or failed:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <>
      {/* share start */}
      <Link
        to="#"
        onClick={handleSystemShare}
        className="mb-0 mt-4 fs-6 d-flex align-items-center gap-2 font-14"
      >
        <i className="bi bi-share" />
        <span>Share this</span>
      </Link>
      {/* share close */}
    </>
  );
};

export default ShareLink;
