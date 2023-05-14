import { Link, Outlet, useParams } from '@remix-run/react';
import drills from '~/../public/drills.json';

const links = [
  'Hair Salon',
  'Barber Shop',
  'Nail Salon',
  'Tattoo Parlor',
  'Massage Parlor',
  'Spa',
];

export default function DrillsLayout() {
  const currentDrill = useParams().drillId;

  console.log(currentDrill);
  return (
    <main className="h-screen drills-layout-grid">
      <header className="header flex items-center border-b  p-4">
        <h1 className="text-3xl">Drills</h1>
      </header>
      <ul className="sidebar border-r p-3 list-none flex flex-col gap-1 overflow-x-auto">
        {Object.entries(drills).map(([slug, { name }]) => (
          <Link
            className={`p-2 hover:bg-secondary-hover active:hover:bg-secondary active:bg-secondary rounded-md ${
              currentDrill === slug ? 'bg-secondary' : ''
            }`}
            key={slug}
            to={slug}
          >
            {name}
          </Link>
        ))}
      </ul>
      <div className="main">
        <Outlet />
      </div>
    </main>
  );
}
