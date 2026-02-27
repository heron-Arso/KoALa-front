import HeroCard from "../components/home/HeroCard";
import SectionTitle from "../components/common/SectionTitle";
import HorizontalCardRow from "../components/home/HorizontalCardRow";

export default function Home() {
  // ✅ 지금은 더미. 나중에 H2 붙이면 여기만 교체하면 됨.
  const hero = {
    title: "Own the Art",
    subtitle: "Exclusive Collection",
    imageUrl:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop",
  };

  const trending = [
    {
      id: "t1",
      title: "Luxury Styles",
      subtitle: "New drops",
      imageUrl:
        "https://images.unsplash.com/photo-1520975958225-86f2f82fba17?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "t2",
      title: "AI Portraits",
      subtitle: "Popular now",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "t3",
      title: "Street Mood",
      subtitle: "Hot",
      imageUrl:
        "https://images.unsplash.com/photo-1520975693411-7b62d67b2b73?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const featured = [
    {
      id: "f1",
      title: "Featured Artwork 1",
      subtitle: "Exclusive",
      imageUrl:
        "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "f2",
      title: "Featured Artwork 2",
      subtitle: "Exclusive",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "f3",
      title: "Featured Artwork 3",
      subtitle: "Exclusive",
      imageUrl:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="mx-auto max-w-[430px]">
      <div className="py-4" />

      <HeroCard title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />

      <div className="mt-5" />
      <SectionTitle title="Trending AI Trends" rightText="See all" />
      <div className="mt-3" />
      <HorizontalCardRow items={trending} />

      <div className="mt-6" />
      <SectionTitle title="Featured artworks" rightText="See all" />
      <div className="mt-3" />
      <HorizontalCardRow items={featured} />
    </div>
  );
}