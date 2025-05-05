import Basket from "@/components/Basket";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید",
};
const SettingPage = () => {
  return <Basket/>
};

export default SettingPage;
