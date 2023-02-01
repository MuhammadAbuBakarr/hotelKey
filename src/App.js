import Navbar from "./airbnb/navbar/Navbar";
import Home from "./airbnb/Home";
import Register from "./airbnb/forms/Register";
import WishListPage from "./airbnb/wishlist/WishListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./airbnb/forms/Login";
import TestMaps from "./airbnb/maps/TestMaps";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/wishlist" element={<WishListPage />} />
					{/* Test Map Routes */}
					<Route path="/map" element={<TestMaps />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
