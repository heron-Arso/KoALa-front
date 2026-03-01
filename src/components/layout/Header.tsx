export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[56px] bg-white border-b border-gray-100">
      <div className="mx-auto h-full max-w-[430px] px-4 flex items-center justify-between">
        <button className="h-10 w-10 rounded-full hover:bg-gray-100 grid place-items-center">
          ☰
        </button>

        <div className="text-sm font-semibold tracking-wide">
          KoALa
        </div>

        <button className="h-10 w-10 rounded-full hover:bg-gray-100 grid place-items-center">
          🔍
        </button>
      </div>
    </header>
  );
}