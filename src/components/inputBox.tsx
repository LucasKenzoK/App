import { ArrowFatLineRight } from "@phosphor-icons/react";

function InputBox() {
  return (
    <div className="">
      <div className="">
        <textarea
          className="rounded-2xl"
          name=""
          id=""
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <div className="mt-2">
        <button className="bg-white-50 p-1 px-2 font-main rounded-xl text-3xl transition duration-300 ease-in-out hover:scale-95 ml-1">
          <ArrowFatLineRight size={32} />
        </button>
      </div>
    </div>
  );
}

export default InputBox;
