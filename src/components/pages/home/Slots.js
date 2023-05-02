import React from 'react';
import { supabase } from '../../../utils/supabase';
import dayjs from 'dayjs';
import { AddSlotPanel } from './Slots/AddSlotPanel';

export default function SlotTable({ slots, loading }) {
  return (
    <div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Slot Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Start Time
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    End Time
                  </th>
                  {/* <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Created At
                  </th> */}
                  {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loading ? (
                  <tr className="animate-pulse pt-4">
                    <td>
                      <div class="h-6 mt-2 mx-2 bg-slate-300 rounded"></div>
                    </td>
                    <td>
                      <div class="h-6 mt-2 mx-2 bg-slate-300 rounded"></div>
                    </td>
                    <td>
                      <div class="h-6 mt-2 mx-2 bg-slate-300 rounded"></div>
                    </td>
                    <td>
                      <div class="h-6 mt-2 mx-2 bg-slate-300 rounded"></div>
                    </td>
                  </tr>
                ) : slots.length === 0 ? (
                  <tr>
                    <td colSpan={4}>
                      <p className="p-2 font-light">No Slots Found</p>
                    </td>
                  </tr>
                ) : (
                  slots.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.slot_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {dayjs(person.start_time).format('DD MMMM YYYY, HH:MM')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {dayjs(person.end_time).format('DD MMMM YYYY, HH:MM')}
                      </td>
                      {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {dayjs(person.created_at).format('DD MMMM YYYY, HH:MM')}
                      </td> */}
                      {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {person.name}</span>
                      </a>
                    </td> */}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Slots = () => {
  const [isPanelOpen, setIsPanelOpen] = React.useState(false);
  const [slots, setSlots] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const fetchSlots = React.useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await supabase.select('slots');
      setSlots(data ?? []);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  return (
    <div>
      <div className="px-6 lg:px-8 mt-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-medium text-gray-900">
                Slots For Community SBT
              </h1>
              <button
                type="button"
                onClick={() => setIsPanelOpen(true)}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Add Slot
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <SlotTable slots={slots} loading={loading} />
            </div>
          </div>
        </div>
        <AddSlotPanel
          open={isPanelOpen}
          fetchSlots={fetchSlots}
          setOpen={setIsPanelOpen}
        />
      </div>
    </div>
  );
};
