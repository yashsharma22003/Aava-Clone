import { ConnectButton } from "@rainbow-me/rainbowkit";
const Header = () => {
    return (<div className="border-4 border-black h-14 flex items-center ">
        <div className="text-4xl ml-4">
        Aave
        </div>
        <div className="flex justify-end ml-auto mr-5">
        <ConnectButton/>
        </div>
        
        </div>)
}

export default Header;