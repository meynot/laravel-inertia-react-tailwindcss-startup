import React from "react";
import { Head, Link, usePage, router } from "@inertiajs/react";
import Layout from "/resources/ts/layouts/Layout";
import Pagination from '/resources/ts/layouts//Layout/components/Pagination';
import RowActions from '../components/rowactions';

function UserIndex({rows, props}) {
  //const rows = usePage().props
  return (
    <Layout>
      <Head title="Users index" />
      <div className="flex flex-wrap header rounded shadow">
        <h1 className="header-text">Users list</h1>
        <Link href="#" className="ml-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          + New
        </Link>
      </div>

      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">DOB</th>
              <th scope="col" className="px-6 py-3">Gender</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
            </thead>
            <tbody>
            {rows.data.map(({ id, name, email, dob, gender }) => (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" id="row-{ id }" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
              </th>
              <td className="px-6 py-4">
                {email}
              </td>
              <td className="px-6 py-4">
                {dob}
              </td>
              <td className="px-6 py-4">
                {gender}
              </td>
              <td className="px-6 py-4">
                <RowActions rowid={id} />
              </td>
            </tr>
              )
            )}
            {rows.data.length === 0 && (
              <tr>
                <td
                  className="px-6 py-4 border-t"
                  colSpan="4"
                >
                  No contacts found.
                </td>
              </tr>
            )}

            </tbody>
          </table>
          <Pagination class="mt-6" links={rows.links} />

        </div>

      </div>

    </Layout>
  )
}
export default UserIndex;
