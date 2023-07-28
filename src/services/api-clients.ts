import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9f0204e2e06b4448a69d744d26e9d32c",
  },
});
