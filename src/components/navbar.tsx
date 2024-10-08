"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar } from "@mui/material";

import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.svg";
import Bell from "@/assets/icons/bell.svg";
import Logout from "@/assets/icons/log-out.svg";

import AvatarIcon from "@/assets/avatar.jpeg";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full h-24 shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-between pl-[30px] pr-8">
      <div className="flex gap-[137px] items-center">
        <h1>
          <Image width={100} height={29.1} src={Logo} alt="Logo" />
        </h1>
        <div className="flex gap-8">
          <Link
            href={"/"}
            className={cn(
              "leading-[22.4px] transition-colors",
              pathname === "/" && "text-[#00B9B5] font-bold"
            )}
          >
            Minhas assinaturas
          </Link>
          <Link
            href={"new"}
            className={cn(
              "leading-[22.4px] transition-colors",
              pathname === "/new" && "text-[#00B9B5] font-bold"
            )}
          >
            Nova assinatura
          </Link>
        </div>
      </div>
      <div className="flex gap-[30px] items-center">
        <div className="flex gap-2">
          <div className="flex flex-col items-end">
            <h3 className="font-bold leading-[22.4px]">Joaquina Ramalho</h3>
            <span className="text-[8px] leading-[9.68px] w-fit">
              Empresa do parceiro ltda
            </span>
          </div>
          <Avatar className="w-8 h-8" alt="Avatar" src={AvatarIcon.src} />
        </div>
        <div className="flex gap-4">
          <button>
            <Image src={Bell} alt="Notificações" />
          </button>
          <button>
            <Image src={Logout} alt="Sair" />
          </button>
        </div>
      </div>
    </nav>
  );
};
