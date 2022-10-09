import CardBarChart from "../../Components/CardBarChart/CardBarChart";
import CountCardMaker from "../../Components/CountCardMaker/CountCardMaker";
import CountCardModel from "../../Components/CountCardModel/CountCardModel";
import SideBar from "../../Components/SideBar/SideBar";

const Home = () => {
  return (
  <>
    <div class="md:pt-16 flex h-fit">
      <SideBar/>
      <div class="md:ml-24">
        <div class="flex flex-col md:flex-row ml-7 md:ml-0">
          <div class="w-[275px] md:w-[350px] md:mr-[20px]">
            <CountCardMaker/>
          </div>
          <div class="w-[275px] md:w-[350px]">
            <CountCardModel/>
          </div>
        </div>
        <div class="w-[275px] md:w-[720px] mt-18 ml-7 md:ml-0">
          <CardBarChart/>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;