import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export default function Index() {
  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
      className="flex flex-col items-center p-16"
    >
      <Link to="/drills" className="bg-secondary rounded-md p-4">
        View Drills
      </Link>
    </div>
  );
}
