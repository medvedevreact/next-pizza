"use client";

import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { debounce } from "lodash";
import { fetchProducts } from "@/services/productService";

interface SearchInputProps {
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchesItems, setSearchesItems] = useState([]);

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };

  const fetchData = useMemo(
    () =>
      debounce(async (value: string) => {
        try {
          const data = await fetchProducts(value);
          setSearchesItems(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, 500),
    []
  );

  useEffect(() => {
    if (searchValue) {
      fetchData(searchValue);
    } else {
      setSearchesItems([]);
    }

    return () => {
      fetchData.cancel();
    };
  }, [searchValue, fetchData]);

  return (
    <div className={cn("w-full max-w-[600px] relative z-20", className)}>
      <input
        type="text"
        className="h-[40px] bg-gray-100 pl-4 w-full rounded-md outline-none z-20 relative"
        placeholder="Введите название..."
        value={searchValue}
        onChange={onChange}
      />
      {searchValue && searchesItems?.length > 0 && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-19"></div>
          <ul className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-md z-20">
            {searchesItems.map((el) => (
              <div
                key={el.id}
                className="px-4 py-2 hover:bg-gray-100 flex items-center gap-4 cursor-pointer rounded-sm"
              >
                <img className="w-[40px]" src={el.imageUrl} alt="" />
                <p>{el.name}</p>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
