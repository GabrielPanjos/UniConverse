import MainTemplate from "../templates/MainTemplate";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

export default function Contact() {
  return (
    <MainTemplate>
      <section>
        <PageHeader title={"Contato"}>
          <div className="space-y-6 max-w-xl leading-relaxed mt-6">
            <p>
              Se você tiver dúvidas, sugestões ou quiser entrar em contato,
              sinta-se à vontade para nos enviar uma mensagem.
            </p>

            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pereiradosanjosgabriel@gmail.com"
              >
                <Button>Enviar Email</Button>
              </a>
            </div>
          </div>
        </PageHeader>
      </section>
    </MainTemplate>
  );
}
