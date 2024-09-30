import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CalendarCheck2, Menu } from "lucide-react"
import { Link } from "react-router-dom"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Link to="/" className="mr-6 flex flex-">
          <CalendarCheck2 />
        </Link>
        <div className="grid gap-2 py-6">
          <Link
            to="/student"
            className="flex w-full items-center py-2 text-lg font-semibold"
          >
            Student
          </Link>
          <Link
            to="/subject"
            className="flex w-full items-center py-2 text-lg font-semibold"
          >
            Subjects
          </Link>
          <Link
            to="/user"
            className="flex w-full items-center py-2 text-lg font-semibold"
          >
            Users
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
