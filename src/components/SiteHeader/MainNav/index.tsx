import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { CalendarCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <React.Fragment>
      <Link to="#" className="mr-6 hidden lg:flex">
        <CalendarCheck2 />
        <span className="sr-only">Attendance</span>
      </Link>
      <NavigationMenu className="mr-auto hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/student">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Student
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/subject">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Subjects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </React.Fragment>
  );
};

export default MainNav;
