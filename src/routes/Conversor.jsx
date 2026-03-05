import PageHeader from "../components/PageHeader";
import UploadFileButton from "../components/UploadFileButton";
import MainTemplate from "../templates/MainTemplate";

export default function Conversor() {
  return (
    <MainTemplate>
      <main className="w-full h-full bg-bg flex flex-col justify-center items-center">
        <PageHeader
          tittle={"Uniconverse - Converter vídeo em áudio"}
          description={
            "Converta vídeos em áudio de alta qualidade gratuitamente"
          }
        />
        <UploadFileButton />
      </main>
    </MainTemplate>
  );
}
