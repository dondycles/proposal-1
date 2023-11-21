import { Button, Input } from "@nextui-org/react";
import {
  ConnectWallet,
  ConnectModalInline,
  Web3Button,
} from "@thirdweb-dev/react";
import { FaSearch } from "react-icons/fa";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full gap-2 p-2 shadow bg-foreground/20">
      <div className="flex items-center justify-center h-8 px-4 text-xs font-black rounded-lg text-primary">
        LOGO
      </div>
      <Input
        classNames={{ inputWrapper: "h-0" }}
        startContent={<FaSearch />}
        className="max-w-[300px] ml-auto mr-0"
        size="sm"
      />
      <Button
        color="primary"
        variant="shadow"
        size="sm"
        className="px-8 text-xs font-black"
      >
        CONNECT WALLET
      </Button>
    </nav>
  );
}
