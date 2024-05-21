import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import SkeletonLayout from "@/components/skeleton/UserSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UserCard from "@/components/card/User";
import usePersonLogger from "@/hook/usePersonLogger";
import axios from "axios";
import { UserInfo } from "@/types/person";
const inter = Inter({ subsets: ["latin"] });
type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [buttonsDisabled, setButtonsDisabled] = useState(false); // State to disable/enable all buttons
  const [data, setData] = useState<UserInfo | null>(null);
  usePersonLogger(data, currentTime); ///send the data custom hook

  ///fetch user data function
  const fetchData = async (person: string) => {
    setButtonsDisabled(true); 
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}${person}`
      );

      const responseData = response.data;
      setData(responseData);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
      setButtonsDisabled(false); // Enable all buttons when response is received
    }
  };

  //person handler
  const handleButtonClick = async (person: string) => {
    setSelectedButton(person);
    await fetchData(person);
  };

  return (
    <>
      <main
        className={classNames(
          inter.className,
          "h-screen w-screen",
          "flex flex-col justify-center items-center max-w-4xl mx-auto "
        )}
      >
        <div className={classNames("flex gap-2")}>
          {Object.values(Person).map((person: string) => (
            <Button
              key={person}
              onClick={() => handleButtonClick(person)}
              selected={selectedButton === person}
              className={classNames({
                active: selectedButton === person,
              })}
              disabled={buttonsDisabled} 
            >
              {person}
            </Button>
          ))}
        </div>  

        {loading && <SkeletonLayout />}
        {!loading && error && <p className="mt-5 text text-red-500 "> {error}</p>}
        {!loading && !error && data && (
          <div>
            <UserCard user={data} />
          </div>
        )}
      </main>
    </>
  );
};
