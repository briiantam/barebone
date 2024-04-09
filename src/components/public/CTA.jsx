export default function CTA() {
  return (
    <div className="mx-auto max-w-2xl text-center bg-gray-900 mt-6 px-6 mb-8 sm:mt-6 lg:px-6">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Get funds raised.
        <br />
        Start using Barebone today.
      </h2>
      {/*
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam aliqua proident excepteur commodo do ea.
      </p>
  */}
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/get-started"
          className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Try Our Beta Product
        </a>
        {/* 
        <a href="#" className="text-sm font-semibold leading-6 text-white">
          Learn more <span aria-hidden="true">→</span>
        </a>
*/}
      </div>
    </div>
  );
}
