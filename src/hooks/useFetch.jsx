import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url, method = "GET", options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch function with dynamic method
  const fetchData = useCallback(
    async (body = null) => {
      setLoading(true);
      setError(null);
      try {
        // Axios request based on provided method
        const response = await axios({
          url,
          method, // GET, POST, DELETE, PUT, etc.
          ...options,
          data: body, // Attach body for methods like POST, PUT
        });
        setData(response.data); // Set the response data
      } catch (err) {
        setError(err.response?.data?.message || err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [url, method, options] // Dependencies for useCallback
  );

  // Trigger fetch on initial render if method is GET
  useEffect(() => {
    if (method.toUpperCase() === "GET") {
      fetchData();
    }
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
