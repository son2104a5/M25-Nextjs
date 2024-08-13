import Button from "@/components/Button";
import B4 from "@/pages/B4";
import Image from "next/image";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <main className="p-3">
      <Header></Header>
      <Footer></Footer>
      <strong className="text-2xl">Bài 3:</strong>
      <p className="text-2xl">Họ tên: Nguyễn Đắc Sơn</p>
      <strong className="text-2xl">Bài 4:</strong>
      <B4></B4>
      <strong className="text-2xl">Bài 5:</strong>
      <Button></Button>
      <strong className="text-2xl">Bài 10:</strong>
      <Icon></Icon>
    </main>
  );
}
