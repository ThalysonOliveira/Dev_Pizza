import Link from "next/link";
import { HeaderContainer, HeaderContent, IconButton, MenuNav } from "./styles";

import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header>
      <HeaderContainer>
        <HeaderContent>
          <Link href={"/dashboard"}>
            <img src="/logo.svg" alt="Logo" width={190} height={60} />
          </Link>

          <MenuNav>
            <Link href={"/category"}>Categoria</Link>

            <Link href={"/product"}>Cardápio</Link>

            <IconButton onClick={signOut}>
              <FiLogOut color="#FFF" size={24} />
            </IconButton>
          </MenuNav>
        </HeaderContent>
      </HeaderContainer>
    </header>
  );
}
