import React from "react";
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

			axios.get("https://geolocation-db.com/json/").then(response => {
				console.log("Response = ", response);
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
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
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
