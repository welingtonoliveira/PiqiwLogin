import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex flex-col">
        <span className="text-lg font-medium leading-tight">PiQi Data</span>
        <span className="text-xs text-gray-600">FUTURE-READY MINDSET</span>
      </div>
    </Link>
  );
}