import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
//import { useRoute } from '@tightenco/ziggy';

function rowAction(rowid, props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
 
  const auth = usePage().props as any;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (
        !dropdownOpen ||
        dropdown.current?.contains(target as Node) ||
        trigger.current?.contains(target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!dropdownOpen || key !== "Escape") return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  //log out
  const logout = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.post("/logout");
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex items-center justify-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(true)}
        aria-expanded={dropdownOpen}
      >
        <div className="flex items-center truncate">
          <span className="ml-2 text-sm font-medium truncate group-hover:text-gray-800">
            Actions
          </span>
          <svg
            className="flex-shrink-0 w-3 h-3 ml-1 text-gray-400 fill-current"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      {/* open dropdown if (dropdown = true) */}
      {dropdownOpen && (
        <section className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1">
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
              <Link href={useRoute('users', {rowid})} className="flex items-center px-3 py-1 text-sm font-medium text-green-400 hover:text-green-700">View</Link>
            </div>
            <ul>
              <li>
                <Link
                  className="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  href="/profile"
                >
                  Profile
                </Link>
              </li>
              <li>
                <form onSubmit={logout}>
                  <button
                    className="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                    type="submit"
                  >
                    Sign Out
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

export default rowAction;
