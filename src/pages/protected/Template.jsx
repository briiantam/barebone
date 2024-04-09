import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className="xl:pl-72">
          {/* LHS */}
          <main className="lg:pr-96"></main>

          {/* RHS */}
          <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"></aside>
        </div>
      </div>
    </>
  );
}
