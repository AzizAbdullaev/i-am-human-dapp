import React, { useState } from 'react';
import { Panel } from '../../common/panel';

export const CommunitySbt = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Community SBT
        </h2>
        <p>
          Provide us with your email and we will let you know a slot where we
          call you up for a video call and verify your personhood
        </p>
        <button
          onClick={() => setIsPanelOpen(true)}
          className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
        >
          Apply with email
        </button>
      </div>
      <Panel
        open={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        title={'Apply for an OG SBT here'}
      >
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(email);
            }}
          >
            <label
              for="input-group-1"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="email"
                id="input-group-1"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="name@flowbite.com"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 mt-3 text-white rounded shadow-lg font-medium w-[fit-content] text-sm px-4 py-2 mb-3"
            >
              Sign up with telegram
            </button>
          </form>
        </div>
      </Panel>
    </>
  );
};
