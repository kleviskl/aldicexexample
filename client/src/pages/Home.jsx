import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <section aria-labelledby="cluster-number">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="cluster-number"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Cluster Number
                    </h2>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="grid md:grid-cols-5 gap-6">
                      <div className="col-span-2">
                        <div className="bg-gray-100 rounded-lg">
                          <div className="float-right p-1 bg-indigo-600 hover:bg-indigo-700 rounded-tr-lg rounded-bl-lg cursor-pointer">
                            <h6 className="font-medium text-xs text-gray-900 text-white">
                              Zone x
                            </h6>
                          </div>
                          <div className="p-5">
                            <div className="flex items-center">
                              <input
                                type="text"
                                name="cluster-number"
                                id="cluster-number"
                                placeholder="Cluster Number"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="relative flex items-start ml-3">
                                <div className="flex items-center h-5">
                                  <input
                                    id="test"
                                    name="test"
                                    type="checkbox"
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-2 text-sm">
                                  <label
                                    htmlFor="test"
                                    className="font-medium text-gray-700"
                                  >
                                    Test
                                  </label>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Multiple Warehouse Task
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="sachliche-verteilzeit"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Sachliche Verteilzeit[%]
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="sachliche-verteilzeit"
                                id="sachliche-verteilzeit"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="order-at"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Orderat
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="order-at"
                                id="order-at"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="geschwindigkeit"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Geschwindigkeit[m/min]
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="geschwindigkeit"
                                id="geschwindigkeit"
                                autoComplete="address-level2"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="cluster-info">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="cluster-info"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Cluster Info
                    </h2>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mb-5">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              From Location
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              To Location
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Product
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Tgt Qty
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Qty MOQ
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Picks
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Pick Time [min]
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Distance [m]
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Walk Time [min]
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Loading Weight [Kg]
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((row, index) => (
                            <tr>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Pick-und Wegezeit
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            11:24:30
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Pick-und Wegezeit + Sachliche Verteilzeit
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            11:24:30
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Σ Picks
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            45
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Pickzeit [h:min:s]
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            11:24:30
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Distance [m]
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            35 m
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Wegezeit [h:min:s]
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            11:24:30
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
