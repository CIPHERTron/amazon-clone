import axios from "axios";

export default axios.create({
	// Cloud function URl
	baseURL: "http://localhost:5001/clone-2d395/us-central1/api",
});
