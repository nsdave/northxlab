"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { TbMenuDeep } from "react-icons/tb";
  

const MobileNav = () => {
    const pathname = usePathname()

  return (
    <header className="header" >
        <Link
        href={'/'}
        className="flex items-center gap-2 md:py-2"
        >
            <Image
            src={"/assets/images/lab_logo.png"} 
            alt="logo"
            width={160}
            height={24}
            />
        </Link>

        <nav className="flex gap-2" >
            <div>
                <UserButton afterSignOutUrl="/" />

                <Sheet>
                    <SheetTrigger>
                        <TbMenuDeep 
                        size={34}
                        className="text-kasutamu-200 cursor-pointer mt-2"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64 z-[999]" >
                        <>
                            <Image 
                            src={"/assets/images/lab_logo.png"}
                            alt="logo"
                            width={152}
                            height={23}
                            />

                            <ul className="header-nav_elements" >
                                {
                                    navLinks.map((link) => {
                                        const isActive = link.route === pathname

                                        return (
                                            <li
                                            key={link.route}
                                            className={`${ isActive && 'bg-kasutamu-500 w-full'}
                                            p-18 flex whitespace-nowrap text-dark-700
                                            `}
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

                            <div className="border-y border-kasutamu-600 py-6 my-5" >
                                <div className="px-4 py-3 bg-kasutamu-400 shadow-sm" >
                                    <h1>More features coming soon 🚧👷💻</h1>
                                </div>
                            </div>

                            <div className="mb-3" >
                                <p className="text-sm text-[#64748B]" >
                                    © 2024 North X Studio
                                </p>
                            </div>
                        </>
                    </SheetContent>
                </Sheet>

            </div>

            {/* <SignedOut>
                <Button asChild className="button bg-purple-gradient bg-cover" >
                    <Link href={'/sign-in'} >Login</Link>
                </Button>
            </SignedOut> */}
        </nav>
    </header>
  )
}

export default MobileNav