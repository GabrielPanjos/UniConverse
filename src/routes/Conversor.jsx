import { useState } from "react";
import PageHeader from "../components/PageHeader";
import UploadFileButton from "../components/UploadFileButton";
import MainTemplate from "../templates/MainTemplate";

export default function Conversor() {
  const [loading, setLoading] = useState(false);

  return (
    <MainTemplate>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <PageHeader title={"Uniconverse - Converter vídeo em áudio"}>
          Converta vídeos em áudio de alta qualidade gratuitamente
        </PageHeader>
        {loading && (
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full" />
            <p>Convertendo vídeo...</p>
          </div>
        )}
        {!loading && (
          <UploadFileButton setLoading={setLoading}>
            Escolher Arquivo
          </UploadFileButton>
        )}
      </section>
    </MainTemplate>
  );
}
