import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <section>
        <h2>Qual o significado de home? 🏠</h2>
        <p>
          O lar é um conceito universal, mas a maneira como o entendemos pode
          ser profundamente pessoal. Em inglês, home vai além das dimensões
          físicas de uma casa.
        </p>
        <p>
          Ela se refere ao núcleo de nossa existência diária. Essa palavra é
          carregada de conotações que refletem a busca do ser humano por um
          lugar de segurança, amor e identidade.
        </p>
      </section>
    </>
  );
}
