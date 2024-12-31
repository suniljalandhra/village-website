import Link from 'next/link';

export const Navigation = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Tourism', path: '/tourism' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Directory', path: '/directory' },
    { name: 'Culture', path: '/culture' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Village Name
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};