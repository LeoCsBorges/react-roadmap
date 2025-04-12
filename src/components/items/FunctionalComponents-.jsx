import '@/components/items/Item.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import upArrow from '@/assets/images/up-icon.png'


export function FunctionalComponents() {
    return (
        <>
            <h1 className='item__h1'>Componentes Funcionais</h1>
            <h2 className='item__h2'>Definição</h2>
            <p className='item__text'>
                <span className="item__text--strong">React Function Components</span>, também conhecidos como <span className="item__text--strong">React Functional Components</span>, são o padrão atual para escrever aplicações modernas em React. No passado, existiam vários tipos de componentes React, mas com a introdução dos React Hooks, tornou-se possível escrever toda a sua aplicação apenas com funções como componentes React. Os React Function Components, que basicamente são apenas funções JavaScript que atuam como Componentes React, retornando JSX (a sintaxe de template do React).
            </p>

            {/* exemplo */}
            <h2 className='item__h2'>Exemplo de Funcional Component</h2>
            <p className="item__text">
                Vamos começar com um exemplo simples de um Functional Component em React, definido como o componente App, que retorna JSX:
            </p>
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
            <p className="item__text">
                Essa já é a sintaxe essencial de um React Function Component. A definição do componente é feita com uma função JavaScript simples que retorna JSX, a sintaxe do React para definir uma mistura de HTML e JavaScript, onde o JavaScript é utilizado dentro de chaves ({`{}`}) no meio do HTML. No nosso caso, renderizamos uma variável chamada greeting, que é definida dentro do corpo da função do componente e retornada como um título HTML no JSX.
            </p>
            <p className="item__text">
                Agora, se você quiser renderizar um React Component dentro de um Function Component, basta definir outro componente e renderizá-lo como um elemento React usando JSX:
            </p>
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
            <p className="item__text">
                Basicamente, agora você tem uma função como Child Component (componente filho). Definir React Components e renderizá-los dentro uns dos outros torna a composição em React possível. Você pode decidir onde renderizar um componente e como renderizá-lo.
            </p>

            {/* props */}
            <h2 className='item__h2'>Props</h2>
            <p className="item__text">
                Vamos aprender sobre um React Function Component com props. No React, props são usadas para passar informações de um componente para outro. Essencialmente, as props em React são sempre passadas de cima para baixo na árvore de componentes (ou seja, do componente pai para o componente filho).
            </p>
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
            <p className="item__text">
            Props são os parâmetros de um React Function Component. Enquanto o componente pode permanecer genérico, nós decidimos, de fora para dentro, o que ele deve renderizar (ou como ele deve se comportar). Ao renderizar um componente (por exemplo, Headline dentro do componente App), você pode passar props como se fossem atributos HTML para o componente.
            
            Então, dentro do Function Component, o objeto props fica disponível como argumento na assinatura da função. Como as props sempre vêm como um objeto, e muitas vezes você precisa extrair informações dele, a desestruturação de objetos do JavaScript é muito útil. Você pode usá-la diretamente na assinatura da função para acessar as propriedades:
            </p>
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
            <h2 className='item__h2'>Arrow Function Component</h2>
            <p className="item__text">
                Com a introdução do JavaScript ES6, novos conceitos de codificação foram adicionados ao JavaScript e, consequentemente, ao React. Por exemplo, uma função JavaScript pode ser escrita como uma lambda (ou arrow function). Por isso, um Function Component às vezes é chamado de Arrow Function Component ou Arrow Function Expression Component (ou, raramente, Lambda Function Component).
            </p>
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
            <p className="item__text">
                Ao usar arrow functions para componentes React, nada muda em relação às props. Elas ainda são acessíveis como argumentos, como antes. Trata-se de um React Function Component usando funções ES6 expressas como arrow functions, em vez das funções ES5, que são a forma mais tradicional de declarar funções em JavaScript.
            </p>


            {/* stateless function component */}
            <h2 className='item__h2'>Stateless Function Component</h2>
            <p className="item__text">
                Todo componente que vimos até agora pode ser chamado de Stateless Function Component. Eles apenas recebem uma entrada na forma de props e retornam uma saída em JSX: (props) => JSX. A entrada, quando disponível através de props, determina o que será renderizado. Esse tipo de componente não gerencia estado e não possui efeitos colaterais (como acessar o localStorage do navegador, por exemplo).
            </p>
            <p className="item__text">
                As pessoas os chamam de Functional Stateless Components, porque são sem estado e expressos como funções. No entanto, os React Hooks tornaram possível ter estado em Function Components.
            </p>

            {/* state */}
            <h2 className='item__h2'>State</h2>
            <p className="item__text">
                Os React Hooks tornaram possível usar estado (e efeitos colaterais) em Function Components. Finalmente, podemos criar um React Function Component com estado! Vamos supor que movemos toda a lógica para outro Function Component e não passamos nenhuma prop para ele:
            </p>
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
            <p className="item__text">
                Até agora, um usuário desta aplicação não tem nenhuma forma de interagir com ela e, portanto, não pode alterar a variável greeting. A aplicação é estática e nada interativa. State (estado) é o que torna os componentes React interativos — e também mais interessantes! Um React Hook nos ajuda a alcançar isso:
            </p>
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
            <p className="item__text">
                O Hook <span className="item__text--strong">useState</span> recebe um estado inicial como parâmetro e retorna um array que contém: o estado atual como primeiro item, e uma função para alterar esse estado como segundo item. Estamos usando a desestruturação de array do JavaScript para acessar ambos os itens com uma expressão mais curta. Além disso, a desestruturação nos permite dar nomes personalizados às variáveis. Vamos adicionar um campo de input para alterar o estado usando a função setGreeting():
            </p>
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
            <p className="item__text">
                Ao fornecer um event handler (manipulador de evento) para o campo de input, conseguimos executar uma função de callback sempre que o campo de input mudar seu valor. Como argumento dessa função de callback, recebemos um evento sintético do React (synthetic React event), que contém o valor atual do campo de input. Esse valor é usado para atualizar o estado do Function Component por meio de uma arrow function inline.
            </p>














            <a className='up-page' href="#top">
                <img src={upArrow} alt />
            </a>
        </>
    )
}