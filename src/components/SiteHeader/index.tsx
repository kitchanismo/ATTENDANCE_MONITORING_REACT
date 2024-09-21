import UserNav from './UserNav';
import ModeToggle from './ModeToggle';
import MainNav from './MainNav';
import MobileNav from './MobileNav';

const SiteHeader = () => {
  return (
    <header className="w-full">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="group flex ml-auto gap-2">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
