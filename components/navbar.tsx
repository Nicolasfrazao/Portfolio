"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
//import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  LinkedInIcon,
  GithubIcon,
  DiscordIcon,
  Logo,
  TelegramIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [sentMessage, setSentMessage] = useState("notSent");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  //const pathLocation = usePathname();

  return (
    <NextUINavbar
      className={`sticky top-4 z-50 container mx-auto columns-2 shadow-2xl shadow-black rounded-xl`}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Nicolas Frazao</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className={`text-sm font-normal text-default-600 bg-default-100 hover:bg-green-700 hover:text-medium  ${sentMessage === "sent" ? "bg-blue-800 text-white" : ""}`}
            href=" https://t.me/mrnmfz"
            isExternal={true}
            startContent={
              <TelegramIcon
                className={
                  sentMessage === "sent" ? "text-green-500 " : "text-red-600"
                }
              />
            }
            variant="flat"
            onClick={() => {
              setSentMessage("sent"),
                setTimeout(() => {
                  setSentMessage("notSent");
                }, 40000);
            }}
          >
            {sentMessage === "sent" ? <p>Message Sent!</p> : <p>Message me</p>}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      <div
        className={`bottom-0 left-1/2 translate-x-[-50%] absolute w-0 h-0 dark:bg-gradient-to-r from-slate-900/20 to-gray-700/20`}
      >
        {/*pathLocation === "/" ? (
          <div className="w-0 h-0 bg-transparent opacity-0">Test</div>
        ) : (
          <div className="w-0 h-0 bg-gradient-to-r from-slate-900/20 to-gray-700/20">
            Home
          </div>
        )*/}
      </div>
    </NextUINavbar>
  );
};
