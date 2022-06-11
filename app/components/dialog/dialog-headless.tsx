/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Button } from "~/components";

const DialogHeadless = Dialog;

export { DialogHeadless };

export const DialogExampleHeadless = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex">
        <Button onClick={openModal} color="primary">
          Open Dialog
        </Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-primary-transparent fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="bg-panel shadow-primary stack-v w-full max-w-md transform gap-4 overflow-hidden rounded-base p-6 text-left align-middle transition-all">
                  <Dialog.Title as="h3" className="m-0">
                    Payment successful
                  </Dialog.Title>
                  <div>
                    <p>
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>
                  <div>
                    <Button onClick={closeModal}>Got it, thanks!</Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
