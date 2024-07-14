"use client"

import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"


const Sidebar = () => {
    const pathname = usePathname()
    const { setTheme, theme} = useTheme()

  return (
    <aside className="sidebar" >
        <div className="flex size-full flex-col gap-8" >
            <Link href={'/'} className="sidebar-logo self-center mr-1"  >
                <Image
                src={"/assets/images/lab_logo.png"}
                alt="logo" 
                width={180}
                height={28}
                />
            </Link>

            <nav className="sidebar-nav" >
                <div>
                    <ul className="sidebar-nav_elements" >
                        {
                            navLinks.slice(0,6).map((link) => {
                                const isActive = link.route === pathname

                                return (
                                    <li
                                    key={link.route}
                                    className={`sidebar-nav_element group ${
                                        isActive ? 'bg-[#CEE5FD] text-white' : 'text-gray-700'
                                    }`}
                                    >
                                        <Link 
                                        className="sidebar-link" 
                                        href={link.route}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul> 
                    
                </div>
{/* 
                <SignedOut>
                <Button asChild className="button bg-purple-gradient bg-cover" >
                <Link href={'/sign-in'} >Login</Link>
                </Button>
            </SignedOut> */}
            </nav>

            <div className="px-4 py-3 bg-kasutamu-400 shadow-sm" >
                <h1>More features coming soon 🚧👷💻</h1>
            </div>

            {/* <div>
                <div className="flex flex-row w-full border border-kasutamu-600
                py-2 rounded-full justify-center gap-3 mb-3" >
                    <button
                    onClick={() => setTheme("light")}
                    className={cn(theme === "light" ? "bg-kasutamu-500" : "bg-white dark:bg-black",
                    "px-6 py-1 rounded-full text-black")}
                    >
                        Light
                    </button>

                    <button
                    onClick={() => setTheme("dark")}
                    className={cn(theme === "dark" ? "bg-kasutamu-500" : "bg-white dark:bg-black",
                    "px-6 py-1 rounded-full text-black")}
                    >
                        Dark
                    </button>
                </div>
            </div> */}

            <div className="border-t border-kasutamu-600 mb-3 pt-4" >
                <p className="text-sm text-[#64748B]" >
                    © 2024 North X Studio
                </p>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar