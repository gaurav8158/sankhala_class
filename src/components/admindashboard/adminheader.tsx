import { ProfileDropdownMenu } from "./profiledropdown";

const AdminHeader = () => {
  return (
    <header className="bg-white p-4 py-6 flex justify-between shadow-md">
      <h1 className="text-xl text-[#0068B4] font-semibold">Admin Dashboard</h1>
      <ProfileDropdownMenu />
    </header>
  );
};

export default AdminHeader;
