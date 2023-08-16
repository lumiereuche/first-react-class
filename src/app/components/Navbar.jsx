import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className="bg-yellow-600 flex justify-between h-[100px] text-white items-center text-3xl">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/course">
              <li>course</li>
            </Link>
            <Link href="/about">
              <li>about</li>
            </Link>
            <Link href="/contacts">
              <li>contacts</li>
            </Link>
        </ul>
    </nav>
  )
}
