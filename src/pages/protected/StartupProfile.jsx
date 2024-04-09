import { useState } from "react";
import { Link } from "react-router-dom";

import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className="xl:pl-72 lg:pr-6">
          {/* LHS */}
          <main className="lg:pr-96 sm:px-6 sm:py-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-800">
                Personal details and application.
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">Margot Foster</span>
                    <span className="flex-shrink-0 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Application for
                  </dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">Backend Developer</span>
                    <span className="flex-shrink-0 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">margotfoster@example.com</span>
                    <span className="flex-shrink-0 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Salary expectation
                  </dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">$120,000</span>
                    <span className="flex-shrink-0 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    About
                  </dt>
                  <dd className="mt-1 flex text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                      anim incididunt cillum culpa consequat. Excepteur qui
                      ipsum aliquip consequat sint. Sit id mollit nulla mollit
                      nostrud in ea officia proident. Irure nostrud pariatur
                      mollit ad adipisicing reprehenderit deserunt qui eu.
                    </span>
                    <span className="flex-shrink-0 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-600 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              resume_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              2.4mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex flex-shrink-0 space-x-4">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Update
                          </button>
                          <span className="text-gray-800" aria-hidden="true">
                            |
                          </span>
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              4.5mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex flex-shrink-0 space-x-4">
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Update
                          </button>
                          <span className="text-gray-800" aria-hidden="true">
                            |
                          </span>
                          <button
                            type="button"
                            className="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </main>

          {/* RHS */}
          <main className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"></main>
        </div>
      </div>
    </>
  );
}
