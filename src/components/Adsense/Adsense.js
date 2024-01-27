// Importing necessary dependencies from React
import React, { useEffect } from "react";

// Functional component Adsense for rendering Google AdSense ads
function Adsense({ dataAdSlot }) {
  // useEffect hook to handle ad initialization
  useEffect(() => {
    try {
      // Pushing ads to the global adsbygoogle array
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Logging any errors that may occur during ad initialization
      console.error(e);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  // Rendering the AdSense ad container
  return (
    <div style={{ textAlign: "center" }}>
      {/* AdSense ad unit */}
      <ins
        data-adtest="on"
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1373341236327290"
        data-ad-slot={dataAdSlot || "9699001202"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

// Exporting the Adsense component as the default export
export default Adsense;
