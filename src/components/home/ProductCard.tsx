import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  artist?: string;
  price?: string;
  badgeText?: string; // 예: "Limited"
  onActionClick?: () => void; // 우하단 동그라미 버튼
  onLikeClick?: () => void;   // 하트 버튼
};

export default function ProductCard({
  imageUrl,
  title,
  artist,
  price,
  badgeText,
  onActionClick,
  onLikeClick,
}: Props) {
  return (
    <div className="min-w-[180px] max-w-[180px]">
      <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-md">
        {/* 이미지 영역 */}
        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {/* 뱃지 */}
          {badgeText ? (
            <div className="absolute top-2 right-2 rounded-full bg-black/70 text-white text-[10px] px-2 py-1">
              {badgeText}
            </div>
          ) : null}

          {/* 우하단 동그라미 버튼 */}
          <button
            type="button"
            onClick={onActionClick}
            className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white shadow border border-gray-200 grid place-items-center hover:bg-gray-50"
            aria-label="Action"
          >
            <span className="text-base">↗</span>
          </button>
        </div>

        {/* 텍스트 영역 */}
        <div className="p-3">
          <div className="text-sm font-semibold text-gray-900 line-clamp-1">
            {title}
          </div>

          {artist ? (
            <div className="text-[12px] text-gray-500 mt-0.5 line-clamp-1">
              {artist}
            </div>
          ) : null}

          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm font-semibold text-gray-900">
              {price ?? ""}
            </div>

            <button
              type="button"
              onClick={onLikeClick}
              className="h-9 w-9 rounded-full hover:bg-gray-100 grid place-items-center"
              aria-label="Like"
            >
              <span className="text-lg">♡</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}