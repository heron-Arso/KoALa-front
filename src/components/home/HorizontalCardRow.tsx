type Item = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

type Props = {
  items: Item[];
};

export default function HorizontalCardRow({ items }: Props) {
  return (
    <div className="px-4">
      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it) => (
          <div
            key={it.id}
            className="min-w-[140px] max-w-[140px] rounded-2xl overflow-hidden bg-white/5 border border-white/8"
          >
            <div className="aspect-[4/3] bg-black/20">
              <img src={it.imageUrl} alt={it.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold line-clamp-1">{it.title}</div>
              <div className="text-[11px] text-white/55 line-clamp-1 mt-1">
                {it.subtitle ?? "AI Generated"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}