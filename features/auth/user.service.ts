import axios from "axios";

// Fetch user
export const fetchUser = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/auth/getUser",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/auth/logout",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const userService = {
  fetchUser,
  logoutUser,
};

export default userService;
