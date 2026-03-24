import ProductsTable from "../../components/product-management/ProductsTable";
import SearchField from "../../components/ui/SearchField";

const ReportsPage = () => {
  return (
    <main className="w-full bg-white p-6">
      <div className="w-full flex items-center justify-between gap-5">
        <h1 className="text-black page-heading">Reports</h1>
        <div className="w-full flex items-center justify-end gap-2">
          <SearchField placeholder={"Search reports...."} />
        </div>
      </div>

      <ProductsTable />
    </main>
  );
};

export default ReportsPage;
