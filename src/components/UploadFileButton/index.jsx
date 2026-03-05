import { useRef } from "react";

export default function UploadFileButton() {
  const inputRef = useRef(null);

  const uploadFile = function (e) {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <>
      <button
        className="border-2 border-primary transition-colors duration-200 hover:border-primaryHover hover:bg-primaryHover text-text2 hover:text-bg text-[14px] rounded-md shadow-gray-500 h-10 w-36 font-semibold"
        onClick={uploadFile}
      >
        Escolher arquivo
      </button>
      <input type="file" ref={inputRef} hidden />
    </>
  );
}
