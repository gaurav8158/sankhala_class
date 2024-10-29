import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import { KtseTable } from "./ktsetable";

const KTSEPage = () => {
  return (
    <div>
      <PageHeadDesc title="KTSE" desc="ktse registration form details" />
      <div className="mx-6">
        <KtseTable />
      </div>
    </div>
  );
};

export default KTSEPage;
