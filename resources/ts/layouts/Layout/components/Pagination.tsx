import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

  function getClassName(active) {
    if(active) {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
    } else{
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
    }
  }

  return (
    links.length > 3 && (
      <nav className="mt-3 flex flex-wrap items-center justify-end" aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-sm">
          {links.map((link, key) => (
            link.url === null ?
              (<li
                className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
              >{link.label}</li>) :

              (<Link
                className={getClassName(link.active)}
                href={ link.url }
              >{link.label}</Link>)
          ))}
        </ul>
      </nav>
    )
  );
}
