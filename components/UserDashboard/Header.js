import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleLogOut = () => {
    router.push("/user");
  };
  return (
    <div className="py-5 px-5 lg:px-16 flex justify-between lg:justify-end items-center gap-5 lg:gap-16">
      <p className="text-base lg:text-xl text-slate-200">Username</p>
      <button
        className="px-2 lg:px-5 py-1 lg:py-2 text-sm lg:text-base bg-slate-500 hover:bg-slate-400 transition duration-300 text-white font-bold rounded-lg"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;
