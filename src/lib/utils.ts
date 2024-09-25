import { User } from "@/types/user.type"
import { clsx, type ClassValue } from "clsx"
import { jwtDecode } from "jwt-decode"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDecodedToken(accessToken?: string) {
  const token = accessToken || localStorage.getItem("accessToken")
  return token ? (jwtDecode(token) as { data: User }) : null
}
