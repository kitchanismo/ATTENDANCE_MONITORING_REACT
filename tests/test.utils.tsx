import { AppRoutes as routes } from "@/routes"
import React from "react"

const extractPaths = (routes: React.ReactNode): string[] => {
  const traverseRoutes = (routes: React.ReactNode): string[] => {
    return React.Children.map(routes, (route: any) => {
      if (route.props.children) {
        return [route.props.path || "", ...traverseRoutes(route.props.children)]
      }
      return route.props.path || ""
    }).flat()
  }

  return traverseRoutes(routes)
}

export const protectedRoutes = extractPaths(routes()).filter(
  (path) => path !== "" && path !== "/" && path != "*"
)
