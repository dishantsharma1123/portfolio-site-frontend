import React, { useState, useEffect, useCallback } from "react";

// Custom hook to fetch coding stats
const useCodingStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true); // Start loading

    try {
      // Use AllOrigins for both requests
      const leetCodeResponse = await fetch(
        "https://alfa-leetcode-api.onrender.com/dishant_sharma_"
      );

      const leetCodeProblemsSolvedResponse = await fetch(
        "https://alfa-leetcode-api.onrender.com/dishant_sharma_/solved"
      );

      // Check if responses are ok
      if (!leetCodeResponse.ok) {
        throw new Error("LeetCode Network response was not ok");
      }

      if (!leetCodeProblemsSolvedResponse.ok) {
        throw new Error("LeetCode Network response was not ok");
      }

      const leetCodeData = await leetCodeResponse.json(); // Parse JSON response
      console.log("LeetCode Data: ", leetCodeData);

      const leetCodeProblemsSolvedData =
        await leetCodeProblemsSolvedResponse.json(); // Parse JSON response
      console.log(
        "leetCodeProblemsSolvedData Data: ",
        leetCodeProblemsSolvedData
      );

      const codeforcesResponse = await fetch(
        "https://codechef-api.vercel.app/handle/di_shantsharma"
      );

      // Check if responses are ok
      if (!codeforcesResponse.ok) {
        throw new Error("Codeforces Network response was not ok");
      }

      const codeforcesData = await codeforcesResponse.json(); // Parse JSON response
      console.log("Codeforces Data: ", codeforcesData.currentRating);

      // Set data state
      setData({
        leetCode: {
          totalSolved: leetCodeProblemsSolvedData.solvedProblem || 0,
        },
        codeforces: {
          rating: codeforcesData.currentRating
            ? codeforcesData.currentRating
            : "N/A", // Handle missing data
          globalRank: codeforcesData.globalRank ? codeforcesData.globalRank : 0, // Handle missing data
        },
      });
    } catch (err) {
      console.error("Error fetching coding stats: ", err);
      setError(err); // Handle any errors
    } finally {
      setLoading(false); // Set loading to false
    }
  }, []); // Empty dependency array ensures it runs once

  return { data, loading, error, fetchData }; // Return state and fetch function
};

// Main component
const CodingStatsComponent = () => {
  const { data, loading, error, fetchData } = useCodingStats();

  useEffect(() => {
    fetchData(); // Fetch coding stats on component mount
  }, [fetchData]); // `fetchData` won't change, so it runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Real-Time Coding Stats</h1>
      <h2>LeetCode</h2>
      <p>Total Problems Solved: {data.leetCode.totalSolved}</p>
      <h2>Codeforces</h2>
      <p>Rating: {data.codeforces.rating}</p>
      <p>Global Rank: {data.codeforces.globalRank}</p>
    </div>
  );
};

// Export the component as default
export default CodingStatsComponent;
