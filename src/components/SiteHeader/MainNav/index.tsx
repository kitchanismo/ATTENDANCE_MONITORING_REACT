import React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CalendarCheck2 } from "lucide-react"
import { Link } from "react-router-dom"
import usePermission from "@/hooks/permission.hook"

const MainNav = () => {
  const show = usePermission("m-user")
  return (
    <React.Fragment>
      <Link to="/" className="mr-6 hidden lg:flex">
        <CalendarCheck2 />
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
          {show && (
            <NavigationMenuItem>
              <Link to="/user">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Users
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </React.Fragment>
  )
}

export default MainNav
