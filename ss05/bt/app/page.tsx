"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathName = usePathname()
  return (
    <main>
      {/* B1 */}
      {/* Đây là trang chủ */}
      {/* B5 */}
      <div className='flex gap-4'>
        <Link href={'/'} className={pathName == '/' ? 'active' : ''}>Home</Link>
        <Link href={'/about'} className={pathName == '/about' ? 'active' : ''}>About</Link>
        <Link href={'/contact'} className={pathName == '/contact' ? 'active' : ''}>Contact</Link>
        <Link href={'/login'} className={pathName == '/login' ? 'active' : ''}>Login</Link>
      </div>
      Home Page
    </main>
  );
}
