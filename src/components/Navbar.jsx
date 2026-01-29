// =====================================================
// src/components/Navbar.jsx
// =====================================================

import ThemeToggle from './ThemeToggle';

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold">Munyaradzi.dev</h1>
      <ThemeToggle dark={dark} setDark={setDark} />
    </nav>
  );
}
