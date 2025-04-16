import { useLoaderData } from "react-router-dom";


interface GalleryItemType {
    id: string;
    title: string;
    description: string;
    date: string;
  }

export default function GalleryItemDetails() {
    const item = useLoaderData() as GalleryItemType;
  return (
    <div>
      <div className="cursor-pointer p-4 border rounded shadow-md hover:shadow-lg transition-shadow" onClick={() => {
        // Open the modal
        document.getElementById('gallery-modal')?.classList.add('fixed');
        document.getElementById('gallery-modal')?.classList.remove('hidden');
      }}>
        GalleryItemDetails
      </div>
      
      <div id="gallery-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Item Details</h2>
            <span className="text-2xl cursor-pointer hover:text-gray-600" onClick={() => {
              document.getElementById('gallery-modal')?.classList.add('hidden');
              document.getElementById('gallery-modal')?.classList.remove('fixed');
            }}>&times;</span>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{item?.title}</h3>
            <p className="text-gray-700 mb-2">{item?.description}</p>
            <p className="text-sm text-gray-500">Date: {item?.date}</p>
          </div>
          
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
            {/* Image could go here */}
            <p className="text-gray-500">Image for {item?.title}</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}


export const galleryItemDetailsLoader = async ({ params }) => {
    const { id } = await params;
    try {
        const response = await fetch(`http://localhost:5000/dementia/${id}`);
        if (!response.ok) {
        throw new Error('Could not fetch gallery item details');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching gallery item details:", error);
        return null;
    }
}
