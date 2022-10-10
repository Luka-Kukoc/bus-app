import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import HomeIcon from "../public/Background.svg";
import Image from "next/image";
import ButtonGrid from "../components/ButtonGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <ButtonGrid />
      <BottomNav />
    </>
  );
}
