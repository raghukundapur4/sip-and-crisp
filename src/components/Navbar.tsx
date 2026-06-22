import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'px-4 py-3 md:px-6'
            : 'px-6 py-5 md:py-6'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${
            scrolled
              ? 'rounded-full border border-green-dark/8 bg-paper/90 px-5 py-2.5 shadow-[0_8px_40px_rgba(26,48,38,0.08)] backdrop-blur-xl'
              : 'bg-transparent'
          }`}
          aria-label="Main"
        >
          <Link to="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Sip & Crisp"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? 'h-8 md:h-9' : 'h-9 md:h-11'
              }`}
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'bg-green-dark text-white'
                        : 'text-green-dark/60 hover:bg-green-dark/5 hover:text-green-dark'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link to="/menu" className="btn-primary hidden !px-5 !py-2.5 !text-xs lg:inline-flex">
            Order Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-dark/5 text-green-dark lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-green-dark/30 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-3xl border border-green-dark/10 bg-paper shadow-2xl lg:hidden">
            <ul className="p-3">
              {navLinks.map(({ to, label }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={to}>
                    <Link
                      to={to}
                      className={`block rounded-2xl px-5 py-3.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-green-dark text-white'
                          : 'text-green-dark/70 hover:bg-green/5'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-green-dark/8 p-4">
              <Link to="/menu" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Order Now
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
