const UsersTable = ({ users }) => {
  return (
    <div className="relative mt-10 overflow-x-auto bg-white min-h-screen">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-(--secondary-bg)">
          <tr className="font-medium">
            <th scope="col" className="px-6 py-5">
              User name
            </th>
            <th scope="col" className="px-6 py-5">
              Email
            </th>
            <th scope="col" className="px-6 py-5">
              Status
            </th>
            <th scope="col" className="px-6 py-5">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => {
            return (
              <tr
                key={index}
                className="bg-white text-gray-500 border-b border-gray-200"
              >
                <td className="px-6 py-4 flex items-center gap-2">
                  <img
                    src="/men-sports-wear-shirt.jfif"
                    alt="men-sports-wear-shirt"
                    width={40}
                    height={40}
                    className="border-radius max-h-10 object-cover"
                  />
                  <span className="font-normal whitespace-nowrap">
                    {`${user?.firstName} ${user?.lastName}`}
                  </span>
                </td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">
                  {user?.isBlocked ? "Blocked" : "Active"}
                </td>
                <td className="px-6 py-4">
                  <button type="button" className="text-blue-500 underline">
                    View Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
