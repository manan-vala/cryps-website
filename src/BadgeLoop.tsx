import LogoLoop from "./components/LogoLoop";
import "./BadgeLoop.css";
import CryptoIcon1 from "./Logos/CryptoIcons/icon1.svg?react";
import CryptoIcon2 from "./Logos/CryptoIcons/icon2.svg?react";
import CryptoIcon3 from "./Logos/CryptoIcons/icon3.svg?react";
import CryptoIcon4 from "./Logos/CryptoIcons/icon4.svg?react";
import CryptoIcon5 from "./Logos/CryptoIcons/icon5.svg?react";
import CryptoIcon6 from "./Logos/CryptoIcons/icon6.svg?react";
import CryptoIcon7 from "./Logos/CryptoIcons/icon7.svg?react";
import CryptoIcon8 from "./Logos/CryptoIcons/icon8.svg?react";
import CryptoIcon9 from "./Logos/CryptoIcons/icon9.svg?react";
import CryptoIcon10 from "./Logos/CryptoIcons/icon10.svg?react";

const techLogos1 = [
  {
    node: <CryptoIcon1 />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <CryptoIcon2 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon3 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon4 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon5 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
];

const techLogos2 = [
  {
    node: <CryptoIcon6 />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <CryptoIcon7 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon8 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon9 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <CryptoIcon10 />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
];

function BadgeLoop() {
  return (
    <div className="w-full h-auto bg-black">
      <div
        style={{ height: "120px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos1}
          speed={60}
          direction="left"
          logoHeight={100}
          gap={40}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos2}
          speed={60}
          direction="right"
          logoHeight={100}
          gap={40}
          pauseOnHover={false}
          scaleOnHover={false}
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default BadgeLoop;
