// src/components/common/SectionTitle.tsx

type Props = {
  title: string;
  rightText?: string;
  onRightClick?: () => void;
};

export default function SectionTitle({ title, rightText, onRightClick }: Props) {
  return (
    <div className="flex items-end justify-between px-4">
      <h2 className="text-sm font-semibold text-white/90">{title}</h2>

      {rightText ? (
        <button
          type="button"
          onClick={onRightClick}
          className="text-[11px] text-white/50 hover:text-white/75"
        >
          {rightText}
        </button>
      ) : null}
    </div>
  );
}