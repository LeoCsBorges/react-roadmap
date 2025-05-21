import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Content'
import { ContentContainer } from '@/components/ui/ContentContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import reducerImg from '@/assets/images/useReducer_breakdown.png'

export function HooksPage() {
    return (
        <ContentContainer>
            <H1>React Hooks</H1>

            {/* intro */}
            <article>
              <H2>Introdução</H2>
              <Text>
              Os Hooks no React foram introduzidos na versão 16.8 com o objetivo de permitir o uso de estado e outras funcionalidades do React em componentes funcionais, sem a necessidade de escrever classes. Antes dos Hooks, o gerenciamento de estado e o uso do ciclo de vida dos componentes estavam restritos aos componentes baseados em classe, o que muitas vezes deixava o código mais verboso e difícil de reutilizar. Com os Hooks, é possível, por exemplo, utilizar o useState para criar estados locais e o useEffect para lidar com efeitos colaterais, como chamadas à API ou manipulação do DOM, tudo isso dentro de uma função simples.
              </Text>
              <Text>
              Além dos Hooks mais básicos, como useState e useEffect, o React também oferece Hooks adicionais como useContext, useReducer, useMemo, useCallback e useRef, que ajudam a resolver problemas mais específicos e a otimizar o desempenho da aplicação. Também é possível criar Custom Hooks, permitindo a extração de lógica reutilizável em funções separadas, o que contribui para uma melhor organização e manutenção do código. O uso de Hooks transformou a forma como os desenvolvedores escrevem componentes em React, promovendo um código mais limpo, conciso e com maior reaproveitamento.
              </Text>
            </article>

            {/* useState */}
            <article>
                <H2>1. useState</H2>
                <Text>
                O useState é um dos Hooks mais básicos e mais utilizados no React. Ele permite que você adicione estado local a um componente funcional, ou seja, você pode armazenar e atualizar valores que pertencem apenas àquele componente, como contadores, textos digitados pelo usuário, dados de formulários, entre outros. A sintaxe básica do useState é:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const [valor, setValor] = useState(valorInicial);`
                } </SyntaxHighlighter>
                <Text>
                Aqui, <TextStrong>valor</TextStrong> é a variável de estado, <TextStrong>setValor</TextStrong> é a função que atualiza esse estado, e <TextStrong>valorInicial</TextStrong> é o valor inicial que você quer atribuir a esse estado (pode ser um número, string, booleano, array, objeto etc.).
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>
            Clique aqui
        </button>
        </div>
    );
}`
                } </SyntaxHighlighter>
                <Text>
                Neste exemplo, contador começa com o valor 0. Toda vez que o botão é clicado, setContador é chamado com contador + 1, atualizando o valor na tela. O React re-renderiza o componente sempre que o estado muda, refletindo a nova informação na interface. 
                </Text>
            </article>

            {/* useEffect */}
            <article>
                <H2>2. useEffect</H2>
                <Text>
                Vamos supor que temos esses dois componentes, onde o componente pai gerencia o estado com o Hook useState do React, e seu componente filho consome esse estado e o modifica por meio de um callback de manipulação de eventos (event handler):
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import * as React from 'react';

const App = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return <Toggler toggle={toggle} onToggle={handleToggle} />;
};

const Toggler = ({ toggle, onToggle }) => {
  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};

