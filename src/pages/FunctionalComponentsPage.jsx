import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Item'
import { ItemContainer } from '@/components/ui/ItemContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function FunctionalComponentsPage() {
    return (
        <ItemContainer >
            <H1>Componentes Funcionais</H1>
            <H2>Definição</H2>
            <Text>
                <TextStrong>React Function Components</TextStrong>, também conhecidos como <TextStrong>React Functional Components</TextStrong>, são o padrão atual para escrever aplicações modernas em React. No passado, existiam vários tipos de componentes React, mas com a introdução dos React Hooks, tornou-se possível escrever toda a sua aplicação apenas com funções como componentes React. Os React Function Components, que basicamente são apenas funções JavaScript que atuam como Componentes React, retornando JSX (a sintaxe de template do React).
            </Text>

            {/* exemplo */}
            <H2>Exemplo de Funcional Component</H2>
            <Text>
                Vamos começar com um exemplo simples de um Functional Component em React, definido como o componente App, que retorna JSX:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                Essa já é a sintaxe essencial de um React Function Component. A definição do componente é feita com uma função JavaScript simples que retorna JSX, a sintaxe do React para definir uma mistura de HTML e JavaScript, onde o JavaScript é utilizado dentro de chaves ({`{}`}) no meio do HTML. No nosso caso, renderizamos uma variável chamada greeting, que é definida dentro do corpo da função do componente e retornada como um título HTML no JSX.
            </Text>
            <Text>
                Agora, se você quiser renderizar um React Component dentro de um Function Component, basta definir outro componente e renderizá-lo como um elemento React usando JSX:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

function App() {
  return <Headline />;
}

function Headline() {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
}

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                Basicamente, agora você tem uma função como Child Component (componente filho). Definir React Components e renderizá-los dentro uns dos outros torna a composição em React possível. Você pode decidir onde renderizar um componente e como renderizá-lo.
            </Text>

            {/* props */}
            <H2>Props</H2>
            <Text>
                Vamos aprender sobre um React Function Component com props. No React, props são usadas para passar informações de um componente para outro. Essencialmente, as props em React são sempre passadas de cima para baixo na árvore de componentes (ou seja, do componente pai para o componente filho).
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
}

function Headline(props) {
  return <h1>{props.value}</h1>;
}

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
            Props são os parâmetros de um React Function Component. Enquanto o componente pode permanecer genérico, nós decidimos, de fora para dentro, o que ele deve renderizar (ou como ele deve se comportar). Ao renderizar um componente (por exemplo, Headline dentro do componente App), você pode passar props como se fossem atributos HTML para o componente.
            
            Então, dentro do Function Component, o objeto props fica disponível como argumento na assinatura da função. Como as props sempre vêm como um objeto, e muitas vezes você precisa extrair informações dele, a desestruturação de objetos do JavaScript é muito útil. Você pode usá-la diretamente na assinatura da função para acessar as propriedades:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

function App() {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
}

function Headline({ value }) {
  return <h1>{value}</h1>;
}

