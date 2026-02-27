import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import FooterNav from "../components/layout/FooterNav";
import type { NavKey } from "../components/layout/FooterNav";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const active: NavKey =
    location.pathname === "/"
      ? "home"
      : location.pathname.startsWith("/search")
        ? "search"
        : location.pathname.startsWith("/library")
          ? "library"
          : location.pathname.startsWith("/profile")
            ? "profile"
            : "home";

  const onNavigate = (key: NavKey) => {
    if (key === "home") navigate("/");
    else navigate("/"); // TODO: 추후 라우팅 연결
  };

  return (
    <div className="min-h-dvh bg-[#0B0B0D] text-white">
      <Header
        title="AI"
        onMenuClick={() => console.log("menu")}
        onSearchClick={() => console.log("search")}
      />

      <main className="pt-[56px] pb-[76px]">
        <Outlet />
      </main>

      <FooterNav active={active} onNavigate={onNavigate} />
    </div>
  );
}