export default App;`
                } </SyntaxHighlighter>
                <Text>
                Com base na boolean flag com estado, vinda do componente pai, o componente filho renderiza "Hello React" de forma condicional. Agora, vamos nos aprofundar no Hook useEffect do React. Essencialmente, o useEffect executa uma função com side-effect sempre que você quiser que ela seja executada. Ele pode rodar apenas quando o componente é montado (mounts), quando o componente renderiza, ou somente quando o componente é re-renderizado (re-renders), e assim por diante. Vamos passar por vários exemplos de useEffect para demonstrar seu uso.
                </Text>

                <H3>2.1. useEffect: sempre</H3>
                <Text>
                Vamos ver o primeiro exemplo do Hook useEffect do React, onde passamos a função com side-effect como argumento:   
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  React.useEffect(() => {
    console.log('I run on every render: mount + update.');
  });

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                Esse é o uso mais direto do useEffect, onde passamos apenas um argumento — uma função. Essa função será executada em toda renderização — ou seja, ela roda na primeira renderização do componente (também chamada de <TextStrong>mount</TextStrong> ou montagem do componente) e em todas as re-renderizações do componente (também chamadas de <TextStrong>update</TextStrong> ou atualização do componente).
                </Text>

                <H3>2.2. useEffect: somente montagem</H3>
                <Text>
                Se você quiser executar o Hook useEffect do React apenas na primeira renderização de um componente (também chamado de only on mount), então pode passar um segundo argumento para o useEffect:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  React.useEffect(() => {
    console.log('I run only on the first render: mount.');
  }, []);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                O segundo argumento — neste caso, um array vazio — é chamado de dependency array (array de dependências). Se o dependency array estiver vazio, a função com side-effect usada no Hook useEffect do React não possui dependências, ou seja, ela será executada apenas na primeira vez que o componente for renderizado.
                </Text>

                <H3>2.3. useEffect: montagem + atualização (mount + re-render)</H3>
                <Text>
                Anteriormente, você aprendeu sobre o dependency array (array de dependências) do Hook useEffect do React. Esse array pode ser usado para executar a função com side-effect do useEffect somente se uma determinada variável mudar:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  React.useEffect(() => {
    console.log('I run only if toggle changes (and on mount).');
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                Agora, a função com side-effect para esse componente React será executada apenas quando a variável no array de dependências mudar. No entanto, vale lembrar que a função também é executada na primeira renderização do componente (mount). De qualquer forma, o dependency array pode crescer, afinal ele é um array, então é possível passar mais de uma variável. Vamos ver isso com a seguinte adição ao nosso componente:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  const [title, setTitle] = React.useState('Hello React');

  React.useEffect(() => {
    console.log('I still run only if toggle changes (and on mount).');
  }, [toggle]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />

      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>{title}</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                A função com side-effect no Hook useEffect do React ainda será executada apenas quando uma das variáveis no array de dependências mudar. Mesmo que o componente seja atualizado sempre que digitamos algo no elemento input, o useEffect não será executado nessa atualização. Somente se incluirmos essa nova variável no array de dependências, a função com side-effect será executada para ambas as atualizações:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  const [title, setTitle] = React.useState('Hello React');

  React.useEffect(() => {
    console.log('I run if toggle or title change (and on mount).');
  }, [toggle, title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />

      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>{title}</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                No entanto, nesse caso, você poderia simplesmente omitir o segundo argumento — o dependency array — do useEffect, pois somente essas duas variáveis disparam uma atualização no componente. Então, ao não passar o segundo argumento, a função com side-effect será executada em todas as re-renderizações, de qualquer forma. Existem vários casos de uso para executar o useEffect do React com base em uma variável atualizada. Por exemplo, após atualizar o estado, pode ser interessante disparar uma função de callback com base nessa mudança de estado.
                </Text>

                <H3>2.4. useEffect: somente atualização (re-render)</H3>
                <Text>
                Se você prestou atenção na seção anterior, já sabe que o Hook useEffect do React, com um array de dependências, também é executado na primeira renderização do componente. Mas e se você quiser que esse effect seja executado somente na atualização? Podemos alcançar isso usando o Hook useRef do React para uma variável de instância:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      console.log('I run only if toggle changes.');
    } else {
      didMount.current = true;
    }
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                Quando a função com side-effect é executada pela primeira vez na montagem (mount), ela apenas altera a variável de instância e não executa os detalhes da implementação (neste caso, o console.log) do side-effect. Somente na próxima vez que o side-effect for executado (na primeira re-renderização / atualização do componente), a lógica real da implementação será executada. 
                </Text>

                <H3>2.5. useEffect: somente uma vez</H3>
                <Text>
                Como você viu, é possível executar a função do Hook useEffect do React somente uma vez, passando um array de dependências vazio. Isso faz com que a função seja executada apenas na primeira renderização do componente. Mas e se você quiser executar a função do effect em outro caso, como por exemplo, somente uma vez quando uma variável for atualizada? Vamos ver:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const Toggler = ({ toggle, onToggle }) => {
  const calledOnce = React.useRef(false);

  React.useEffect(() => {
    if (calledOnce.current) {
      return;
    }

    if (toggle === false) {
      console.log('I run only once if toggle is false.');

      calledOnce.current = true;
    }
  }, [toggle]);

  return (
    <div>
      <button type="button" onClick={onToggle}>
        Toggle
      </button>

      {toggle && <div>Hello React</div>}
    </div>
  );
};`
                } </SyntaxHighlighter>
                <Text>
                Assim como antes, implementamos isso com uma variável de instância usando o Hook useRef do React para rastrear informações não relacionadas ao estado. Quando nossa condição é atendida, como por exemplo, quando a boolean flag é definida como false, lembramos que chamamos a função do effect e não a chamamos mais.
                </Text>

                <H3>2.6. useEffect: Limpeza</H3>
                <Text>
                Às vezes, você precisa fazer o cleanup (limpeza) do seu effect do Hook useEffect do React quando um componente é re-renderizado. Felizmente, isso é um recurso embutido no useEffect, retornando uma função de limpeza na função do effect do useEffect. O exemplo a seguir mostra uma implementação de timer usando o Hook useEffect do React:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import * as React from 'react';

