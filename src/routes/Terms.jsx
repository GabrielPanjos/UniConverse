import MainTemplate from "../templates/MainTemplate";

import PageHeader from "../components/PageHeader";
import TextSection from "../components/TextSection";

export default function Terms() {
  return (
    <MainTemplate>
      <section>
        <PageHeader title={"Termos de Uso"}>
          Ao acessar e utilizar o UniConverse, você concorda com os seguintes
          termos e se compromete a utilizar o serviço de forma legal e
          responsável.
        </PageHeader>

        <ul className="flex flex-col gap-4">
          <TextSection title="Uso do Serviço">
            O UniConverse oferece ferramentas de conversão de arquivos, como a
            conversão de vídeos em áudio, e não se responsabiliza pelo uso
            indevido da plataforma.
          </TextSection>
          <TextSection title="Responsabilidade pelo Conteúdo">
            O usuário declara que possui os direitos sobre os arquivos enviados
            ou que possui autorização para utilizá-los, sendo proibido o envio
            de conteúdos protegidos por direitos autorais sem permissão, bem
            como qualquer material ilegal, ofensivo ou prejudicial.
          </TextSection>
          <TextSection title="Processamento de Arquivos">
            Ao enviar um arquivo, o usuário autoriza o UniConverse a processá-lo
            e armazená-lo temporariamente no servidor com a finalidade exclusiva
            de realizar a conversão solicitada.
          </TextSection>
          <TextSection title="Limitação de Responsabilidade">
            O UniConverse não garante que o serviço estará sempre disponível,
            livre de erros ou funcionando de forma ininterrupta, sendo fornecido
            no estado em que se encontra. Não nos responsabilizamos por perda de
            arquivos, falhas na conversão ou qualquer dano decorrente do uso do
            serviço.
          </TextSection>
          <TextSection title="Disponibilidade">
            O serviço pode ser modificado, suspenso ou encerrado a qualquer
            momento, sem aviso prévio.
          </TextSection>
          <TextSection title="Uso Indevido">
            O uso abusivo da plataforma poderá resultar em restrição ou bloqueio
            de acesso.
          </TextSection>
          <TextSection title="Alterações">
            Estes termos podem ser atualizados a qualquer momento, sendo
            responsabilidade do usuário verificar eventuais alterações.
          </TextSection>
          <TextSection title="Contato">
            Em caso de dúvidas, o usuário pode entrar em contato pelo e-mail
            disponibilizado no site.
          </TextSection>
        </ul>
      </section>
    </MainTemplate>
  );
}
