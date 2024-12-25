import { CenteredListItemProps } from "@/types";
import { FC } from "react";

const CenteredListItem: FC<CenteredListItemProps> = ({ text, key }) => {
  return (
    <div className="flex justify-center items-center">
      <li
        key={key}
        className="bg-gray-300 w-[40%] p-10 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
      >
        <p className="text-center text-xl">{text}</p>
      </li>
    </div>
  );
};

export default CenteredListItem;
