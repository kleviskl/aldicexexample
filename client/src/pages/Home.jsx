import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from 'axios'
import { ImSpinner8 } from 'react-icons/im';
import {  toast } from 'react-toastify';
import FileDownload from 'js-file-download';



const Home = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [outputData, setOutputData] = useState([]);

  const [pickzeit, setPickZeit] = useState("00:00:00");
  const [picks, setPicks] = useState(0);
  const [excelData, setExcelData] = useState([]);

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const downloadFile = async (e) => {
    try {
      e.preventDefault();
      const {data} = await axios({
        url: "http://localhost:4000/download",
        method: 'GET',
        responseType: 'blob',
      })
      FileDownload(data, `output-${fileName}`)
    }catch(error) {
      console.log('Error is: ', error)
    }
  }

  const uploadExcelFile = async () => {
   try {
    setLoading(true)
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    const { data: {status, message} } = await axios.post(
      "http://localhost:4000/upload",
      formData
    );

    if(status === 'SUCCESS') {
      toast.success(message);
      const output = await axios.get("http://localhost:4000/read-upload")
      if(output.data.status === 'SUCCESS') {
        setOutputData(output.data.data);
        setLoading(false);
      }else {
        toast.error(output.data.message)
        setLoading(false);
      }
    }else {
      toast.error(message)
      setLoading(false);
    }

   }catch(error) {
    console.log('Error is: ', error);
    setLoading(false)
   }
  }

  
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="float-right" id="version"><p className="text-indigo-600 font-medium italic md:text-base">Version 1.0</p></div>
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              <section aria-labelledby="cluster-number">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className=" staticpx-4 py-5 sm:px-6">
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
                            <h6 className="font-medium text-xs text-gray-900">
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
                            <input
                              type="file"
                              id="fileUpload"
                              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                              onChange={saveFile}
                            />
                            <button 
                              disabled={loading}
                              className="bg-indigo-500 p-2 rounded-md" 
                              onClick={uploadExcelFile}
                            >
                              {loading ? <ImSpinner8 className="animate-spin" /> : <span className="text-white">Upload</span>}
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
                { loading ? <p>Loading...</p> : outputData && outputData.length ? (<div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                    <h2
                      id="cluster-info"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Cluster Info
                    </h2>
                    <button 
                      className="bg-green-400 px-4 py-2 rounded-md text-white"
                      onClick={downloadFile}
                    >
                      Download
                    </button>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg mb-5">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr className="divide-x divide-gray-200">
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
                          {outputData && outputData.length && outputData.map(
                            (
                              {
                                From,
                                To,
                                Product,
                                "Src Trgt Qty BUoM": tgtQty,
                                "Qty per Minimum Order Quantity": qtyMoq,
                                Picks: picks,
                                "PickTime [min]": pickTime,
                                "Distance [m]": distance,
                                "Walk Time [min]":  walkTime,
                              },
                              index
                            ) => (
                              <tr
                                key={index}
                                className="divide-x divide-gray-200"
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {From}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {To}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {Product}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {tgtQty}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {qtyMoq}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {picks}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {pickTime}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {distance}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {walkTime}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  "unknown"
                                </td>
                              </tr>
                            )
                          )}
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
                          00:00:00
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Pick-und Wegezeit + Sachliche Verteilzeit
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                          00:00:00
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Σ Picks
                          </dt>
                          <dd id="picksNr" className="mt-1 text-3xl font-semibold text-indigo-600">
                            {picks}
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Pickzeit [h:min:s]
                          </dt>
                          <dd id="pickzeit" className="mt-1 text-3xl font-semibold text-indigo-600">
                            {pickzeit}
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Distance [m]
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            0 m
                          </dd>
                        </div>
                        <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Wegezeit [h:min:s]
                          </dt>
                          <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                            00:00:00
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>) : null}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
