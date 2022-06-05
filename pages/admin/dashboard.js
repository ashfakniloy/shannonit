import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// const API_URL = "https://boolalgback.herokuapp.com/getinfo";

const data = [
  {
    id: 1,
    name: "John",
    email: "john@email.com",
    number: "0123456",
    service: "random",
  },
  {
    id: 2,
    name: "John",
    email: "john@email.com",
    number: "0123456",
    service: "random",
  },
  {
    id: 3,
    name: "John",
    email: "john@email.com",
    number: "0123456",
    service: "random",
  },
  {
    id: 4,
    name: "John",
    email: "john@email.com",
    number: "0123456",
    service: "random",
  },
];

function DashBoardPage() {
  const [user, setUser] = useState(true);
  const [usersData, setUsersData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setUsersData(data);
    //   const fetchData = async () => {
    //     const res = await fetch(`${API_URL}/getinfo`, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: localStorage.getItem("token-dnata"),
    //       },
    //     });
    //     const data = await res.json();
    //     setUsersData(data.jane);

    //     data.jane ? setUser(true) : setUser(false);
    //   };
    //   fetchData();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token-dnata");
    router.push("/admin");
  };

  return (
    <div>
      {user ? (
        <div className="">
          <div className="bg-custom-gray flex justify-between items-center py-4 px-3 lg:px-[300px]">
            <div className="">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-100">
                Dashboard
              </h1>
            </div>
            <div>
              <button
                className="bg-custom-gray3 hover:bg-gray-600 scale-90 lg:scale-100 text-gray-100 py-2 px-4 font-bold rounded-lg"
                onClick={handleLogOut}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-custom-gray text-2xl lg:text-3xl font-bold">
              Users Info
            </h1>

            <div className="mt-10 lg:mt-14 scale-90 origin-top md:scale-100">
              <table className="table-auto border-collapse border border-custom-gray3 text-center text-xs lg:text-base">
                <thead className="bg-custom-gray text-gray-100">
                  <tr>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-gray3">
                      Name
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-gray3">
                      Email Address
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-gray3">
                      Phone No
                    </th>
                    <th className="p-2 lg:px-20 lg:py-5 border-collapse border border-custom-gray3">
                      Service
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {usersData &&
                    usersData.map((data, i) => (
                      <tr key={i} className="even:bg-gray-200">
                        <td className="p-2 lg:p-5 border-collapse border border-custom-gray3">
                          {data.name}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-gray3">
                          {data.email}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-gray3">
                          0{data.number}
                        </td>
                        <td className="p-2 lg:p-5 border-collapse border border-custom-gray3">
                          {data.service}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DashBoardPage;
