import DownloadButton from "../components/DownloadButton";
import PageHeader from "../components/PageHeader";
import UploadFileButton from "../components/UploadFileButton";
import MainTemplate from "../templates/MainTemplate";
import { FiDownload } from "react-icons/fi";

import { useContext } from "react";
import { FileContext } from "../context/FileContext";

export default function Conversor() {
  const { filename } = useContext(FileContext);

  return (
    <MainTemplate>
      <section className="w-full h-full bg-bg flex flex-col justify-center items-center">
        <PageHeader title={"Uniconverse - Converter vídeo em áudio"} />
        <DownloadButton href={`http://localhost:5000/download/${filename}`}>
          <FiDownload size={18} />
          Download
        </DownloadButton>
      </section>
    </MainTemplate>
  );
}
