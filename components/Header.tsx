"use client";

const menus = [
  { name: "Home", href: "#home" },
  { name: "Benefits", href: "#benefits" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Reviews", href: "#reviews" },
  { name: "Promotion", href: "#promotion" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 overflow-hidden">

          <img
            src="/logo.png"
            alt="Prime Plus"
            style={{
              width: "64px",
              height: "64px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          <div className="leading-tight">
    <h1 className="text-xl font-black tracking-wide text-white">
        PRIME <span className="text-red-500">PLUS</span>
    </h1>

    <p className="text-xs text-gray-400">
        Premium Men's Supplement
    </p>
    </div>
        </a>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menus.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-red-500 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Button */}
        <a
          href="#order"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Order Now
        </a>

      </div>
    </header>
  );
}