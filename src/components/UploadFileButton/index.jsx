import { useRef, useContext } from "react";
import { FileContext } from "../../context/FileContext";
import { useNavigate } from "react-router-dom";

export default function UploadFileButton({ children, setLoading }) {
  const { setFilename } = useContext(FileContext);
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const uploadFile = function (e) {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setFilename(data.name);

    navigate("/download");
  };

  return (
    <>
      <button
        className="border-2 border-primary transition-colors duration-200 hover:border-primaryHover hover:bg-primaryHover text-text2 hover:text-bg text-[14px] rounded-xl2 shadow-gray-500 h-10 w-36 font-semibold"
        onClick={uploadFile}
      >
        {children}
      </button>
      <input type="file" ref={inputRef} onChange={handleFileChange} hidden />
    </>
  );
}
