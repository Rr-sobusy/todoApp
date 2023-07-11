import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, FC } from "react";

export type ManageTodosType = {
  todoTitle: string;
  closeManage: () => void;
  openManage: () => void;
  isManaged: boolean;
};

const ManageTodos: FC<ManageTodosType> = (props) => {
  const { todoTitle, isManaged, openManage, closeManage } = props;

  return (
    <>
      <Transition appear show={isManaged} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeManage}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md -mt-[13rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Manage Todo
                  </Dialog.Title>
                  <div className="mt-6 block">
                    <input
                      value={todoTitle}
                      type="text"
                      className="border-2 p-4 w-full text-gray-900 border outline-none focus:border-[3px] rounded-lg focus:border-slate-400"
                    />
                  </div>

                  <div className="mt-4 flex gap-2 justify-center md:justify-between">
                    <button className="px-6 py-2 text-black border-[1px] hover:bg-[#F3F4F6] border-black font-semibold rounded-lg">
                      Remove to list
                    </button>
                    <button className="px-6 py-2 bg-[#000000] hover:bg-[#2F2F31] text-white font-semibold rounded-lg">
                      Mark as Completed
                    </button>
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

export default ManageTodos;
