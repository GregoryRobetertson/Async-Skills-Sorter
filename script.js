"use strict";

// Async function to fetch skills data from skills.json
async function fetchData() {
  try {
    const response = await fetch("skills.json"); // Fetch skills.json file
    if (!response.ok) {
      throw new Error("Failed to fetch skills data"); // Implement error handling for the fetch operation
    }

    const skillsData = await response.json(); // Parse the JSON response
    console.log("Skills Data:", skillsData);
    return skillsData; // Return the parsed skills data
  } catch (error) {
    console.error(error.message); // Log any errors to the console
    return null; // Return null in case of an error
  }
}

// Function to sort skills array by level in descending order
function sortSkillsByLevel(skills) {
  return skills.sort((a, b) => b.level - a.level);
}

// Async function to display sorted skills
async function displaySortedSkills() {
  const skills = await fetchData(); // Wait for the skills data to be fetched

  if (skills) {
    const sortedSkills = sortSkillsByLevel(skills); // Sort the skills array
    console.log(sortedSkills); // Log the sorted skills array to the console (replace this with your display logic)
  }
}

// Call the function to start the process
displaySortedSkills();
