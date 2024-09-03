import { useState } from 'react'
import {
  HelpCircle,
  GripVertical,
  Plus,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

const images = [
  '/static/img.jpg',
  '/static/img.jpg',
  '/static/img.jpg',
  '/static/img.jpg',
  '/static/img.jpg',
]
const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }
  return (
    <div>
      <div className="bg-[#4A4E54] card rounded-2xl py-3 px-7 mr-8 relative">
        <div className="absolute left-2 top-0 bottom-24 flex flex-col items-center justify-between pt-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center">
            <HelpCircle className="text-[#8E8E93]" size={22} />
          </div>
          <GripVertical className="text-[#8E8E93]" size={28} />
        </div>
        <div className="ml-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-semibold px-5 py-3 bg-[#000] rounded-lg">
              Gallery
            </h2>
            <div className="flex items-center space-x-2">
              <button className="bg-[#4A4E54] text-white text-xs px-5 py-3 rounded-full flex items-center addImage mr-5">
                <Plus size={14} className="mr-1" />
                ADD IMAGE
              </button>
              <button
                className="p-2 bg-[#3A3A3C] rounded-full hover:bg-[#4A4A4C] transition-colors duration-300 arrow"
                onClick={prevImage}
              >
                <ArrowLeft size={20} className="text-[#8E8E93]" />
              </button>
              <button
                className="p-2 bg-[#3A3A3C] rounded-full hover:bg-[#4A4A4C] transition-colors duration-300 arrow"
                onClick={nextImage}
              >
                <ArrowRight size={20} className="text-[#8E8E93]" />
              </button>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out space-x-3"
              style={{
                transform: `translateX(-${(currentImageIndex * 100) / 3}%)`,
                width: `${images.length * 19}%`,
              }}
            >
              {images.map((src, i) => (
                <div
                  key={i}
                  className="w-1/3 flex-shrink-0 aspect-square bg-[#3A3A3C] rounded-2xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i}`}
                    className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
