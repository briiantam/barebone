import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
      "name": "AI-Enabled Pitch Builder",
      "description": "Craft compelling pitches with AI that understands what investors look for, enhancing your chance of funding success."
    },
    { 
      "name": "Startup-Investor Predictive Matching",
      "description": "Increase matching likelihood and efficiency by utiilizng AI that analyzes startup data and investor preferences."
    },
    {
      "name": "Data Rooms and Due Diligence Chatbots",
      "description": "Securely upload key documents and data for investors to review, with AI chatbots that answer diligence queries."
    },
    {
      "name": "Negotiation Facilitation",
      "description": "Navigate the negotiation process with tools that help you understand and craft term sheets, simplifying legal complexities."
    },
    { 
      "name": "Deal Flow Management",
      "description": "Organize your fundraising journey and track progress across different investor projects in one intuitive platform."
    },
    { 
      "name": "Analytics Dashboard",
      "description": "Gain actionable insights with analytics on funding rounds and market trends to make data-driven decisions."
    },
  ]
  

export default function Example() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="container relative z-2 py-24 sm:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid max-w-2xl mx-auto grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-3 lg:max-w-none">
              <div>
                <h2 className="text-base font-semibold leading-7 text-blue-400">
                  Everything you need for startup fundraising
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  All-in-one platform
                </p>
                <p className="mt-6 text-base leading-7 text-white">
                  We are here to provide a complete and streamlined fundraising experience.
                </p>
              </div>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base font-extralight leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="font-bold text-white">
                      <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-blue-400" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }
  