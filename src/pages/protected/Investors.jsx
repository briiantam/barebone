import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { all_investors } from "./ProtectedContent";
import InvestorFilter from "../../components/protected/InvestorFilter";
import { Link } from "react-router-dom";

const top_investors = [
  {
    name: "Alex Johnson",
    title: "Managing Partner",
    industry_focus: "Fintech",
    company: "Sequoia Capital",
    past_investments: "Stripe, Robinhood",
    email: "alex.johnson@sequoia.com",
    telephone: "+1-555-010-2020",
    imageUrl:
      "https://images.unsplash.com/photo-1505247964246-1f0a90443c36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
    investorType: "VC",
  },
  {
    name: "Sophia Chan",
    title: "Angel Investor",
    industry_focus: "Fintech",
    company: "",
    past_investments: "Brex, Nubank",
    email: "sophia.martinez@angelinvestor.com",
    telephone: "+1-555-013-5050",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    investorType: "Angel Investor",
  },
  {
    name: "Samantha Davis",
    title: "Venture Partner",
    industry_focus: "AI / Fintech",
    company: "a16z",
    past_investments: "Coinbase, Robinhood",
    email: "samantha.davis@venturecap.com",
    telephone: "+1-555-011-3030",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    investorType: "VC",
  },
  {
    name: "Michael Roberts",
    title: "Angel Investor",
    industry_focus: "Blockchain / Fintech",
    company: "",
    past_investments: "Coinbase, Revolut",
    email: "michael.roberts@angelinvestor.com",
    telephone: "+1-555-012-4040",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    investorType: "Angel Investor",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Header */}
        {/*
        <div className="xl:pl-72">
          <main>
            <header className="flex items-center justify-between border-b border-gray/5 px-4 py-2 sm:px-6 sm:py-2 lg:px-8">
              <h1 className="text-base font-semibold leading-7 text-gray-900">
                Investors
              </h1>
            </header>
          </main>
        </div>
        */}
        {/* Investor List */}
        <div className="xl:pl-72">
          <header className="items-center border-b justify-between px-4 py-2 sm:px-6 sm:py-4 lg:px-8">
            <h1 className="text-base font-semibold  text-gray-900">
              Top Investors for You
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A list of high-potential investors according to your company's
              characteristics. Enhance your Company Profile for higher matching
              accuracy.
            </p>
          </header>
        </div>
        <div
          className="xl:pl-72 sm:px-6 sm:py-4 mx-auto max-w-7xl" //For future reference: how to make components structured in the middle regardless of the screen size
        >
          {" "}
          <ul
            industry_focus="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-5"
          >
            {top_investors.map((person) => (
              <li
                key={person.email}
                className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <img
                    className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-sm font-medium text-gray-900">
                    {person.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{person.title}</dd>
                    <dt className="sr-only">Industry Focus</dt>
                    <dd className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.industry_focus}
                      </span>
                    </dd>
                    <dt className="sr-only">Past Investments</dt>
                    <dd className="text-sm mt-2 text-gray-500">
                      <dd>Past Investments:</dd>
                      <dd>{person.past_investments}</dd>
                    </dd>
                  </dl>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <Link
                        to={`mailto:${person.email}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <EnvelopeIcon
                          className="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                        Email
                      </Link>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <Link
                        to={``}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-1 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <ChevronRightIcon
                          className="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                        Discover
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Larger Investor List */}
        <div className="xl:pl-72 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="bg-white py-10">
              <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center mb-4">
                  <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                      Investors
                    </h1>
                    <p className="mt-2 text-sm text-gray-600">
                      A list of all the investors on our platform
                    </p>
                  </div>
                </div>
                <div className="">
                  <main className="border-t border-b border-gray/5">
                    <header className=" mt-4 ">
                      <InvestorFilter />
                    </header>
                  </main>
                </div>
                {/* Larger Investor Table */}
                <div className="mt-4 flow-root">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <ul role="list" className="divide-y divide-gray-100">
                        {all_investors.map((investor) => (
                          <li
                            key={investor.email}
                            className="relative flex justify-between gap-x-6 py-5"
                          >
                            <div className="flex min-w-0 gap-x-4">
                              <img
                                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                src={investor.imageUrl}
                                alt=""
                              />
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  <Link to={investor.href}>
                                    <span className="absolute inset-x-0 -top-px bottom-0" />
                                    {investor.name}
                                  </Link>
                                </p>

                                <p className="text-xs leading-6 text-gray-500">
                                  {investor.title}, {investor.company}
                                </p>
                              </div>
                            </div>
                            <div className="flex shrink-0 items-center gap-x-4">
                              <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="mt-1 flex text-sm leading-5 text-gray-900">
                                  <Link
                                    to={`mailto:${investor.email}`}
                                    className="relative truncate hover:underline"
                                  >
                                    {investor.email}
                                  </Link>
                                </p>
                                <p className="text-xs leading-6 text-gray-500">
                                  Industry Focus: {investor.industry_focus}
                                </p>

                                <p className="text-xs leading-6 text-gray-500">
                                  Past Investments: {investor.past_deals}
                                </p>
                              </div>
                              <ChevronRightIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
