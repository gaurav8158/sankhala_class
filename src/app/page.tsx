import { Footer } from "@/components/Footer/page";
import Header from "@/components/Header/page";
import { AlertDialogDemo } from "@/components/Homepage/alerboxCard";
import { Bestcoursecarousel } from "@/components/Homepage/bestcoursecarousel";
import ContactSection from "@/components/Homepage/contactsection";
import CoursesSection from "@/components/Homepage/CoursesSection";
import FAQ from "@/components/Homepage/FAQ";
import FeatureSection from "@/components/Homepage/features";
import Hero from "@/components/Homepage/hero";
import KtseButton from "@/components/Homepage/ktsebutton";
import { Rankcarousal } from "@/components/Homepage/rankcarousal";
import Notification from "@/components/Notification";

export default function Home() {
  return (
    <div>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <Notification />
        <Header />
      </div>

      <div className="mt-36">
        <Hero />
        <AlertDialogDemo />
        <Rankcarousal />
        <FeatureSection />

        <Bestcoursecarousel />
        <CoursesSection />
        <ContactSection />
        <FAQ />
      </div>
      <KtseButton />
      <Footer />
    </div>
  );
}
