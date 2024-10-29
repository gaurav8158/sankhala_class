import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import { ContactTable } from "./contactTable";

const ContactPage = () => {
  return (
    <div>
      <PageHeadDesc title="Enquiry" desc="Enquiry form details" />
      <div className="mx-6">
        <ContactTable />
      </div>
    </div>
  );
};

export default ContactPage;
