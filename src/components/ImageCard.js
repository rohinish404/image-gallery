import React from 'react'

export default function ImageCard({image}) {
  return (
    <div className="max-w-sm rounded shadow-lg overflow-hidden">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
          <div className="font-bold text-xl text-blue-500">
            {image.user}
          </div>
          <ul>
            <li>
              <strong>Views:</strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads:</strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes:</strong>
              {image.likes}
            </li>
          </ul>
      </div>
      <div className="px-6 py-4">
        <span className='px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
        <span className='px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2'>#tag2</span>
        <span className='px-3 py-1 bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2'>#tag3</span>
      </div>
    </div>
  )
}


