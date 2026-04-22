import DownloadButton from "../components/DownloadButton";
import PageHeader from "../components/PageHeader";
import UploadFileButton from "../components/UploadFileButton";
import MainTemplate from "../templates/MainTemplate";
import { FiDownload } from "react-icons/fi";

import { useContext } from "react";
import { FileContext } from "../context/FileContext";

export default function Download() {
  const { filename } = useContext(FileContext);

  return (
    <MainTemplate>
      <section className="w-full h-full bg-bg flex flex-col justify-center items-center">
        {!filename && (
          <>
            <PageHeader title={"Uniconverse - Converter vídeo em áudio"}>
              Algo deu errado na conversão! Tente novamente.
            </PageHeader>
          </>
        )}
        {filename && (
          <>
            <PageHeader title={"Uniconverse - Converter vídeo em áudio"}>
              Vídeo convertido com sucesso!
            </PageHeader>
            <DownloadButton href={`http://localhost:5000/download/${filename}`}>
              <FiDownload size={18} />
              Download
            </DownloadButton>
          </>
        )}
      </section>
    </MainTemplate>
  );
}
