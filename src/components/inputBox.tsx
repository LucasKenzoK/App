import { ArrowFatLineRight, Paperclip } from "@phosphor-icons/react";

function InputBox() {
  return (
    <div className="bg-brown-50 rounded-2xl m-5 p-5 text-3xl text-black-50 font-main flex flex-col">
      <div className="pb-2">
        <textarea
          name=""
          id=""
          className="text-2xl min-w-[800px] min-h-[150px] tracking-normal rounded-2xl border-none p-3 first-letter:capitalize block outline-none"
          placeholder="Write down your post"
        ></textarea>
      </div>
      <div className="flex items-end flex-row mt-2">
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

export default InputBox;
