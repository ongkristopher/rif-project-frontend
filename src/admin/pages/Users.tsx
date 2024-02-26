import React from "react";

const Users: React.FC = () => {
  return (
      <div className="w-screen-xl px-4 bg-white min-h-screen">
        <div className="flex flex-col items-right">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">Users</h2>
          <div className="flex justify-between items-center">
            <p className="text-neutral-500 text-xl mt-3">For user management</p>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label className="sr-only">Search</label>
              <div className="relative mt-1 lg:w-72">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 "
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <hr className="h-px my-8 border-yellow-500 border-2" />
        </div>
        <div className="relative overflow-x-auto">
  <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
    {/* Dropdown */}
    <div>
      <button
        id="dropdownActionButton"
        data-dropdown-toggle="dropdownAction"
        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
        type="button"
      >
        <span className="sr-only">Action button</span>
        Action
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdownAction"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Reward
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Promote
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Activate account
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Delete User
          </a>
        </div>
      </div>
    </div>
    {/* Search input */}
    <label htmlFor="table-search" className="sr-only">
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        id="table-search-users"
        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search for users"
      />
    </div>
  </div>
  {/* User Table */}
  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="checkbox-all-search" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Position
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="bg-black-800 border-b  hover:bg-gray-80 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-black-600 bg-gray-100 border-black-300 rounded focus:ring-black-500    focus:ring-2 "
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="sr-only"
                  ></label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/352821016_9573881405985280_623867098206874102_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=fmqqGk02Tn4AX-R22bv&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfBKXL2Zw3_yaGcP718sKI9HFGfia5A220jvZT5t66y8NA&oe=65E222AE"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Lance Enriquez</div>
                  <div className="font-normal text-gray-500">
                    2020145167
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Admin</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                 Active
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2  "
                  />
                  <label
                    htmlFor="checkbox-table-search-2"
                    className="sr-only"
                  ></label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/212452355_2957425344585931_358762392788928651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=XHnIDAMRITkAX84EP8U&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfD2qRTCpBrf0k7ejjaTU5kh_tNxLsavN9OZ73QBVpv3hg&oe=65E0872E"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Neil Camacho</div>
                  <div className="font-normal text-gray-500">
                    2020167888
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Active
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b  hover:bg-gray-50 ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
                  />
                  <label
                    htmlFor="checkbox-table-search-2"
                    className="sr-only"
                  ></label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/279970307_2217365751752200_2184535295422659046_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=_tXBzPOcJY0AX_P7xzg&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfDulBW2aYiBR_6aBlp7429HsJWcPnhHXDyL_Kskwor3Kw&oe=65E06350"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Charles Jose</div>
                  <div className="font-normal text-gray-500">
                    2020178789
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Active
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
                  />
                  <label
                    htmlFor="checkbox-table-search-2"
                    className="sr-only"
                  ></label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">Thomas Lean</div>
                  <div className="font-normal text-gray-500">
                    2020898721
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Active
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-3"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
                  />
                  <label
                    htmlFor="checkbox-table-search-3"
                    className="sr-only"
                  ></label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://images.nightcafe.studio//assets/man-in-suit.jpg?tr=w-1600,c-at_max"
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    Leslie Livingston
                  </div>
                  <div className="font-normal text-gray-500">
                    2020899829
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">User</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                  Deactivated
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit user
                </a>
              </td>
            </tr>
          </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;