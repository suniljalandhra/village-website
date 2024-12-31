// src/app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Village</h1>
        <p className="text-xl text-gray-600">Discover our rich heritage and vibrant community</p>
      </div>

      {/* History Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-gray-600 mb-4">
            [Your village name] has a rich history dating back to [year/period].
            Our village has been a witness to numerous historical events and has
            preserved its cultural heritage through generations.
          </p>
          <p className="text-gray-600">
            Through the years, we have maintained our traditional values while
            embracing modern development, creating a unique blend of old and new.
          </p>
        </div>
        <div className="relative h-64 md:h-96">
          <Image
            src="/api/placeholder/800/600"
            alt="Historical Village"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Demographics Section */}
      <div className="bg-gray-100 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Village Demographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Population</h3>
            <p className="text-gray-600">[Number] residents</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Area</h3>
            <p className="text-gray-600">[Number] square kilometers</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Main Occupation</h3>
            <p className="text-gray-600">[Occupation types]</p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <div className="aspect-w-16 aspect-h-9">
          {/* Add your embedded map here */}
          <div className="bg-gray-200 w-full h-96 rounded-lg">
            [Embed your map here]
          </div>
        </div>
      </div>

      {/* Cultural Heritage */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Cultural Heritage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Festivals</h3>
            <p className="text-gray-600">
              Our village celebrates various festivals throughout the year,
              including [list your major festivals].
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Arts & Crafts</h3>
            <p className="text-gray-600">
              We are known for our traditional [mention local arts and crafts],
              which have been passed down through generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}