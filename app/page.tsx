import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="bg-black w-[100vw] h-[100vh] px-96 text-white p-4">
      <Navbar />
      <div className="font-semibold text-4xl">
        Hello! I am <span className="text-red-500">Sankhayan</span>
      </div>

      <div className="font-semibold text-2xl p-4 text-red-500">
        Skills
        <ul className="px-12 font-light text-base text-white list-disc">
          <li>Python, JS/TS, C#, Rust, Go, Dart, C++ and other languages</li>
          <li>NextJS, React</li>
          <li>NodeJS, Django, Gin, FastAPI</li>
          <li>Flutter, React Native</li>
          <li>Docker</li>
          <li>Postgres, MongoDB, CockroachDB, Redis</li>
          <li>AWS, GCP, Oracle, Fly.io, Vercel</li>
          <li>Unity, Godot, Blender, Blockbench</li>
          <li>Solana, Ethereum, Algorand</li>
        </ul>
      </div>
      <div className="font-semibold text-2xl p-4 text-red-500">
        Projects
        <ul className="px-12 font-light text-base text-white list-disc">
          <li>
            <a href="#" className="underline px-1">
              Portfolio
            </a>
            - This portfolio site
          </li>
          <li>
            <a
              href="https://github.com/Lioncat2002/starlight"
              className="underline px-1"
              target="_blank"
            >
              Starlight
            </a>
            - A 3D Game Engine written in C++
          </li>
          <li>
            <a
              href="https://parakit.vercel.app/"
              className="underline px-1"
              target="_blank"
            >
              Parakit
            </a>
            - A Text paraphrasing tool
          </li>
          <li>
            <a
              href="https://www.haxmail.buzz/"
              className="underline px-1"
              target="_blank"
            >
              Haxmail
            </a>
            - A Temporary email service
          </li>
        </ul>
      </div>
      <div className="font-semibold text-2xl p-4 text-red-500">
        Links
        <ul className="px-12 font-light text-base text-white list-disc">
          <li>
            <a href="https://github.com/Lioncat2002" className="underline px-1">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sankhayan-bhattacharjee-996336220/"
              className="underline px-1"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/LionCatDev2002"
              className="underline px-1"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
