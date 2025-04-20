import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Item'
import { ItemContainer } from '@/components/ui/ItemContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function HooksPage() {
    return (
        <ItemContainer>
            <H1>React Hooks</H1>
            <H2>Introdução</H2>
            <Text>
            Os Hooks no React foram introduzidos na versão 16.8 com o objetivo de permitir o uso de estado e outras funcionalidades do React em componentes funcionais, sem a necessidade de escrever classes. Antes dos Hooks, o gerenciamento de estado e o uso do ciclo de vida dos componentes estavam restritos aos componentes baseados em classe, o que muitas vezes deixava o código mais verboso e difícil de reutilizar. Com os Hooks, é possível, por exemplo, utilizar o useState para criar estados locais e o useEffect para lidar com efeitos colaterais, como chamadas à API ou manipulação do DOM, tudo isso dentro de uma função simples.
            </Text>
            <Text>
            Além dos Hooks mais básicos, como useState e useEffect, o React também oferece Hooks adicionais como useContext, useReducer, useMemo, useCallback e useRef, que ajudam a resolver problemas mais específicos e a otimizar o desempenho da aplicação. Também é possível criar Custom Hooks, permitindo a extração de lógica reutilizável em funções separadas, o que contribui para uma melhor organização e manutenção do código. O uso de Hooks transformou a forma como os desenvolvedores escrevem componentes em React, promovendo um código mais limpo, conciso e com maior reaproveitamento.
            </Text>

            {/* useState */}
            <article>
                <H2>useState</H2>
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
                <H2>useEffect</H2>
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

                <H3>useEffect: sempre</H3>
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

                <H3>useEffect: somente montagem</H3>
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

                <H3>useEffect: montagem + atualização (mount + re-render)</H3>
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

                <H3>useEffect: somente atualização (re-render)</H3>
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

                <H3>useEffect: somente uma vez</H3>
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

                <H3>useEffect: Limpeza</H3>
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

                <H3>useEffect: Desmontagem</H3>
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

            <UpPage />
        </ItemContainer>
    );
}
