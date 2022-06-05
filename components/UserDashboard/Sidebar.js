import Link from "next/link";
import { useRouter } from "next/router";

const navigations = [
  {
    id: 1,
    name: "Accounting",
    link: "/user/dashboard/accounting",
  },
  {
    id: 2,
    name: "SD/ST",
    link: "/user/dashboard/sd-st",
  },
  {
    id: 3,
    name: "It Dept",
    link: "/user/dashboard/it-dept",
  },
  {
    id: 4,
    name: "HR",
    link: "/user/dashboard/hr",
  },
  {
    id: 5,
    name: "Sales",
    link: "/user/dashboard/sales",
  },
  {
    id: 6,
    name: "R&D",
    link: "/user/dashboard/r&d",
  },
  {
    id: 7,
    name: "Support",
    link: "/user/dashboard/support",
  },
  {
    id: 8,
    name: "Supply Chain",
    link: "/user/dashboard/supply-chain",
  },
  {
    id: 9,
    name: "Marketing",
    link: "/user/dashboard/marketing",
  },
  {
    id: 10,
    name: "Production",
    link: "/user/dashboard/production",
  },
  {
    id: 11,
    name: "CRM",
    link: "/user/dashboard/crm",
  },
];

function Sidebar() {
  const router = useRouter();

  const activeClass = (path) =>
    router.pathname === path ? "bg-slate-400 hover:bg-slate-400" : "";

  return (
    <div className="text-white py-7">
      <h1 className="text-lg lg:text-2xl pl-2 pr-3 lg:pl-10 lg:pr-20">
        <Link href="/user/dashboard">Dashboard</Link>
      </h1>
      <div className="mt-8">
        {navigations.map((nav) => (
          <div key={nav.id} className="cursor-pointer">
            <Link href={nav.link} passHref>
              <p
                className={`px-3 lg:px-10 py-2 text-sm lg:text-base hover:bg-slate-500 capitalize ${activeClass(
                  nav.link
                )}`}
              >
                {nav.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
