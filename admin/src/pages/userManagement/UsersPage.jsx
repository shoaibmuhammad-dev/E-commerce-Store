import { useSearchParams } from "react-router-dom";
import SearchField from "../../components/ui/SearchField";
import UsersTable from "../../components/user-management/UsersTable";
import { useGetUsersQuery } from "../../services/userApi/userApi";
import ErrorPage from "../../components/ui/ErrorPage";
import PageLoader from "../../components/ui/PageLoader";

const UsersPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const { data, isError, isFetching, isLoading } = useGetUsersQuery({
    page: 1,
    limit: 10,
    search: searchTerm,
  });

  const users = data?.users;
  const totalUsers = data?.users?.length;

  if (isError) return <ErrorPage />;

  return (
    <main className="w-full bg-white p-6 border-radius">
      <div className="w-full flex items-center justify-between gap-5">
        <h1 className="text-black page-heading">Users</h1>
        <div className="w-full flex items-center justify-end gap-2">
          <SearchField placeholder={"Search users...."} />
        </div>
      </div>

      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          {totalUsers && totalUsers > 0 ? (
            <UsersTable users={users} />
          ) : (
            <div className="w-full min-h-screen flex items-center justify-center gap-2 px-4">
              <p className="secondary-text">
                {searchTerm
                  ? `Nothing matches "${searchTerm}."`
                  : `No users found.`}
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default UsersPage;
