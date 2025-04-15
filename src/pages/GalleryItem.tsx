import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


interface GalleryItemType {
    id: string;
    title: string;
    description: string;
    date : string;
    // Add any other properties that you expect in your gallery item
}
export const galleryLoader = async () => {
  const response = await fetch(`http://localhost:5000/dementia`);
  const data = await  response.json();
  return data;
}


const GalleryItem = () => {

  useEffect(() => {
    galleryLoader();
 }, []); 

    const galleryItem = useLoaderData() as GalleryItemType[];
      
    return (
      <div>
      {galleryItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="mt-2 text-xl font-semibold">No Gallery Items Available</h2>
        <p className="text-gray-600">Please check back later.</p>
        <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      ) : (
        galleryItem.map((item: GalleryItemType) => (
        <RouterLink to={`/gallery/${item.id}`} key={item.id}>
          <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-400">{item.date}</p>
          </div>
        </RouterLink>
        ))
      )}
      </div>
    );
}
export default GalleryItem
