import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

interface GalleryItemType {
  id: string;
  title: string;
  description: string;
  date: string;
}

// Export the loader function so it can be used in your router configuration
export const galleryLoader = async() => {
  try {
      const response = await fetch('http://localhost:5000/dementia');
      const data = await response.json();
      return data;
  } catch(error) {
      console.error("Error fetching gallery items:", error);
      return [];
  }
}

const GalleryItem = () => {
  // Use the useLoaderData hook to access the data loaded by the router
  const galleryItems = useLoaderData() as GalleryItemType[];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems && galleryItems.map((item: GalleryItemType) => (
          <RouterLink to={`${item.id.toString()}`} key={item.id}>
            <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-400">{item.date}</p>
            </div>
          </RouterLink>
        ))
  
      }
        
    </div>
  );
}

export default GalleryItem;
