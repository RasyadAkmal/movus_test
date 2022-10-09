import Logo from "../../Assets/images/logo.png"

export default function Nav() {

  return (
    <div class="md:fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white p-6 border-b border-gray-300">
      <div class="flex-none w-56 flex flex-row items-center">
        <img src={Logo} class="w-24 flex-none" alt="logo"/>
      </div>
    </div>
  );
}