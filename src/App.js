import React from "react";
import "react-slidedown/lib/slidedown.css";
import HomePageSkeleton from "./features/homePage/skeleton";
import "./app.scss";
import ReactGa from "react-ga";
import axios from "axios";
function App() {
	React.useEffect(() => {
		// console.log(process.env);
		ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
		ReactGa.pageview("/");
		const getData = async () => {
			//const res = await fetch("https://geolocation-db.com/json/");
			if (process.env.NODE_ENV === "production")
				axios.get("https://geolocation-db.com/json/").then(response => {
					axios({
						method: "post",
						url: process.env.REACT_APP_SHEETS_URI,
						data: {
							apiKey: process.env.REACT_APP_SHEETS_API_KEY,
							operationType: process.env.REACT_APP_UPDATE_WEBSITE_PING,
							operationData: response.data,
						},
						headers: {
							"Content-Type": "text/plain;charset=utf-8",
						},
					})
						.then(function () {})
						.catch(function (error) {
							console.log("Error Occured = ", error);
						});
				});
		};
		getData();
	}, []);
	return (
		<div>
			<HomePageSkeleton />
		</div>
	);
}

export default App;
