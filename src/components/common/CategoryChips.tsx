import React from "react";

export type CategoryKey = "all" | "art-toy" | "original" | "artist-lab";

type Category = {
  key: CategoryKey;
  label: string;
};

type Props = {
  categories: Category[];
  active: CategoryKey;
  onChange: (key: CategoryKey) => void;
};

export default function CategoryChips({ categories, active, onChange }: Props) {
  return (
    <div className="px-4">
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => onChange(c.key)}
              className={[
                "h-9 px-4 rounded-full text-sm font-medium border transition-colors whitespace-nowrap",
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}