const App = () => {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 1), 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return <div>{timer}</div>;
};

export default App;`
                } </SyntaxHighlighter>
                <Text>
                Quando o componente é renderizado pela primeira vez, ele configura um intervalo com o Hook useEffect do React, que dispara a cada 1 segundo. Assim que o intervalo dispara, o estado do timer é incrementado em 1. A mudança de estado inicia uma re-renderização do componente. Como o estado do timer foi alterado, sem a função de limpeza, a função do useEffect seria executada novamente e configuraria outro intervalo. Isso não seria o comportamento desejado, pois precisaríamos de apenas um intervalo no final das contas. É por isso que o retorno da função do useEffect limpa o intervalo antes que o componente seja atualizado e, em seguida, o componente configura um novo intervalo. Essencialmente, o intervalo fica rodando por apenas um segundo antes de ser limpo nesse exemplo.
                </Text>

                <H3>2.7. useEffect: Desmontagem</H3>
                <Text>
                A função de limpeza do Hook useEffect também é executada quando um componente é desmontado (unmount). Isso faz sentido para intervalos ou qualquer outro objeto que consome memória, que deve ser interrompido depois que o componente não estiver mais presente. No exemplo a seguir do useEffect, alteramos o exemplo anterior para uma nova versão:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import * as React from 'react';

const App = () => {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setTimer((currentTimer) => currentTimer + 1),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return <div>{timer}</div>;
};

export default App;`
                } </SyntaxHighlighter>
                <Text>
                Agora, estamos utilizando a capacidade do Hook useState de aceitar uma função em vez de um valor para atualizar o estado. Essa função tem como parâmetro o timer atual. Portanto, não precisamos mais fornecer o timer de fora, e podemos rodar o effect apenas uma vez na montagem do componente (usando um array de dependências vazio). É por isso que a função de limpeza aqui é chamada somente quando o componente é desmontado (devido à transição de página ou à renderização condicional).
                </Text>
            </article>

            {/* useRef */}
            <article>
                <H2>3. useRef</H2>
                <Text>
                O useRef é um Hook do React que te permite acessar ou manter uma referência mutável que não causa re-renderização do componente quando alterada. É muito usado para acessar elementos do DOM diretamente, guardar valores persistentes entre renderizações (como uma variável "global" que não desaparece), evitar reexecução de efeitos em useEffect
                </Text>

                <H3>3.1. useRef: Acessando o DOM</H3>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focar no input</button>
    </>
  );
}`
                } </SyntaxHighlighter>

                <H3>3.2. useRef: Guardar valores entre renderizações</H3>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useState, useRef, useEffect } from "react";

function RenderCount() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <>
      <h1>Você clicou {count} vezes</h1>
      <h2>O componente renderizou {renderCount.current} vezes</h2>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </>
  );
}`
                } </SyntaxHighlighter>
                
                <H3>3.3. useRef: controlar efeitos que executem apenas após a montagem</H3>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useEffect, useRef, useState } from "react";

