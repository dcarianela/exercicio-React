import { useEffect } from "react";

export default function TXT() {
  useEffect(() => {
    document.title = "TomorrowXTogether";
  }, []);
  return (
    <>
      <section>
        <h2>Tomorrow X Together ⭐</h2>
        <p>
          TXT, também conhecido como Tomorrow X Together, é um grupo sul-coreano
          de cinco membros formado pela Big Hit Music (anteriormente Big Hit
          Entertainment). O grupo é composto por Soobin, Yeonjun, Beomgyu,
          Taehyun e Hueningkai.
        </p>
        <p>
          Eles estrearam em 4 de março de 2019 com o extended play "The Dream
          Chapter: STAR". O nome TXT significa "Tomorrow by Together",
          expressando o desejo de que os membros se unam para construir um
          futuro juntos, segundo o Disney Brasil. O grupo é conhecido por suas
          músicas que abordam temas como crescimento, amadurecimento e amizade.
        </p>
      </section>
    </>
  );
}
