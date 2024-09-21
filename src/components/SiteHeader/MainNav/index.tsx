import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CalendarCheck2 } from 'lucide-react';

const MainNav = () => {
  return (
    <React.Fragment>
      <a href="#" className="mr-6 hidden lg:flex">
        <CalendarCheck2 />
        <span className="sr-only">Attendance</span>
      </a>
      <NavigationMenu className="mr-auto hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Student
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Subjects
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </React.Fragment>
  );
};

export default MainNav;
