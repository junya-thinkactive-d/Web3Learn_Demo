import React from "react";

import Link from "next/link";

type Props = {
  pathname: string | undefined;
};

type Menu = {
  link: string;
  name: string;
};

const Menu = ({ pathname }: Props) => {
  const menus: Menu[] = [
    {
      link: "/market",
      name: "Market",
    },
    {
      link: "/myLearning",
      name: "My Learning",
    },
    {
      link: "/nft",
      name: "NFT",
    },
  ];

  return (
    <ul className="flex justify-between items-center text-2xl">
      {menus.map((menu, i) => (
        <li key={i}>
          <Link href={`${menu.link}`}>
            <div className="flex justify-center items-center w-56 h-14 text-center rounded-lg hover:border-2 hover:bg-stone-800 hover:text-white hover:duration-300 hover:cursor-pointer">
              {menu.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
