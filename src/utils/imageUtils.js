// Utility function to get full image URL
// Handles both static assets and server-uploaded images

const API_BASE_URL = 'https://biomed-phamacy-backend.vercel.app';

export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  // If it's already a full URL (http:// or https://), return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a server upload path (/uploads/...), prepend API base URL
  if (imagePath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${imagePath}`;
  }
  
  // If it's a static asset path (/assets/...), return as is (Vite handles it)
  if (imagePath.startsWith('/assets/')) {
    return imagePath;
  }
  
  // Default: treat as static asset
  return imagePath;
};

export const getVideoUrl = (videoPath) => {
  if (!videoPath) return '';
  
  // If it's already a full URL, return as is
  if (videoPath.startsWith('http://') || videoPath.startsWith('https://')) {
    return videoPath;
  }
  
  // If it's a server upload path (/uploads/...), prepend API base URL
  if (videoPath.startsWith('/uploads/')) {
    return `${API_BASE_URL}${videoPath}`;
  }
  
  // If it's a static asset path, return as is
  if (videoPath.startsWith('/assets/')) {
    return videoPath;
  }
  
  // Default: treat as static asset
  return videoPath;
};

