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
    else navigate("/");
  };

  return (
    <div className="min-h-dvh bg-white text-[#111111]">
      <Header />

      <main className="pt-[56px] pb-[76px]">
        <Outlet />
      </main>

      <FooterNav active={active} onNavigate={onNavigate} />
    </div>
  );
}