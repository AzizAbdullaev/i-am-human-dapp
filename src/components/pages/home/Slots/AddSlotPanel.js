import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Panel } from '../../../common/panel';

export function AddSlotPanel({ open, setOpen }) {
  return (
    <Panel open={open} onClose={() => setOpen(false)} title="Add Slots">
      <form className="overflow-y-scroll w-full">
        <div className="grid grid-cols-2">
          <div>
            <input placeholder="FInal" />
          </div>
          <div>
            <input placeholder="FInal" />
          </div>
          <div>
            <input placeholder="FInal" />
          </div>
          <div></div>
        </div>
      </form>
    </Panel>
  );
}
