import axios from "axios"

// Define the base URL for your API
const API_BASE_URL = "http://localhost:8000" // Replace with your actual API base URL

// Function to fetch generated content
export const generateContent = async (slug: string, description: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/content/generate/${slug}?description=${description}`
    )
    return response.data.data || [] // Return the data or an empty array if no data is found
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error // Re-throw the error to handle it in the calling function
  }
}
