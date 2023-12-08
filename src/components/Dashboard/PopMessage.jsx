import React, { useState } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import MessageIcon from "../../assets/General/message.png";
import CloseIcon from "../../assets/General/crossicon.svg";
import Avatar from "../../assets/General/avatar.png";

function PopMessage() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const toggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };

  return (
    <>
      <div className="mb-3 flex gap-3">
        <Popover placement="top-start">
          <PopoverHandler>
            <Button
              className="bg-purple-900 rounded-full p-5"
              onClick={toggleMessage}
            >
              {isMessageOpen ? (
                <img src={CloseIcon} alt="close" className="w-5" />
              ) : (
                <img src={MessageIcon} alt="message" className="w-5" />
              )}
            </Button>
          </PopoverHandler>
          <PopoverContent>
            <span className="w-fit flex flex-row center py-6">
              <img src={Avatar} alt="avatar" className="rounded-full" />
              <div className="flex flex-col message p-4">
                <h4 className="font-bold text-black">Magniya Davies</h4>
                <p>Please Upload the Clear Certificate</p>
              </div>
            </span>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

export default PopMessage;
