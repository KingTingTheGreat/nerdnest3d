import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import type { Cart, User } from "../types";
import { CartIcon, UserIcon } from "./icons";
import { CartDetails, UserDetails } from "./details";
import { Logo } from "./logo";

export const Header = ({ cart, user }: { cart: Cart; user?: User }) => {
  return (
    <header className="bg-gray-dark p-5 w-100 flex justify-between items-center">
      <Logo />
      <NavigationMenu.Root className="">
        <NavigationMenu.List className="flex gap-[10px] items-center justify-between text-xl">
          <NavigationMenu.Item key="about" className="">
            <NavigationMenu.Link
              className="flex items-center pr-5 text-white hover:text-yellow"
              href="https://github.com/KingTingTheGreat/nerdnest3d"
              target="_blank"
            >
              About us
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item key="cart" className="relative flex">
            <NavigationMenu.Trigger className="">
              <CartIcon cart={cart} />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px]  bg-white border-[1px] border-gray-med rounded-lg z-20">
              <CartDetails cart={cart} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item key="account" className="relative flex">
            <NavigationMenu.Trigger className="">
              <UserIcon />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px] px-4 bg-white border-[1px] border-gray-med rounded-lg z-20">
              <UserDetails user={user} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
};
