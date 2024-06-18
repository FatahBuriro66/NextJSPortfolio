import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav navItems={[{ name: "home", link: "/", icon: <FaHome /> }]} />
      <Hero />
      <Grid />
    </main>
  );
};

export default page;