function UpdateLogger({ value }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    console.log("O valor foi atualizado:", value);
  }, [value]);

  return <div>{value}</div>;
}`
                } </SyntaxHighlighter>
            </article>

            {/* useCallback */}
            <article>
              <H2>4. useCallback</H2>
              <Text>
              O Hook useCallback() do React serve para memorizar uma função, evitando que ela seja recriada a cada renderização do componente. Isso é especialmente útil quando essa função é passada como prop para um componente filho que usa React.memo, pois evita re-renderizações desnecessárias. Por exemplo, imagine um contador simples:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useState, useCallback } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}`
              } </SyntaxHighlighter>
              <Text>
              Neste caso, a função incrementar só é criada uma vez, pois o array de dependências está vazio ([]). Isso significa que, mesmo que o componente Contador re-renderize, a função incrementar continua sendo a mesma — economizando processamento e evitando renderizações desnecessárias em filhos. Agora veja um exemplo mais completo, onde essa função incrementar é passada para um componente filho memoizado com React.memo:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`import { useState, useCallback, memo } from "react";

const Botao = memo(({ onClick }) => {
  console.log("Botão renderizado");
  return <button onClick={onClick}>Clique</button>;
});`
              } </SyntaxHighlighter>
              <Text>
              O componente Botao só será re-renderizado se a prop onClick mudar. Se não usássemos useCallback, a função incrementar seria recriada em cada renderização do componente pai, fazendo com que o botão re-renderizasse à toa. Com useCallback, isso é evitado:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p>Texto: {texto}</p>
      <p>Contador: {contador}</p>
      <Botao onClick={incrementar} />
    </>
  );
}`
              } </SyntaxHighlighter>
              <Text>
              Nesse exemplo, alterar o texto no input atualiza o estado texto, mas não afeta a função incrementar, pois ela continua a mesma graças ao useCallback. Isso significa que o Botao não será re-renderizado quando só o texto mudar. Por fim, é importante entender a diferença entre useCallback e useMemo. Ambos servem para memorizar algo, mas enquanto useCallback memoriza uma função, o useMemo memoriza o resultado de uma função:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`const funcaoMemoizada = useCallback(() => {
  // retorna uma função
}, []);

const valorMemoizado = useMemo(() => {
  return calculoPesado();
}, []);`
              } </SyntaxHighlighter>
              <Text>
              Se você quer memorizar funções, use useCallback. Se quer memorizar valores ou cálculos pesados, use useMemo.
              </Text>
            </article>

            {/* useMemo */}
            <article> 
              <H2>5. useMemo</H2>
              <Text>
              O Hook useMemo() é utilizado para memorizar valores derivados de cálculos pesados, garantindo que o React só os recalcule quando suas dependências mudarem. Assim como useCallback() memoriza funções, o useMemo() memoriza valores retornados de funções. Em aplicações com muitos componentes e re-renderizações frequentes, useMemo() pode ser uma ferramenta importante para otimizar a performance, evitando reexecuções desnecessárias de lógica computacionalmente custosa.
              </Text>
              <Text>
              Você deve considerar usar useMemo() quando: a) Um cálculo é pesado e pode ser evitado se nada mudou; b) Um valor calculado depende de variáveis que nem sempre mudam; c) Você precisa evitar renderizações desnecessárias com base em valores derivados.
              </Text>
              <H3>5.1. Exemplo simples de useMemo()</H3>
              <Text>
              Vamos imaginar um componente que calcula um valor lento com base em um número digitado pelo usuário:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import { useState, useMemo } from "react";

function App() {
  const [numero, setNumero] = useState(0);
  const [texto, setTexto] = useState("");

  const resultadoLento = useMemo(() => {
    console.log("Calculando valor lento...");
    let total = 0;
    for (let i = 0; i < 1e9; i++) {
      total += i;
    }
    return numero * 2;
  }, [numero]);

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto qualquer"
      />
      <p>Resultado: {resultadoLento}</p>
    </div>
  );
}`
              } </SyntaxHighlighter>
              <Text>
              Nesse exemplo, a função dentro de useMemo() representa um cálculo pesado (simulado com um for gigante). O resultado desse cálculo depende apenas de numero. Se o usuário digitar no segundo input (texto), o componente pai re-renderiza, mas o cálculo não é refeito — porque numero não mudou. Sem o useMemo(), o cálculo ocorreria toda vez que qualquer parte do componente atualizasse, mesmo que o número continuasse o mesmo.
              </Text>
              <H3>5.2. Cuidados com o useMemo()</H3>
              <Text>
              Apesar de parecer útil em muitos cenários, useMemo() não deve ser usado em excesso. Ele adiciona complexidade ao código e só traz benefícios quando realmente há ganho de performance perceptível. Use-o principalmente quando: um cálculo for pesado, houver re-renderizações frequentes, você estiver lidando com grandes listas, dados ou lógicas computacionais mais exigentes.
              </Text>
              <H3>5.3. Memoization</H3>
              <Text>
              Memoization (ou "memoização", em português) é uma técnica de otimização usada para salvar o resultado de uma função para que, quando ela for chamada novamente com os mesmos parâmetros, o valor já calculado possa ser reutilizado, ao invés de recalculado. Em outras palavras: “se eu já calculei isso antes, pra quê fazer de novo?”
              </Text>
            </article>

            {/* useReducer */}
            <article>
              <H2>6. useReducer</H2>
              <Text>
              O hook useReducer() é semelhante ao useState(), pois também fornece uma maneira de gerenciar mudanças e atualizações de estado em um componente funcional, mas é destinado a lidar com mudanças de estado mais complexas de forma mais eficiente. Ele: 
              <ul style={{listStyle: 'inside'}}>
                <li style={{marginBlock: '.75rem'}}>
                Recebe uma função reducer() como primeiro argumento. Essa função reducer() é uma pure function que recebe o estado atual, uma action e retorna um novo estado. Ela não modifica o estado original, mas retorna um novo estado com base na action passada.
                </li>
                <li style={{marginBlock: '.75rem'}}>
                Recebe um valor de estado inicial como segundo argumento.
                </li>
                <li style={{marginBlock: '.75rem'}}>
                Recebe uma função inicializadora (opcional) como terceiro argumento, que pode ser usada para inicializar o estado.
                </li>
                <li style={{marginBlock: '.75rem'}}>
                E retorna um array contendo o valor atual do estado e uma função dispatch() que pode ser usada para disparar mudanças de estado enviando actions para o reducer.
                </li>
              </ul>
              </Text>
              <img 
                style={
                  {width: '100%', height: 'auto'}
                } 
                src={reducerImg} 
                alt="Reducer function breakdown" 
              />
              <Text>
              Vamos especificar o estado inicial e definir uma função reducer() que recebe o estado atual e uma action, e retorna um novo estado com base no tipo da action.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const initialState = { name: "John", age: 30 };

