import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

function SimpleMap({ laitiude, longitude }) {
  const AnyReactComponent = ({ text }) => <h5>{text}</h5>;
  const [center] = useState({
    lat: 12.9790831,
    lng: 77.7291274
  });

  const [zoom] = useState(17);

  return (
    <div className="" style={{ height: "15rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAUVBwgd45X8oJitUtH9UYSQP4cgw_YnuY" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={laitiude} lng={longitude} text="X" />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
