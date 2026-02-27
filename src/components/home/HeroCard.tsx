import Button from "../common/Button";

type Props = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export default function HeroCard({ title, subtitle, imageUrl }: Props) {
  return (
    <div className="px-4">
      <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/8">
        <div className="relative aspect-[16/10]">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute left-4 bottom-4">
            <div className="text-xs text-white/70">{subtitle ?? "Exclusive Collection"}</div>
            <div className="text-lg font-bold">{title}</div>
            <div className="mt-3">
              <Button size="sm" variant="primary">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}