const reducer = (state, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};`
              } </SyntaxHighlighter>
              <Text>
              Em seguida, passamos a função reducer e o estado inicial para o hook useReducer() que está sendo usado no componente. O hook useReducer() retorna um array contendo o estado atual e uma função dispatch.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`import { useReducer } from 'react';

const initialState = { name: 'John', age: 30 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateAge':
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // ...
  );
};`
              } </SyntaxHighlighter>
              <Text>
              No markup do componente, podemos então usar o objeto de estado para renderizar os dados de estado em nosso componente. Também usaremos a função dispatch() para disparar a action apropriada que será passada para a função reducer() para retornar um novo estado com base no tipo da action e no payload. Quando o usuário fizer alterações no campo de entrada Name, dispararemos a action updateName. Da mesma forma, quando o usuário fizer alterações no campo Age, dispararemos a action updateAge.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`import { useReducer } from "react";

const initialState = { name: "John", age: 30 };

const reducer = (state, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "updateName", payload: e.target.value })
          }
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "updateAge", payload: e.target.value })
          }
        />
      </label>
    </form>
  );
};`
              } </SyntaxHighlighter>
              <H3>6.1. useState vs. useReducer</H3>
              <Text>
              Como o uso dos hooks useState() e useReducer() pode nos levar ao mesmo resultado, quando devemos usar um em vez do outro? Uma das principais vantagens de usar o hook useState() é a sua simplicidade. Ele é fácil de entender e utilizar, e requer pouco código para ser configurado. No entanto, pode se tornar complicado ao gerenciar mudanças de estado mais complexas, já que podemos precisar escrever múltiplos useState() para lidar com diferentes partes do estado.
              </Text>
              <Text>
              Por outro lado, a principal vantagem de usar o useReducer() é que ele nos permite gerenciar mudanças de estado complexas em um único lugar centralizado. Podemos definir todas as atualizações de estado e actions dentro da função reducer(), o que facilita a manutenção e o debug da aplicação. No entanto, o useReducer() pode ser mais complexo de configurar e entender em comparação ao useState(), pois envolve a definição de uma função reducer() e o uso da função dispatch() para disparar as actions.
              </Text>
              <Text>
              Em conclusão, useState() e useReducer() são dois hooks fornecidos pelo React que nos permitem gerenciar estado em componentes funcionais. Ambos os hooks oferecem funcionalidades semelhantes, mas possuem vantagens e desvantagens diferentes, dependendo da complexidade das necessidades de gerenciamento de estado da aplicação. No fim das contas, a escolha entre useState() e useReducer() dependerá das necessidades específicas da sua aplicação. Ambos os hooks podem ser ferramentas úteis no contexto certo, e é importante considerar seus prós e contras antes de decidir qual utilizar.
              </Text>
            </article>

            {/* useContext */}
            <article>
              <H2>7. useContext</H2>
              <Text>
              Com useContext, conseguimos consumir qualquer valor fornecido por um Context.Provider em qualquer nível da árvore de componentes, desde que estejam dentro do escopo desse provedor. Para utilizar useContext, é necessário que o contexto tenha sido previamente criado com createContext() e que exista um Provider que encapsule os componentes consumidores. O contexto normalmente armazena informações compartilhadas por vários componentes, como temas de interface, dados de autenticação, preferências do usuário ou qualquer outro tipo de estado global da aplicação. O Provider é o componente responsável por envolver partes da aplicação e fornecer o valor atual do contexto por meio da prop value.
              </Text>
              <Text>
              Antes de usar o useContext, é necessário criar um contexto com a função createContext:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import React, { createContext, useState } from 'react';

// Criando o contexto
export const TemaContext = createContext();`
              } </SyntaxHighlighter>
              <Text>
              O próximo passo é criar um componente provedor que envolva a árvore de componentes que precisam acessar esse contexto:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};`
              } </SyntaxHighlighter>
              <Text>
              Neste exemplo, TemaProvider mantém o estado do tema e fornece uma função para alternar entre os temas. O valor passado para o Provider estará disponível para qualquer componente descendente que usar useContext.
              </Text>
              <Text>
              Agora, em qualquer componente dentro da árvore envolta pelo TemaProvider, podemos acessar o contexto com useContext de forma simples:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import React, { useContext } from 'react';
import { TemaContext } from './TemaContext';

const BotaoTema = () => {
  const { tema, alternarTema } = useContext(TemaContext);

  return (
    <button onClick={alternarTema}>
      Tema atual: {tema}
    </button>
  );
};`
              } </SyntaxHighlighter>
              <Text>
              Aqui, useContext(TemaContext) retorna o objeto {`{ tema, alternarTema }`}, exatamente como foi passado no value do Provider. Com isso, conseguimos ler o tema atual e mudar seu valor com um clique.
              </Text>
            </article>

            {/* Customs Hooks */}
            <article>
              <H2>Como criar Custom Hooks</H2>
              <Text>
                Antes de criarmos um custom hook, você precisa saber que existem duas regras para criar um: 
                <ol style={{listStyle: 'inside'}}>
                  <li style={{marginBlock: '1em'}}>
                    Custom Hooks devem ser nomeados com o prefixo "use". Por exemplo, um custom hook pode se chamar useLocalStorage ou useAuthentication. No nosso caso, o custom hook será chamado useBoolean; 
                  </li>
                  <li style={{marginBlock: '1em'}}>
                    Custom Hooks consistem em Hooks nativos do React ou de outros custom hooks. Portanto, um custom hook é sempre uma nova composição de um ou mais hooks. Se um custom hook não usa nenhum hook internamente, ele não é de fato um custom hook e não deve ter o prefixo "use".
                  </li>
                </ol>
              </Text>
              <Text>
                Vamos criar um custom hook chamado useBoolean, mas antes de implementarmos esse hook, vamos entender qual problema ele resolve. Vamos começar com um pequeno exemplo:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import * as React from 'react';

