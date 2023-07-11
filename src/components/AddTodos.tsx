import React, { ChangeEventHandler, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type AddTodosProps = {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
  submitHandler: () => void;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  emptyPrompt: boolean;
  value :string
};

const AddTodos: React.FC<AddTodosProps> = (props) => {
  // Props in opening and closing the modal
  const { isOpen, closeModal, submitHandler, changeHandler, emptyPrompt, value } =
    props;

  return (
    <>
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
                    Create New Todo
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="mb-6">
                      <input
                        value={value}
                        onChange={(event) => changeHandler(event)}
                        placeholder="Enter To-do"
                        type="text"
                        id="large-input"
                        className={`block w-full ${
                          emptyPrompt ? "border-red-500" : null
                        } border-2 p-4 text-gray-900 border outline-none focus:border-[3px] rounded-lg focus:border-slate-400`}
                      />
                      <p
                        className={`text-red-500 duration-500 mt-1 mx-2 ${
                          emptyPrompt ? "block" : "hidden"
                        }`}
                      >
                        Please enter a text!
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={submitHandler}
                      className="px-6 py-2 bg-[#000000] hover:bg-[#2F2F31] text-white font-semibold rounded-lg"
                    >
                      Add
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

export default AddTodos;
