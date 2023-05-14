import { useParams } from '@remix-run/react';
import drills from '~/../public/drills.json';

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke=""
    className="w-6 h-6 stroke-text/70"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

type Drills = Record<
  string,
  {
    name: string;
    description: string;
    duration: number;
    video: string;
    slug: string;
  }
>;

export default function Drill() {
  const drillId = useParams().drillId;

  const drill = (drills as Drills)[drillId ?? ''];

  if (!drillId || !drill) {
    return (
      <h2 className="flex items-center justify-center h-full text-xl">
        Select a valid drill from the sidebar
      </h2>
    );
  }

  console.log(drillId);

  return (
    <div className="flex flex-col p-4 gap-1 overflow-scroll">
      <h1 className="flex items-center gap-1">
        <div className="pr-2">{drill.name}</div>
        <ClockIcon /> <div className="text-text/70">{drill.duration}m</div>
      </h1>
      <div>{drill.description}</div>
      <video className="w-1/2" src="/videos/goofyahhvideo.mp4" controls />
    </div>
  );
}
