import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CalendarCheck2, Menu } from 'lucide-react';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <a href="#" className="mr-6 flex flex-">
          <CalendarCheck2 />
        </a>
        <div className="grid gap-2 py-6">
          <a
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
          >
            Student
          </a>
          <a
            href="#"
            className="flex w-full items-center py-2 text-lg font-semibold"
          >
            Subjects
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
