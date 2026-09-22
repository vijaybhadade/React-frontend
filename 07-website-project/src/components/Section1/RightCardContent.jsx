import { ArrowRight } from "lucide-react";

function RightCardContent({ id, intro, tag }) {
  return (
    <>
      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Card Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top Badge */}
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-200 text-xl font-bold text-blue-950">
          {id}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-white">
          <p className="line-clamp-4 text-sm leading-relaxed text-gray-100">
            {intro}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2">
            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
              {tag}
            </button>
            <button
              aria-label="Next step"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightCardContent;