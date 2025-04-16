import GalleryItem from '@/pages/GalleryItem'
import { Outlet } from 'react-router-dom'

const RootGalleryLayout = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Gallery</h1>
      <h2 className="text-center mb-8">Explore our collection of images and videos.</h2>
        <GalleryItem />
        <Outlet />
    </div>
  )
}

export default RootGalleryLayout