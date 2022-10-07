import CardBarChart from "../../Components/CardBarChart/CardBarChart";
import CountCardMaker from "../../Components/CountCardMaker/CountCardMaker";
import CountCardModel from "../../Components/CountCardModel/CountCardModel";
import SideBar from "../../Components/SideBar/SideBar";

const Home = () => {
  return (
  <>
    <div class="pt-16 flex h-screen">
      <SideBar/>
      <div class="ml-24">
        <div class="flex">
          <div class="w-[350px] mr-[20px]">
            <CountCardMaker/>
          </div>
          <div class="w-[350px]">
            <CountCardModel/>
          </div>
        </div>
        <div class="w-[720px] h-[1000px] mt-18">
          <CardBarChart/>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;