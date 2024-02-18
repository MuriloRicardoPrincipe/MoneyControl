import { HeaderContainer, HeaderContent, Imagem, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from "../../assets/xp.png";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Imagem src={logoImg} alt="" />

        <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal/>
      </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}