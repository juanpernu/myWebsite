import React from 'react';
import Head from 'next/head';
import Nav from '../../components/nav';

const One = () => (
  <div>
    <Head>
      <title>Juan Pernumian | Blog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav/>
    <div className='hero'>
      <h1 className='title'>La angustia en los tiempos modernos</h1>
      <p className='description'>
        Miércoles, 00:44 hs. Y yo, no puedo dormir. Algunas personas etiquetarían este momento como insomnio,
        desvelo, vigilia, preocupación y, si busco sinónimos, hasta intranquilidad pude encontrar.
      </p>
      <p className='description'>
        Pero, ¿intranquilidad de qué? Justamente eso es lo que me mantiene despierto. Me paso toda la noche pensando
        qué me tiene intranquilo, preocupado o, palabra elegida por excelencia, angustiado. Empecemos por definir
        qué es la angustia; la RAE nos facilita: <i>“Del latín angustĭa (“angostura”, “dificultad”), la angustia es
        la congoja o aflicción. Se trata de un estado afectivo que implica un cierto malestar psicológico, acompañado
        por cambios en el organismo (como temblores, taquicardia, sudoración excesiva o falta de aire).”</i>
      </p>
      <p className='description'>
        Raro, ¿no? Un estado afectivo que, dada por algún motivo psicológico, nos repercute en el sistema orgánico:
        temblores, taquicardia, sudoración o hasta falta de aire. ¡Muy raro! Seguramente pensaste: “a mi nunca me pasó
        eso”, y acá estoy yo, pasando todo eso. ¿Sabes lo feo que se siente la taquicardia, los temblores y la falta
        de aire en el subte? ¿Sentir que te estas por morir? ¿No poder trabajar por eso? ¿Ir a entrenar y tener miedo
        de morir?
      </p>
      <p className='description'>
        Que fácil parece la angustia cuando encontrás la definición. Cuando entendés, gracias a la razón
        <strong> (¡que cosa hermosa la razón!)</strong>, que estás angustiado; seguramente llegues a la siguiente
        pregunta, ¿por qué estoy angustiado? Esa es la pregunta que me tiene despierto hoy.
      </p>
      <p className='description'>
        Estoy en una carrera infinita y circular buscando esa respuesta. Me dijeron que la respuesta no se piensa,
        se siente. Yo, muy escéptico, pregunté “¿Cómo voy a sentir algo que no entiendo qué lo provoca?”. Pero
        pareciera que la angustia no tiene idea sobre la razón, que los sentimientos no hablan un idioma racional,
        que son incontrolables, vienen y van, provocandote asfixia, taquicardia y mareos.
      </p>
      <p className='description'>
        Me dicen que la carrera es un proceso y que la angustia es más común de lo que parece. Ahora entiendo que
        todos la padecemos, en mayor o menor medida. Algunos la viven de forma más temerosa, otros prefieren mirarla
        a la cara. Otros la racionalizamos, los más valientes la sienten.
      </p>
      <p className='description'>
        A estos últimos los felicito, me gustaría aprender de ellos porque, para mí, eligen el camino más difícil
        pero el más sano. En “Sobre el cuidado de sí”, Foucault se apoya en Sócrates cuando nos dice que es un deber
        del ser humano el cuidar de uno mismo. Hoy noto, subjetivamente, que tendemos a perderlo, a perdernos. Vivimos
        en una sociedad donde todo lo que se muestra es ficticio, está pensado; y nuestra personalidad, como también
        los sentimientos, son un producto que tratamos de vender en vidrieras digitales.
        Y yo no soy la excepción de la regla.
      </p>
      <p className='description'>
        Miércoles, 01:26 hs. Sigo sin una respuesta, pero ahora tengo menos miedo. No sé si este texto sirve de algo,
        pero sé que me sirvió sentirlo. La presión en el pecho sigue estando, pero es menos. La angustia no se fue,
        pero por lo menos, ahora sé su definición. No te preocupes por mí, ya  voy a encontrar mi respuesta, porque
        para cada uno, la respuesta es distinta.
      </p>
      <footer>Copyright - Juan Manuel Pernumian®</footer>
    </div>

    <style jsx>{`
      * {
        font-size: 16px;    
      }
      footer {
        font-size: 0.8em;
        padding: 20px 0;
        color: #ddd;
      }
      code {
        color: #ff3860;
        font-size: .875em;
        font-weight: 400;
        padding: .15em .3em;
        background-color: #f5f5f5;
        font-size: 1em;
        border-radius: 5px;
      }
      .hero {
        width: 100%;
        padding: 100px 20px 0;
        color: #333;
      }
      .title {
        margin: 0;
        width: 400px;
        font-size: 2.441em;
      }
      .description {
        font-size: 1em;
        width: 490px;
        line-height: 1.6;
        color: #555;
      }
      .higlight {
        color: #06b4f7;
        line-height: 1.6;
        font-size: 1em;
      }
      i {
        color: #888;
      }

      @media only screen and (max-width: 800px) {
        .hero {
          display: flex;
          flex-direction: column;
          padding: 50px 20px 0;
          width: auto;
        }
        .description {
          font-size: 1em;
          width: auto;
          line-height: 1.6;
          color: #555;
        }
        .title {
          width: 100%;
          font-size: 2em;
        }
        footer {
          position: static;
          padding: 20px 0;
        }
      }
    `}</style>
  </div>
)

export default One;
