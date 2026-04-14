import PageHeader from "../components/PageHeader";
import UploadFileButton from "../components/UploadFileButton";
import MainTemplate from "../templates/MainTemplate";

export default function Conversor() {
  return (
    <MainTemplate>
      <section className="w-full h-full bg-bg flex flex-col justify-center items-center">
        <PageHeader title={"Uniconverse - Converter vídeo em áudio"}>
          Converta vídeos em áudio de alta qualidade gratuitamente
        </PageHeader>
        <UploadFileButton />
      </section>
    </MainTemplate>
  );
}
