import React from "react";

const Prerequisites: React.FC = () => {
  return (
    <>
 <div className="mx-4 my-16 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
  <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
  <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
    <div className="relative my-4 w-56 sm:hidden">
      <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
      <label  className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-yellow-500 peer-checked:ring">Accounts </label>
      <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-yellow-500 hover:text-white">Accounts</li>
        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-yellow-500 hover:text-white">Team</li>
        <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-yellow-500 hover:text-white">Others</li>
      </ul>
    </div>

    <div className="col-span-2 hidden sm:block">
      <ul>
        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-yellow-500 hover:text-yellow-500">Prerequisites</li>
        <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-yellow-500 hover:text-yellow-500">E-Signature</li>

      </ul>
    </div>

    <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">Prerequisites</h1>
      </div>
      <hr className="mt-4 mb-8" />
 


      <div className="mb-10">
 
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Prerequisites;
