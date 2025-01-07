import {
  Navbar,
  Landing,
  About,
  Contact,
  Faq,
  Sponsors,
  Prizes,
  Timeline,
  Tracks,
  Footer,
  Partners
} from "../components";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar className="absolute top-0 left-0 w-full z-50" />
      <Landing />
      <About />
      <Tracks />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Partners />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
