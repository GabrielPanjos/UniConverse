import MainTemplate from "../templates/MainTemplate";

import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <MainTemplate>
      <section className="max-w-3xl mx-auto">
        <PageHeader title={"Sobre o UniConverse"}>
          O UniConverse é uma plataforma criada com o objetivo de tornar a
          conversão de arquivos simples, rápida e acessível para qualquer
          pessoa. A ideia do projeto é oferecer uma solução prática para lidar
          com diferentes formatos, sem complicações ou etapas desnecessárias.
          <br />
          <br />
          Atualmente, o UniConverse já permite a conversão de vídeos para áudio,
          como a transformação de arquivos MP4 em MP3, utilizando uma API
          própria desenvolvida para garantir desempenho e controle sobre o
          processo.
          <br />
          <br />O projeto está em constante evolução, com planos de suportar
          novos formatos e funcionalidades no futuro. Mais do que uma
          ferramenta, o UniConverse também representa um processo contínuo de
          aprendizado e desenvolvimento, buscando sempre aplicar boas práticas e
          melhorar a experiência do usuário.
        </PageHeader>
      </section>
    </MainTemplate>
  );
}
