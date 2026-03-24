import ProductsTable from "../../components/product-management/ProductsTable";
import SearchField from "../../components/ui/SearchField";

const OrdersPage = () => {
  return (
    <main className="w-full bg-white p-6">
      <div className="w-full flex items-center justify-between gap-5">
        <h1 className="text-black page-heading">Orders</h1>
        <div className="w-full flex items-center justify-end gap-2">
          <SearchField placeholder={"Search orders...."} />
        </div>
      </div>

      <ProductsTable />
    </main>
  );
};

export default OrdersPage;
