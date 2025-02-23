export const GetUrl = (url) => {
  try {
    // Remove query parameters and hash fragments
    let cleanUrl = url.split("?")[0].split("#")[0];

    // Split the URL by slashes
    let parts = cleanUrl.split("/").filter((part) => part.trim() !== "");

    // Ensure there are at least two words to extract
    if (parts.length < 2) {
      return null; // Not enough parts to extract second-to-last word
    }

    // Get the second-to-last part
    return parts[parts.length - 2];
  } catch (error) {
    console.error("Error extracting second-to-last word:", error);
    return null;
  }
};
export const GetUrl2 = (url) => {
  try {
    // Remove query parameters and hash fragments
    let cleanUrl = url.split("?")[0].split("#")[0];

    // Split the URL by slashes
    let parts = cleanUrl.split("/").filter((part) => part.trim() !== "");

    // Ensure there are at least two words to extract
    if (parts.length < 2) {
      return null; // Not enough parts to extract second-to-last word
    }

    // Get the second-to-last part
    return parts[parts.length - 3];
  } catch (error) {
    console.error("Error extracting second-to-last word:", error);
    return null;
  }
};