function App() {
  const [isToggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!isToggle);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>

      {isToggle.toString()}
    </div>
  );
}

export default App;`
              } </SyntaxHighlighter>
              <Text>
                O componente renderiza um botão que alterna um valor booleano. Em uma aplicação React do mundo real, não há muito o que se possa fazer com um boolean com state. Ou você o alterna (como no exemplo anterior), ou define explicitamente como true ou false (como no próximo exemplo):
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import * as React from 'react';

function App() {
  const [isToggle, setToggle] = React.useState(false);

  const handleToggle = () => setToggle(!isToggle);
  const handleTrue = () => setToggle(true);
  const handleFalse = () => setToggle(false);

  return (
    <div>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
      <button type="button" onClick={handleTrue}>
        To True
      </button>
      <button type="button" onClick={handleFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}

export default App;`
              } </SyntaxHighlighter>
            <Text>
              Alguns desenvolvedores podem argumentar que poderíamos ter usado inline handlers em vez disso, assim evitaríamos a declaração repetitiva de event handlers. No entanto, pessoalmente tento evitar inline handlers sempre que posso, porque eles injetam muita lógica no JSX, que, idealmente, deveria estar definida entre a assinatura da função do componente e a instrução de return. Mas isso é apenas uma preferência pessoal.
            </Text>
            <Text>
              De qualquer forma, toda vez que você usa um boolean com state, acaba encontrando os mesmos detalhes de implementação: ou você alterna o valor, ou define para um de seus dois possíveis estados. Para evitar esse código repetitivo ao usar booleans com state em mais de um componente React, comecei a criar um custom hook para isso:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const useBoolean = () => {
  const [state, setState] = React.useState();

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};`
              } </SyntaxHighlighter>
              <Text>
                Basicamente, todos os detalhes de implementação — ou seja, o state e os event handlers — foram movidos para este custom hook chamado useBoolean. Além disso, o custom hook retorna o state e as funções para atualizá-lo em um array.
              </Text>
              <Text>
                Retornar um array é uma boa prática ao retornar múltiplos valores de um custom hook, porque os Hooks nativos do React — quando retornam múltiplos valores — utilizam arrays e, portanto, também a array destructuring. Usar array destructuring traz a vantagem de permitir nomear os valores desestruturados como quiser (o que gera menos código do que renomear valores no caso de object destructuring).
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const useBoolean = (initialState = false) => {
  const [state, setState] = React.useState(initialState);

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => setState(!state);

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
};`
              } </SyntaxHighlighter>
              <Text>
                Uma boa adição seria permitir também o uso de um initial state (como visto no último trecho de código). Voltando ao nosso componente App, podemos utilizar esse novo custom hook passando um initial state e usando os valores retornados para exibir o state e atualizá-lo:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function App() {
  const [isToggle, { setToggle }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>

      {isToggle.toString()}
    </div>
  );
}`
              } </SyntaxHighlighter>
              <Text>
                Como o custom hook não oferece apenas a função para alternar o boolean com state, mas também para defini-lo explicitamente como true ou false, podemos utilizar essas funções também:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function App() {
  const [isToggle, {
    setToggle,
    setTrue,
    setFalse,
  }] = useBoolean(false);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>

      {isToggle.toString()}
    </div>
  );
}`
              } </SyntaxHighlighter>
              <Text>
                Basicamente, extraímos o boolean com state e todos os event handlers — que operam sobre esse boolean — para dentro de um custom hook. Ao usar esse custom hook sempre que precisarmos de um boolean com state, poupamos a definição dos event handlers, que incluem os detalhes de implementação sobre como manipular o boolean, e usamos diretamente as funções retornadas pelo hook.
              </Text>
              <Text>
                Concluindo, aprendemos como criar um custom hook usando um dos Hooks nativos do React, o useState. Esse custom hook não é complexo, mas serve para mostrar como você pode reduzir a complexidade e a redundância no seu projeto React.
              </Text>
            </article>

            {/* Melhors práticas */}
            <article>
              <H2>Melhores Práticas para o uso de Hooks</H2>
              <Text>
                Desde a introdução dos Hooks no React, eles transformaram a maneira como escrevemos componentes funcionais, permitindo o uso de state, side-effects, contexto e outras funcionalidades avançadas sem a necessidade de classes. No entanto, para garantir que seu código continue limpo, eficiente e fácil de manter, é essencial adotar algumas boas práticas no uso dos Hooks. Neste artigo, exploramos essas práticas com explicações claras e sugestões úteis.
              </Text>

              <H3>1. Sempre siga as regras dos Hooks</H3>
              <Text>
                As duas regras fundamentais dos Hooks são:
              </Text>
              <ol style={{listStyle: 'inside', marginLeft: '3em'}}>
                <li style={{marginBlock: '1em'}} >
                  <TextStrong>Chame Hooks apenas no nível superior:</TextStrong> nunca os utilize dentro de loops, condições ou funções aninhadas. Isso garante que a ordem dos Hooks seja sempre a mesma em cada renderização.
                </li>
                <li style={{marginBlock: '1em'}} >
                  <TextStrong>Chame Hooks apenas de componentes funcionais ou de custom hooks:</TextStrong> isso significa que você não deve usá-los fora do contexto React, como em funções utilitárias comuns.
                </li>
              </ol>
              <Text>
                Para reforçar essas regras, recomenda-se o uso da biblioteca oficial eslint-plugin-react-hooks, que alerta automaticamente quando elas são violadas.
              </Text>

              <H3>2. Use Hooks nativos sempre que possível</H3>
              <Text>
                O React oferece uma série de Hooks nativos muito poderosos, como useState, useEffect, useContext, useReducer, useMemo, useCallback, entre outros. Sempre que o comportamento desejado puder ser alcançado com um Hook nativo, prefira essa abordagem em vez de reinventar a roda.
              </Text>

              <H3>3. Crie custom hooks para lógica reutilizável</H3>
              <Text>
                Se você perceber que está repetindo a mesma lógica de useState, useEffect ou outros Hooks em vários componentes, provavelmente é hora de extrair essa lógica em um custom hook. Um custom hook é apenas uma função que pode utilizar outros Hooks internamente e retorna os dados e funções necessários.
              </Text>
              <Text>
                Por convenção, o nome de todo custom hook deve começar com use — como useAuth, useForm, useBoolean. Isso permite que o linter e o próprio React tratem essa função da maneira correta.
              </Text>

              <H3>4. Evite lógica complexa diretamente no JSX</H3>
              <Text>
                Colocar lógica de estado e efeitos diretamente no JSX, como inline handlers ou chamadas complexas de função, pode dificultar a leitura e manutenção do componente. Sempre que possível, mova essa lógica para o corpo do componente, entre a definição da função e o retorno (return) do JSX. Isso torna o código mais limpo e fácil de testar.
              </Text>

              <H3>5. Use useEffect de forma consciente</H3>
              <Text>
                O useEffect é um Hook poderoso, mas fácil de ser usado em excesso. Evite fazer com que efeitos colaterais rodem desnecessariamente — sempre defina corretamente os valores no array de dependências para que o efeito execute apenas quando necessário. Além disso, se seu useEffect estiver fazendo muitas coisas, considere dividi-lo em múltiplos efeitos com responsabilidades menores e mais específicas.
              </Text>

              <H3>6. Otimize re-renderizações com useMemo e useCallback</H3>
              <Text>
                Os Hooks useMemo e useCallback são úteis para evitar re-renderizações desnecessárias ou reexecuções de funções caras, especialmente em componentes com alto desempenho. No entanto, eles não devem ser usados em excesso: só aplique esses Hooks quando houver um ganho real mensurável, pois seu uso também tem um custo computacional.
              </Text>

              <H3>7. Organize e nomeie bem seus hooks</H3>
              <Text>
                Mantenha seus custom hooks organizados em uma pasta separada (/hooks) e nomeie-os de forma que reflitam claramente sua funcionalidade. Isso facilita a manutenção e o reuso em outros projetos ou partes da aplicação.
              </Text>

              <H3>8. Evite abusar de múltiplos estados desconexos</H3>
              <Text>
                Se você estiver gerenciando muitos estados separados com useState, considere o uso de useReducer, que ajuda a centralizar a lógica de atualização e torna o código mais previsível, especialmente em componentes mais complexos.
              </Text>

              <H3>9. Trate efeitos assíncronos com cuidado</H3>
              <Text>
                Quando usar async dentro de um useEffect, não torne a função principal do efeito assíncrona diretamente. Em vez disso, defina uma função interna assíncrona e chame-a no corpo do useEffect. Também lembre-se de limpar efeitos quando necessário, especialmente ao lidar com subscriptions ou chamadas de API que podem se tornar obsoletas.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`useEffect(() => {
  let isActive = true;

  async function fetchData() {
    const result = await fetchSomething();
    if (isActive) {
      setData(result);
    }
  }

  fetchData();

  return () => {
    isActive = false;
  };
}, []);
`
              } </SyntaxHighlighter>

              <H3>10. Documente seus custom hooks</H3>
              <Text>
                Assim como funções ou componentes importantes, custom hooks devem ser bem documentados: explique o que eles fazem, quais parâmetros recebem, o que retornam, e quando devem ser usados. Isso ajuda outros desenvolvedores (ou você no futuro) a entender rapidamente como utilizar o hook corretamente.
              </Text>

              <H3>Conclusão</H3>
              <Text>
                Os Hooks tornaram o React mais poderoso e flexível, mas com esse poder vem a responsabilidade de usá-los com clareza e cuidado. Seguindo boas práticas como nomeação adequada, separação de responsabilidades, uso criterioso de efeitos e extração de lógica reutilizável, você pode manter seu código mais limpo, legível e sustentável. Ao dominar essas práticas, você estará apto a criar aplicações React mais robustas e escaláveis.
              </Text>
            </article>

            <UpPage />
        </ContentContainer>
    );
}
