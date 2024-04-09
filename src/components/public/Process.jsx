import { fundraising_process } from "../../pages/public/PublicContent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Process() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Streamlined Fundraising Process
          </h2>
        </div>

        <div className="mt-16 space-y-16 mx-auto max-w-3xl ">
          {fundraising_process.map((feature) => (
            <div key={feature.name} className="flex">
              <div
                className={classNames(
                  "mt-6 lg:col-start-2 lg:col-span-4 lg:mt-0"
                )}
              >
                <div>
                  <h3 className="text-3xl font-medium text-sky-400">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-2 text-m text-gray-300">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames("flex-auto lg:col-start-7 lg:col-span-5")}
              >
                {/*}
                <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
