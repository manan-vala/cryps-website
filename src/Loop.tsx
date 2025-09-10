import LogoLoop from "./components/LogoLoop";
import Icon1 from "./Logos/icon1.svg?react";
import Icon2 from "./Logos/icon2.svg?react";
import Icon3 from "./Logos/icon3.svg?react";

const techLogos = [
  {
    node: <Icon1 className="w-25" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <Icon2 className="w-25" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <Icon3 className="w-25" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
];

// // Alternative with image sources
// const imageLogos = [
//   {
//     src: "/logos/company1.png",
//     alt: "Company 1",
//     href: "https://company1.com",
//   },
//   {
//     src: "/logos/company2.png",
//     alt: "Company 2",
//     href: "https://company2.com",
//   },
//   {
//     src: "/logos/company3.png",
//     alt: "Company 3",
//     href: "https://company3.com",
//   },
// ];

function Loop() {
  return (
    <div className="w-full flex items-center justify-center bg-(--main-bg-cl) font-inter">
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className="w-3/4 flex flex-col items-center justify-between py-10"
      >
        <div className="w-full flex gap-5 items-center justify-between mb-15">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent to-gray-500" />
          <span className="text-white w-3/10 text-center">Supported Tech</span>
          <div className="w-full h-[2px] bg-gradient-to-r from-gray-500 to-transparent" />
        </div>

        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="right"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0E0F11"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default Loop;
