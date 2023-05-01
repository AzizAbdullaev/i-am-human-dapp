import { useState } from 'react';
import { Panel } from '../../../common/panel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function AddSlotPanel({ open, setOpen }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [slotName, setSlotName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Panel open={open} onClose={() => setOpen(false)} title="Add Slots">
      <form onSubmit={onSubmit} className="overflow-y-scroll w-full">
        <div className="grid grid-cols-2 gap-3 flex items-center">
          <div>
            <div>
              <label
                htmlFor="slot-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Slot Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="slot-name"
                  value={slotName}
                  onChange={({ target: { value } }) => setSlotName(value)}
                  required
                  id="slot-name"
                  className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="start-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Start Date{' '}
              <span className="text-xs text-gray-400">
                (imp* all times are in your local time zone)
              </span>
            </label>
            <DatePicker
              selected={startDate}
              showTimeSelect
              showIcon
              className="border p-1 rounded bg-gray-100 mt-1 w-full"
              dateFormat="MMMM d, yyyy h:mm aa"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label
              htmlFor="end-date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              End Date
              <span className="text-xs text-gray-400">
                (imp* all times are in your local time zone)
              </span>
            </label>
            <DatePicker
              selected={endDate}
              showTimeSelect
              className="border p-1 rounded bg-gray-100 mt-1 w-full"
              dateFormat="MMMM d, yyyy h:mm aa"
              onChange={(date) => setEndDate(date)}
            />
          </div>
          <div className="">
            <div className="mt-6 w-[fit-content]">
              <button
                type="submit"
                className="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add Slot
              </button>
            </div>
          </div>
        </div>
      </form>
    </Panel>
  );
}
