type Props = {
  title?: string;
  onMenuClick?: () => void;
  onSearchClick?: () => void;
};

export default function Header({ title = "AI", onMenuClick, onSearchClick }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[56px] bg-[#0B0B0D]/90 backdrop-blur border-b border-white/5">
      <div className="mx-auto h-full max-w-[430px] px-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onMenuClick}
          className="h-10 w-10 rounded-full hover:bg-white/5 active:bg-white/10 grid place-items-center"
          aria-label="Open menu"
        >
          {/* 햄버거 아이콘 */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="text-sm font-semibold tracking-wide">{title}</div>

        <button
          type="button"
          onClick={onSearchClick}
          className="h-10 w-10 rounded-full hover:bg-white/5 active:bg-white/10 grid place-items-center"
          aria-label="Search"
        >
          {/* 검색 아이콘 */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}