import Link from 'next/link';
import React from 'react';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#0077b6', color: '#fff' }}>
    <Link href="/" style={{ margin: '0 1rem', color: '#fff' }}>Home</Link>
    <Link href="/about" style={{ margin: '0 1rem', color: '#fff' }}>About</Link>
    <Link href="/services" style={{ margin: '0 1rem', color: '#fff' }}>Services</Link>
    <Link href="/bloggs" style={{ margin: '0 1rem', color: '#fff' }}>Blogs</Link>
  </nav>
);

export default Navbar;
