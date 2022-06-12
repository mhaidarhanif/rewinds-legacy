import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TabSimpleExample = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-4"
          role="tablist"
        >
          <li className="-mb-px mr-2 text-center last:mr-0">
            <a
              className={`block rounded-base p-2 font-bold leading-normal ${
                openTab === 1
                  ? `bg-primary-600 text-white`
                  : `bg-white text-primary-600`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Profile
            </a>
          </li>
          <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
            <a
              className={`block rounded-base p-2 font-bold leading-normal ${
                openTab === 2
                  ? `bg-primary-600 text-white`
                  : `bg-white text-primary-600`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Settings
            </a>
          </li>
          <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
            <a
              className={`block rounded-base p-2 font-bold leading-normal ${
                openTab === 3
                  ? `bg-primary-600 text-white`
                  : `bg-white text-primary-600`
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Options
            </a>
          </li>
        </ul>

        <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-base bg-white">
          <div className="flex-auto px-4 py-5">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits.
                </p>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets. Professionally cultivate one-to-one customer
                  service with robust ideas.
                </p>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <p>
                  Efficiently unleash cross-media information without
                  cross-media value. Quickly maximize timely deliverables for
                  real-time schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
