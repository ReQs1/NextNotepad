"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative sm:flex-1">
      <label
        htmlFor="search"
        className="absolute left-2 top-1/2 -translate-y-1/2"
      >
        <Search size={18} />
      </label>
      <input
        className="h-10 w-full rounded-lg p-1 pl-8 outline-none"
        id="search"
        type="search"
        placeholder="Search a note"
        autoComplete="off"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}

export default SearchInput;
