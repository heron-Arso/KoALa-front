import ProductCard from "./ProductCard";

type Item = {
  id: string;
  title: string;
  artist?: string;
  price?: string;
  imageUrl: string;
  badgeText?: string;
};

type Props = {
  items: Item[];
};

export default function HorizontalCardRow({ items }: Props) {
  return (
    <div className="px-4">
      <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((it) => (
          <ProductCard
            key={it.id}
            imageUrl={it.imageUrl}
            title={it.title}
            artist={it.artist}
            price={it.price}
            badgeText={it.badgeText}
            onActionClick={() => console.log("action", it.id)}
            onLikeClick={() => console.log("like", it.id)}
          />
        ))}
      </div>
    </div>
  );
}