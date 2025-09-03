import { NavMenu } from '@/components/nav-menu';
import { NAV_LINKS } from '@/lib/constants/navLinks';

export default function Home() {
  return (
    <div>
      <NavMenu data={NAV_LINKS} />
    </div>
  );
}
