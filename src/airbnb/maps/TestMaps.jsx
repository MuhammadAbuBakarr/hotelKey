import React from "react";
import GoogleMapReact from "google-map-react";

const TestMaps = () => {
	const AnyReactComponent = (props) => <div className=""></div>;
	// 33.66244672322518, 73.08439996969938;
	const defaultProps = {
		center: {
			lat: 33.66244672322518,
			lng: 73.08439996969938,
		},
		zoom: 15,
	};
	return (
		<>
			<div className="flex justify-center z-0 items-center">
				<div
					style={{ height: "60vh", width: "90%" }}
					// className="flex h-[60vh] w-[80vw] justify-center"
				>
					<GoogleMapReact
						bootstrapURLKeys={{ key: "" }}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
					>
						<AnyReactComponent lat={59.955413} lng={30.337844} />
						{/* <div>Marker</div> */}
					</GoogleMapReact>
				</div>
			</div>
		</>
	);
};

export default TestMaps;
