import { useMemo, useState } from "react";
import HeroCard from "../components/home/HeroCard";
import SectionTitle from "../components/common/SectionTitle";
import HorizontalCardRow from "../components/home/HorizontalCardRow";
import CategoryChips, { type CategoryKey } from "../components/common/CategoryChips";

type Item = {
  id: string;
  title: string;
  artist?: string;
  price?: string;
  imageUrl: string;
  badgeText?: string;
};

type Section = {
  id: string;
  title: string;
  category: CategoryKey; // 섹션 자체가 어느 대분류에 속하는지
  items: Item[];
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  // ✅ 상단 히어로(더미)
  const hero = {
    title: "Own the Art",
    subtitle: "Exclusive Collection",
    imageUrl:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop",
  };

  // ✅ 대분류(카테고리)
  const categories = [
    { key: "all" as const, label: "All" },
    { key: "art-toy" as const, label: "Art Toy" },
    { key: "original" as const, label: "Original" },
    { key: "artist-lab" as const, label: "Artist Lab" },
  ];

  // ✅ 섹션 데이터 (추후 H2로 교체하면 됨)
  const sections: Section[] = [
    {
      id: "s1",
      title: "Premium Art Toy",
      category: "art-toy",
      items: [
        {
          id: "p1",
          title: "Urban Bear",
          artist: "Lee Minho",
          price: "$245",
          badgeText: "Limited",
          imageUrl:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "p2",
          title: "Winter Chair",
          artist: "Studio KoALa",
          price: "$180",
          imageUrl:
            "https://images.unsplash.com/photo-1549497538-303791108f95?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "s2",
      title: "Original Artworks",
      category: "original",
      items: [
        {
          id: "o1",
          title: "Harbor Texture",
          artist: "Kim Sora",
          price: "$1,200",
          imageUrl:
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "o2",
          title: "Evening Resonance",
          artist: "Park Jun",
          price: "$980",
          imageUrl:
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
    {
      id: "s3",
      title: "Artist Lab",
      category: "artist-lab",
      items: [
        {
          id: "a1",
          title: "Studio Visit",
          artist: "KoALa Team",
          price: "Free",
          badgeText: "New",
          imageUrl:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
        },
        {
          id: "a2",
          title: "Behind the Work",
          artist: "Artist Interview",
          price: "Free",
          imageUrl:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800&auto=format&fit=crop",
        },
      ],
    },
  ];

  // ✅ 카테고리 선택에 따라 섹션을 필터링
  const visibleSections = useMemo(() => {
    if (activeCategory === "all") return sections;
    return sections.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-[430px]">
      <div className="py-4" />

      <HeroCard title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />

      {/* ✅ 대분류 카테고리 칩 */}
      <div className="mt-4" />
      <CategoryChips
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      {/* ✅ 섹션(중분류) 리스트 */}
      <div className="mt-2" />
      <div className="space-y-7 pb-2">
        {visibleSections.map((section) => (
          <div key={section.id}>
            <SectionTitle title={section.title} rightText="See all" />
            <div className="mt-3" />
            <HorizontalCardRow items={section.items} />
          </div>
        ))}
      </div>
    </div>
  );
}