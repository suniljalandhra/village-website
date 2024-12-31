import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Phone } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Village Hero Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to [Village Name]
            </h1>
            <p className="text-xl text-white mb-8">
              Experience the beauty and tradition of our historic village
            </p>
            <Link
              href="/about"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* News & Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Latest News</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Village Festival Announcement</h3>
                  <p className="text-gray-600">Join us for our annual celebration...</p>
                  <span className="text-sm text-gray-500 mt-2 block">June 15, 2024</span>
                </div>
              </div>
              <Link
                href="/news"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                View All News →
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Cultural Dance Performance</h3>
                    <p className="text-gray-600">Experience traditional dance forms...</p>
                    <span className="text-sm text-gray-500 mt-2 block">July 1, 2024</span>
                  </div>
                </div>
              </div>
              <Link
                href="/events"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                View All Events →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/tourism"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Tourist Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/directory"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Village Directory
                  </Link>
                </li>
                {/* Add more quick links as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our Village</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover the rich heritage and vibrant culture of our village. 
                From ancient traditions to modern developments, we take pride in 
                our community's journey through time.
              </p>
              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/api/placeholder/800/600"
                alt="Village Life"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
