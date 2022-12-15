import { useState } from "react";
import MainTopBar from "../../components/TopBar/MainTopBar/MainTopBar";
import IsHaveFeed from "./IsHaveFeed/IsHaveFeed"
import NoFeed from "./NoFeed/NoFeed"

export default function Home() {
  const [isHaveFeed, setIsHaveFeed] = useState(false);

  return (
    <>
      <MainTopBar/>
      {
        isHaveFeed ? <IsHaveFeed /> : <NoFeed/>
      }
    </>
  )
}
