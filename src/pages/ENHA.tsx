import { useEffect } from "react";

export default function ENHA() {
  useEffect(() => {
    document.title = "ENHYPEN";
  }, []);
  return (
    <>
      <section>
        <h2>Enhypen 🦇</h2>
        <p>
          ENHYPEN é um grupo sul-coreano formado através do programa de
          sobrevivência "I-LAND" da BELIFT LAB, em colaboração com a HYBE
          Corporation e CJ ENM. O grupo é composto por sete membros: Jungwon,
          Heeseung, Jay, Jake, Sunghoon, Sunoo e Ni-ki.
        </p>
        <p>
          Eles estrearam em novembro de 2020 com o mini-álbum "BORDER: DAY ONE"
          e desde então têm ganhado popularidade com hits como "Bite Me" e
          "Drunk-Dazed". O grupo é conhecido por seus conceitos distintos e
          performances energéticas, combinando elementos de vários gêneros
          musicais.
        </p>
      </section>
    </>
  );
}
