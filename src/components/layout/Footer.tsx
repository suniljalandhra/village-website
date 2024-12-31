'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span>[Village Address]</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span>[Phone Number]</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span>[Email Address]</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-blue-400 transition-colors">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/tourism" className="hover:text-blue-400 transition-colors">
                  Tourism
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Important Info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/directory" className="hover:text-blue-400 transition-colors">
                  Village Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-blue-400 transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} [Village Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};