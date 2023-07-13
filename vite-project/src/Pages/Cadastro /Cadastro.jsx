import {
  Body,
  Welcome,
  Container,
  Input,
  Input2,
  Infos,
  Image,
  Message,
  Data,
  Email,
  Job,
  Passwords,
  First,
  Second,
  Name,
} from "./Styles";

import foguete from "/src/img/foguete.jpg";
import pc from "/src/img/pc.jpg";

function Cadastro() {
  return (
    <Body>
      <Container>
        <Welcome>
          <Image>
            <img
              src={foguete}
              alt="Foguete"
              title="foguete"
              width="200"
              height="200"
            />
          </Image>
          <Message>
            Bem-Vindo(a)!
            <br />
            <br />
            ficámos muitos felizes em ter você como colaborador(a)! Agora vamos
            seguir com seu cadastro no ponto.
            <br />E lembre-se, foguete não da ré!
          </Message>
        </Welcome>
        <Data>
          <Infos>
            <Image>
              <img src={pc} alt="pc" title="foguete" width="200" height="200" />
            </Image>
            <Email>
              E-mail;
              <Input />
            </Email>
            <Name>
              Nome:
              <Input />
            </Name>
            <Job>
              Cargo:
              <Input />
            </Job>
          </Infos>
          <Passwords>
            <First>
              Senha:
              <Input2 />
            </First>
            <Second>
              Confirmar senha:
              <Input2 />
            </Second>
          </Passwords>
        </Data>
      </Container>
    </Body>
  );
}

export default Cadastro;
