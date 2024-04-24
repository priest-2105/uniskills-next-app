import store from "@/redux";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Head from "next/head";


export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Function to hide the preloader after a delay
		const hidePreloaderAfterDelay = () => {
			setTimeout(() => {
				setLoading(false); // Hide preloader after 2 seconds
			}, 2000); // 2-second delay
		};

		// Handler for when the window finishes loading
		const handleWindowLoad = () => {
			hidePreloaderAfterDelay();
		};

		// Check if the window has already loaded (e.g., for fast reloads/caching)
		if (document.readyState === "complete") {
			hidePreloaderAfterDelay();
		} else {
			// Listen for when the window finishes loading
			window.addEventListener("load", handleWindowLoad);
		}

		// Clean up the event listener
		return () => {
			window.removeEventListener("load", handleWindowLoad);
		};
	}, []);

	return (
		<>
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/uni-favicon.ico"
				/>
				<title>Uniskills</title>
			</Head>
			<Provider store={store}>
				{loading ? <Preloader /> : <Component {...pageProps} />}
			</Provider>
		</>
	);
}
