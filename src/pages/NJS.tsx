import { useEffect } from "react";

export default function NJS() {
  useEffect(() => {
    document.title = "NEW JEANS";
  }, []);
  return (
    <>
      <section>
        <h2>New Jeans 😺</h2>
        <p>
          NewJeans é um grupo feminino sul-coreano de K-pop formado pela ADOR,
          uma subsidiária da HYBE. O grupo é composto por cinco integrantes:
          Minji, Hanni, Danielle, Haerin e Hyein. Elas são conhecidas por sua
          estética e sonoridade inspiradas nos anos 90 e por suas músicas
          cativantes.
        </p>
        <p>
          O grupo estreou em 2022 com o single "Attention" e rapidamente
          conquistou popularidade, quebrando vários recordes na indústria do
          K-pop.
        </p>
      </section>
    </>
  );
}
