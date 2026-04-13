import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import YourFriends from "@/components/YourFriends/YourFriends";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner></Banner>
        <YourFriends></YourFriends>
        <Footer></Footer>
        
        
      </main>
    </div>
  );
}
