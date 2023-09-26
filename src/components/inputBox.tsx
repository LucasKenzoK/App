import { ArrowFatLineRight, Paperclip } from "@phosphor-icons/react";
import { useState } from "react";

function ButtonPostShow() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="p-5 text-3xl text-black-50 font-main bg-brown-50 h-full">
      <button
        onClick={toggle}
        className="bg-white-50 p-2 mb-2 font-main rounded-xl text-3xl transition duration-300 ease-in-out hover:scale-95"
      >
        Post
      </button>
      {isOpen && <InputBox />}
    </div>
  );
}

function InputBox() {
  return (
    <div className="">
      <div className="">
        <textarea
          name=""
          id=""
          className="text-2xl tracking-normal rounded-2xl border-none p-3 first-letter:capitalize block outline-none h-[500px] w-[100vh]"
          placeholder="Write down your post"
        ></textarea>
      </div>
      <div className="mt-2">
        <button className="bg-white-50 p-1 px-2 font-main rounded-xl text-3xl transition duration-300 ease-in-out hover:scale-95 mr-1">
          <Paperclip size={32} />
        </button>
        <button className="bg-white-50 p-1 px-2 font-main rounded-xl text-3xl transition duration-300 ease-in-out hover:scale-95 ml-1">
          <ArrowFatLineRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default ButtonPostShow;