export default App;
                `}
            </SyntaxHighlighter>

            {/* arrow function component */}
            <H2>Arrow Function Component</H2>
            <Text>
                Com a introdução do JavaScript ES6, novos conceitos de codificação foram adicionados ao JavaScript e, consequentemente, ao React. Por exemplo, uma função JavaScript pode ser escrita como uma lambda (ou arrow function). Por isso, um Function Component às vezes é chamado de Arrow Function Component ou Arrow Function Expression Component (ou, raramente, Lambda Function Component).
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

const App = () => {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                Ao usar arrow functions para componentes React, nada muda em relação às props. Elas ainda são acessíveis como argumentos, como antes. Trata-se de um React Function Component usando funções ES6 expressas como arrow functions, em vez das funções ES5, que são a forma mais tradicional de declarar funções em JavaScript.
            </Text>


            {/* stateless function component */}
            <H2>Stateless Function Component</H2>
            <Text>
                Todo componente que vimos até agora pode ser chamado de Stateless Function Component. Eles apenas recebem uma entrada na forma de props e retornam uma saída em JSX: (props) =&gt; JSX. A entrada, quando disponível através de props, determina o que será renderizado. Esse tipo de componente não gerencia estado e não possui efeitos colaterais (como acessar o localStorage do navegador, por exemplo).
            </Text>
            <Text>
                As pessoas os chamam de Functional Stateless Components, porque são sem estado e expressos como funções. No entanto, os React Hooks tornaram possível ter estado em Function Components.
            </Text>

            {/* state */}
            <H2>State</H2>
            <Text>
                Os React Hooks tornaram possível usar estado (e efeitos colaterais) em Function Components. Finalmente, podemos criar um React Function Component com estado! Vamos supor que movemos toda a lógica para outro Function Component e não passamos nenhuma prop para ele:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const greeting = 'Hello Function Component!';

  return <h1>{greeting}</h1>;
};

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                Até agora, um usuário desta aplicação não tem nenhuma forma de interagir com ela e, portanto, não pode alterar a variável greeting. A aplicação é estática e nada interativa. State (estado) é o que torna os componentes React interativos — e também mais interessantes! Um React Hook nos ajuda a alcançar isso:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React, { useState } from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return <h1>{greeting}</h1>;
};

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                O Hook <TextStrong>useState</TextStrong> recebe um estado inicial como parâmetro e retorna um array que contém: o estado atual como primeiro item, e uma função para alterar esse estado como segundo item. Estamos usando a desestruturação de array do JavaScript para acessar ambos os itens com uma expressão mais curta. Além disso, a desestruturação nos permite dar nomes personalizados às variáveis. Vamos adicionar um campo de input para alterar o estado usando a função setGreeting():
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React, { useState } from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  return (
    <div>
      <h1>{greeting}</h1>

      <input
        type="text"
        value={greeting}
        onChange={(event) => setGreeting(event.target.value)}
      />
    </div>
  );
};

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
                Ao fornecer um event handler (manipulador de evento) para o campo de input, conseguimos executar uma função de callback sempre que o campo de input mudar seu valor. Como argumento dessa função de callback, recebemos um evento sintético do React (synthetic React event), que contém o valor atual do campo de input. Esse valor é usado para atualizar o estado do Function Component por meio de uma arrow function inline.
            </Text>

            {/* event handler */}
            <H2>Event Handler</H2>
            <Text>
            No exemplo anterior, usamos um event handler onChange para o campo de input. Isso é apropriado, pois queremos ser notificados toda vez que o valor interno do input for alterado. No caso de outros elementos de formulário em HTML, você tem diversos outros event handlers do React à sua disposição, como: onClick – quando o elemento é clicado, onMouseDown – quando o botão do mouse é pressionado sobre o elemento, onBlur – quando o elemento perde o foco
            </Text>
            <Text>
            Até agora, usamos uma arrow function inline como event handler para o nosso campo de input. Mas e se extrairmos essa função e a transformarmos em uma função nomeada dentro do componente? Ela se tornaria assim uma função separada e reutilizável:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React, { useState } from 'react';

const App = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <h1>{greeting}</h1>

      <input type="text" value={greeting} onChange={handleChange} />
    </div>
  );
};

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
            Usamos uma arrow function para definir a função dentro do componente. Se você já usou métodos de classe em React Class Components, essa forma de definir funções dentro de um React Function Component é o equivalente funcional. Você pode chamá-las de algo como “React Function Component Methods”, equivalente aos métodos das class components. Você pode criar e adicionar quantas funções quiser dentro de um Functional Component para atuarem como event handlers explícitos ou para encapsular outras lógicas de negócio.
            </Text>

            {/* callback function */}
            <H2>Callback Function</H2>
            <Text>
            Tudo acontece dentro do nosso Child Function Component. Nenhuma prop é passada para ele, embora você já tenha visto anteriormente como uma variável string (como a greeting) pode ser passada do Parent Component para o Child Component. Mas... é possível passar uma função como prop para um componente também? De alguma forma, deve ser possível chamar uma função de um componente a partir do lado de fora, certo? Vamos ver como isso funciona:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React, { useState } from 'react';

const App = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  const handleChange = event => setGreeting(event.target.value);

  return (
    <Headline headline={greeting} onChangeHeadline={handleChange} />
  );
};

const Headline = ({ headline, onChangeHeadline }) => (
  <div>
    <h1>{headline}</h1>

    <input type="text" value={headline} onChange={onChangeHeadline} />
  </div>
);

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
              É só isso! Você pode passar uma função para um Child Component e deixar que o Parent Component cuide do que acontece com essa função. Você também pode executar algo dentro do Child Component (por exemplo, no componente Headline) antes de chamar a função onChangeHeadline — como aplicar um trim() no valor — para adicionar funcionalidades extras no componente filho. É assim que você consegue chamar uma função do componente pai a partir de um componente filho.
            </Text>

            {/* async  function */}
            <H2>Async Function in Component with React</H2>
            <Text>
            Outro caso especial pode ser uma função assíncrona dentro de um componente React. Mas, na verdade, não há nada de especial nisso, porque não importa se a função é executada de forma assíncrona ou não.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React from 'react';

const App = () => {
  const sayHello = () =>
    setTimeout(() => console.log('Hello'), 1000);

  return <Button handleClick={sayHello} />;
};

const Button = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Button
  </button>
);

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
            A função é executada com atraso (delay) sem nenhuma instrução adicional da sua parte dentro do componente. O componente também será rerenderizado de forma assíncrona caso as props ou o state mudem. Veja o exemplo de código a seguir para entender como definimos um novo estado com um atraso artificial, usando setTimeout:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {`
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setTimeout(
      () => setCount(currentCount => currentCount + 1),
      1000
    );

  const handleDecrement = () =>
    setTimeout(
      () => setCount(currentCount => currentCount - 1),
      1000
    );

  return (
    <div>
      <h1>{count}</h1>

      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

export default App;
                `}
            </SyntaxHighlighter>
            <Text>
            Também vale notar que estamos usando uma função de callback dentro da função setCount para acessar o estado atual. Como as funções setter do useState são executadas de forma assíncrona por natureza, você precisa garantir que a mudança de estado seja feita com base no estado atual, e não em um estado desatualizado (stale state).
            </Text>

            <UpPage />
        </ItemContainer>
    )
}