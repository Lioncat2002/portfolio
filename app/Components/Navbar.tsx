import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center">
      <div className=" underline p-2">
        <Link href="/">Kittycat</Link>
      </div>
      <div className=" underline p-2">
        <Link href="/blog">Blog</Link>
      </div>
      <div className=" underline p-2">
        <a href="https://kittycat-zeta.vercel.app/Resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
}
