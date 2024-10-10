import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import { DataTableDemo } from "./resultTable";

const ResultPage = () => {
  return (
    <div>
      <PageHeadDesc title="Result" desc="Result details" />
      <div className="mx-6 ">
        <DataTableDemo />
      </div>
    </div>
  );
};

export default ResultPage;
