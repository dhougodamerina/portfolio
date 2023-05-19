import AboutMe from "@/components/about";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import PageHeader from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white w-[100%]">
      <div className=" mx-[250px] items-center justify-between font-mono flex flex-col">
        <PageHeader />
        <AboutMe />
        <Projects />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
