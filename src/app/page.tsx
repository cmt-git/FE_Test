import { Footer } from "@/components/common/footer/footer.component";
import { Popup } from "@/components/common/popup/popup.component";
import { Banner } from "@/components/index/banner.component";
import { CategoryTab } from "@/components/index/category_tab/category_tab.component";
import { GamesContainer } from "@/components/index/games_container/games_container.component";

export default function Home() {
  return (
    <>
      <Popup />
      <Banner />
      <CategoryTab />
      <GamesContainer />
    </>
  );
}
