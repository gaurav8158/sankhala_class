import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import AdminSlides from "./slider";

const SlidePage = () => {
  return (
    <div>
      <PageHeadDesc title="Slide" desc="Slides details" />
      <div className="mx-6 ">
        <AdminSlides />
      </div>
    </div>
  );
};

export default SlidePage;
