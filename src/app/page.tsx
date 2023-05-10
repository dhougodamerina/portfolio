import AboutMe from "@/components/about";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import PageHeader from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mx-[350px] bg-white">
      <div className=" w-full items-center justify-between font-mono text-sm flex flex-col">
        <PageHeader />
        <AboutMe />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
