import MainTemplate from "../templates/MainTemplate";

import PageHeader from "../components/PageHeader";
import TextSection from "../components/TextSection";

export default function Privacy() {
  return (
    <MainTemplate>
      <section>
        <PageHeader title={"Política de Privacidade"}>
          Esta Política de Privacidade descreve como o UniConverse lida com os
          dados enviados pelos usuários ao utilizar o serviço de conversão de
          arquivos.
        </PageHeader>

        <ul className="flex flex-col gap-4">
          <TextSection title="Coleta de Informações">
            O UniConverse não coleta dados pessoais como nome, e-mail ou
            telefone. No entanto, ao utilizar o serviço, arquivos enviados pelos
            usuários são processados temporariamente no servidor com a única
            finalidade de realizar a conversão solicitada. Durante esse
            processo, informações técnicas básicas, como endereço IP e tipo de
            navegador, podem ser registradas automaticamente para garantir o
            funcionamento adequado do serviço.
          </TextSection>

          <TextSection title="Uso dos Arquivos">
            Os arquivos enviados, como vídeos no formato MP4, são utilizados
            exclusivamente para gerar o arquivo convertido, como um áudio em
            MP3, e não são analisados manualmente nem utilizados para qualquer
            outra finalidade.
          </TextSection>

          <TextSection title="Armazenamento">
            Os arquivos enviados e os arquivos convertidos são armazenados
            temporariamente no servidor apenas pelo tempo necessário para o
            processamento e disponibilização para download, podendo ser
            excluídos automaticamente após um período determinado.
          </TextSection>

          <TextSection title="Compartilhamento">
            O UniConverse não compartilha os arquivos com terceiros, exceto
            quando necessário para cumprimento de obrigações legais.
          </TextSection>

          <TextSection title="Segurança">
            Medidas são adotadas para proteger os dados durante o processamento,
            mas não é possível garantir segurança absoluta em serviços online.
          </TextSection>

          <TextSection title="Responsabilidade do Usuário">
            Ao utilizar o serviço, o usuário reconhece que é responsável pelo
            conteúdo dos arquivos enviados, incluindo questões relacionadas a
            direitos autorais e legalidade do material.
          </TextSection>

          <TextSection title="Alterações">
            Esta Política de Privacidade pode ser atualizada a qualquer momento
            conforme o serviço evolui.
          </TextSection>

          <TextSection title="Contato">
            Em caso de dúvidas, o usuário pode entrar em contato pelo e-mail
            fornecido no site.
          </TextSection>
        </ul>
      </section>
    </MainTemplate>
  );
}
