import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";

const navigations = [
  {
    id: 1,
    name: "FRM",
    fullName: "Finance Resource Management",
    link: "/user/dashboard/FRM",
  },
  {
    id: 2,
    name: "PMS",
    fullName: "Property Management System",
    link: "/user/dashboard/PMS",
  },
  {
    id: 3,
    name: "POS",
    fullName: "Point of Sale Management",
    link: "/user/dashboard/POS",
  },
  {
    id: 4,
    name: "SCM",
    fullName: "Supply Chain Management",
    link: "/user/dashboard/SCM",
  },
  {
    id: 5,
    name: "HRM",
    fullName: "Human Resource Management",
    link: "/user/dashboard/HRM",
  },
  {
    id: 6,
    name: "CRM",
    fullName: "Customer Relationship Management",
    link: "/user/dashboard/CRM",
  },
  {
    id: 7,
    name: "MRP",
    fullName: "Manufacturing Resource Planning",
    link: "/user/dashboard/MRP",
  },
];

function Sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeClass = (path) =>
    router.pathname === path ? "bg-slate-400 hover:bg-slate-400" : "";

  return (
    <div className="text-white py-7">
      <h1 className="text-lg lg:text-2xl pl-2 pr-3 lg:pl-10 lg:pr-12">
        <Link href="/user/dashboard">Dashboard</Link>
      </h1>
      <div className="mt-8">
        {navigations.map((nav) => (
          <div key={nav.id} className="cursor-pointer">
            <Link href={nav.link} passHref>
              <p
                data-tip={nav.fullName}
                className={`px-3 lg:px-10 py-2 text-sm lg:text-base hover:bg-slate-500 capitalize ${activeClass(
                  nav.link
                )}`}
              >
                {nav.name}
              </p>
            </Link>

            {isMounted && <ReactTooltip type="success" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
