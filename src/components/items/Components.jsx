import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/items/Item.jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeExamples = [
    `
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
    `,
    `
import createClass from "create-react-class";

const CreateClassComponent = createClass({
getInitialState: function () {
    return {
    text: "",
    };
},

handleChangeText: function (event) {
    this.setState({ text: event.target.value });
},

render: function () {
    return (
    <div>
        <p>Text: {this.state.text}</p>

        <input
        type="text"
        value={this.state.text}
        onChange={this.handleChangeText}
        />
    </div>
    );
},
});

export default CreateClassComponent;
    `,
    `
import createClass from "create-react-class";

const CreateClassComponent = createClass({
getInitialState: function () {
    return {
    text: localStorage.getItem("text") || "",
    };
},

componentDidUpdate: function () {
    localStorage.setItem("text", this.state.text);
},

handleChangeText: function (event) {
    this.setState({ text: event.target.value });
},

render: function () {
    return (
    <div>
        <p>Text: {this.state.text}</p>

        <input
        type="text"
        value={this.state.text}
        onChange={this.handleChangeText}
        />
    </div>
    );
},
});

export default CreateClassComponent;
    `,
    `
import createClass from "create-react-class";

const LocalStorageMixin = {
  getInitialState: function () {
    return {
      text: localStorage.getItem("text") || "",
    };
  },

  componentDidUpdate: function () {
    localStorage.setItem("text", this.state.text);
  },
};

const CreateClassWithMixinComponent = createClass({
  mixins: [LocalStorageMixin],

  handleChangeText: function (event) {
    this.setState({ text: event.target.value });
  },

  render: function () {
    return (
      <div>
        <p>Text: {this.state.text}</p>

        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChangeText}
        />
      </div>
    );
  },
});

export default CreateClassWithMixinComponent;
    `,
    `
import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Text: {this.state.text}</p>

        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChangeText}
        />
      </div>
    );
  }
}

export default ClassComponent;
    `,
    `
import React from "react";

const withLocalStorage = (storageKey) => (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: localStorage.getItem(storageKey) || "",
      };
    }

    componentDidUpdate() {
      localStorage.setItem(storageKey, this.state.value);
    }

    onChangeValue = (event) => {
      this.setState({ value: event.target.value });
    };

    render() {
      return (
        <Component
          value={this.state.value}
          onChangeValue={this.onChangeValue}
          {...this.props}
        />
      );
    }
  };
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Text: {this.props.value}</p>

        <input
          type="text"
          value={this.props.value}
          onChange={this.props.onChangeValue}
        />
      </div>
    );
  }
}

export default withLocalStorage("text")(ClassComponent);
    `,
    `
import { useState } from "react";

const FunctionComponent = () => {
  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>Text: {text}</p>

      <input type="text" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default FunctionComponent;
    `,
    `
import { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [text, setText] = useState(localStorage.getItem("text") || "");

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>Text: {text}</p>

      <input type="text" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default FunctionComponent;
    `,
    `
import { useEffect, useState } from "react";

const useLocalStorage = (storageKey) => {
  const [value, setValue] = useState(localStorage.getItem(storageKey) || "");

  useEffect(() => {
    localStorage.setItem(storageKey, value);
  }, [storageKey, value]);

  return [value, setValue];
};

const FunctionComponent = () => {
  const [text, setText] = useLocalStorage("text");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>Text: {text}</p>

      <input type="text" value={text} onChange={handleChangeText} />
    </div>
  );
};

export default FunctionComponent;
    `,
    `
const ReactServerComponent = async () => {
  const posts = await db.query("SELECT * FROM posts");

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReactServerComponent;
    `,
    `
import { Suspense } from "react";

const ReactServerComponent = () => {
  const postsPromise = db.query("SELECT * FROM posts");

  return (
    <div>
      <Suspense>
        <ReactClientComponent promisedPosts={postsPromise} />
      </Suspense>
    </div>
  );
};
    `,
    `
"use client";

import { use } from "react";

const ReactClientComponent = ({ promisedPosts }) => {
  const posts = use(promisedPosts);

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export { ReactClientComponent };
    `
];

export function Components() {
    return (
       <>
        <H1>Componentes</H1>
        <H2>Definição</H2>
        <Text>
            <TextStrong>Componentes</TextStrong> são funções ou classes que retornam elementos React (geralmente escritos em JSX) e representam partes da interface do usuário (UI). Eles permitem que a aplicação seja dividida em pedaços menores, reutilizáveis e independentes, facilitando a organização, manutenção e escalabilidade do código. Um componente pode ser pequeno como um Button, ou grande como uma página inteira. Componentes são funções JavaScript que retornam markup:
        </Text>

        <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[0]}
        </SyntaxHighlighter>

        <H2>Tipos de Componentes</H2>
        {/* createClass */}
        <article>
            <H3>React CreateClass</H3>
            <Text>
              O React inicialmente dependia do createClass (obsoleto) para definir componentes como uma factory function que criava Componentes de Classe do React sem a necessidade de uma classe em JavaScript. Essa abordagem era o padrão para construir componentes React antes da introdução do JavaScript ES6 em 2015, pois o JavaScript ES5 não possuía uma sintaxe nativa para classes.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[1]}
            </SyntaxHighlighter>
            <Text>
            Neste exemplo, o método de fábrica createClass() do React recebe um objeto que define os métodos de um componente React. A função getInitialState() é usada para inicializar o estado do componente, enquanto o método obrigatório render() é responsável por exibir a saída usando JSX. Métodos adicionais, como incrementCounter(), podem ser adicionados ao objeto para servir como manipuladores de eventos do componente.
            </Text>
            <Text>
            Métodos de ciclo de vida para efeitos colaterais também estavam disponíveis. Por exemplo, para gravar o valor de texto do estado no armazenamento local do navegador sempre que ele for atualizado, poderíamos usar o método de ciclo de vida componentDidUpdate(). Além disso, o valor pode ser lido do armazenamento local quando o componente recebe seu estado inicial.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[2]}
            </SyntaxHighlighter>
            <Text>
            O método createClass do React não está mais disponível no pacote principal do React. Se você quiser experimentá-lo, será necessário instalar um pacote adicional do Node chamado create-react-class.
            </Text>
        </article>

        {/* Mixins */}
        <article>
            <H3>React Mixins (padrões)</H3>
            <Text>
            Mixins no React (obsoletos) foram introduzidos como o primeiro padrão do React para lógica reutilizável de componentes. Com um Mixin no React, era possível extrair a lógica de um componente React para um objeto independente. Ao usar um Mixin em um componente, todas as funcionalidades do Mixin eram incorporadas ao componente:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[3]}
            </SyntaxHighlighter>
           <Text>
           O LocalStorageMixin encapsula a lógica para gerenciar o estado do texto dentro do local storage, inicializando o texto em getInitialState e atualizando-o em componentDidUpdate. Ao adicionar o Mixin ao array mixins, o componente pode reutilizar essa funcionalidade compartilhada sem duplicar código.
           </Text>
           <Text>
           No entanto, Mixins no React não são mais utilizados, pois apresentavam várias desvantagens e só funcionavam com componentes criados usando createClass.
           </Text>
        </article>

        {/* Class Components */}
        <article>
            <H3>React Class Components</H3>
            <Text>
                Componentes de Classe do React (não recomendados) foram introduzidos na versão 0.13, lançada em março de 2015. Antes disso, os desenvolvedores usavam a função createClass para definir componentes, mas eventualmente o React descontinuou o uso de createClass na versão 15.5 (abril de 2017) e passou a recomendar o uso dos Componentes de Classe.
            </Text>
            <Text>
                Os Componentes de Classe foram introduzidos como uma forma de utilizar classes nativas do JavaScript (devido ao lançamento do ES6 em 2015), já que as classes passaram a fazer parte da linguagem.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[4]}
            </SyntaxHighlighter>
            <Text>
                Um Componente React escrito com uma classe JavaScript possui métodos como o construtor da classe — que é usado principalmente no React para definir o estado inicial (state) ou fazer o bind de métodos — e o método obrigatório render, que retorna o JSX como saída.
            </Text>
            <Text>
                Toda a lógica interna do Componente React vem da herança orientada a objetos. Mas vale lembrar que nunca foi recomendado usar herança para além disso. Em vez disso, sempre foi recomendado usar composição ao invés de herança (composition over inheritance).
            </Text>
            <Text>
                Com o lançamento dos React Hooks na versão 16.8 (fevereiro de 2019), os Function Components com Hooks se tornaram o padrão da indústria, tornando os Componentes de Classe do React praticamente obsoletos. Antes disso, os Componentes de Classe e os Componentes de Função coexistiam, já que os Function Components não tinham a capacidade de gerenciar estado ou lidar com efeitos colaterais sem o uso dos Hooks.
            </Text>
        </article>

        {/* Higher-order Componets  */}
        <article>
            <H3>React Higher-Order Components</H3>
            <Text>
                Higher-Order Components (HOCs) do React (não recomendados atualmente) foram um padrão avançado bastante popular no React para reutilizar lógica entre componentes.
            </Text>
            <Text>
                A explicação mais curta para um Higher-Order Component é que ele é um componente que recebe outro componente como entrada e retorna esse componente como saída com funcionalidades estendidas. Vamos revisitar o exemplo com a funcionalidade de local storage extraída:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[5]}
            </SyntaxHighlighter>
            <Text>
                Outro padrão avançado popular no React são os Render Prop Components, que muitas vezes são usados como alternativa aos Higher-Order Components. Vale destacar que tanto os HOCs quanto os Render Prop Components podem ser usados com Componentes de Classe (como visto acima) e também com Function Components (como veremos a seguir).
            </Text>
            <Text>
                Tanto os Higher-Order Components quanto os Render Prop Components não são mais muito utilizados em aplicações modernas com React. Atualmente, o padrão mais comum para compartilhar lógica entre componentes é o uso de Function Components com React Hooks.
            </Text>
        </article>

        {/* Function Components */}
        <article>
            <H3>React Function Components</H3>
            <Text>
                Function Components (FC) do React (às vezes chamados de Functional Components) são usados como substitutos dos Componentes de Classe. Eles são definidos como funções em vez de classes. No passado, não era possível usar estado ou lidar com efeitos colaterais nos FCs, por isso também eram chamados de Functional Stateless Components (componentes funcionais sem estado), mas isso mudou com a chegada dos React Hooks, que os redefiniram como Function Components.
            </Text>
            <Text>
                React Hooks trouxeram estado e efeitos colaterais (side-effects) para os Function Components, o que fez deles o padrão da indústria nas aplicações modernas em React. O React oferece uma variedade de hooks nativos, mas também permite a criação de hooks personalizados (custom hooks). Vamos ver como o componente de classe anterior pode ser reescrito como um Function Component com Hooks:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[6]}
            </SyntaxHighlighter>
            <Text>
                O código anterior mostra o Function Component utilizando o Hook nativo useState do React para gerenciar o estado. Mas os React Hooks também foram introduzidos para trazer o gerenciamento de efeitos colaterais (side-effects) aos Function Components. O código a seguir mostra o uso do Hook useEffect do React, que é executado sempre que o valor do estado muda:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[7]}
            </SyntaxHighlighter>
            <Text>
                Por fim, mas não menos importante, podemos extrair os dois hooks em um único Hook Personalizado (Custom Hook) encapsulado, que garante a sincronização do estado do componente com o local storage. No final, esse hook retorna o valor necessário e a função de atualização (setter) para serem usados no Function Component.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[8]}
            </SyntaxHighlighter>
            <Text>
                Como ele é extraído do Function Component, pode ser reutilizado em qualquer outro componente para compartilhar lógica de negócio reutilizável. Trata-se de uma abstração e um padrão avançado no React, equivalente aos Mixins, Higher-Order Components e Render Prop Components.
            </Text>
            <Text>
                Enquanto os Mixins eram usados apenas com componentes criados via createClass, os Higher-Order Components e os Render Prop Components podiam ser usados tanto com Componentes de Classe quanto com Function Components. Mas a forma recomendada atualmente para compartilhar lógica entre componentes é utilizando os Custom Hooks.
            </Text>
        </article>

        {/* Server Components */}
        <article>
          <H3>React Server Components</H3>
          <Text>
            A adição mais recente ao React (2023) são os React Server Components (RSC), que permitem aos desenvolvedores executar componentes no servidor. Os principais benefícios são: apenas HTML é enviado para o cliente e o componente pode acessar recursos do lado do servidor.
          </Text>
          <Text>
            Como os Server Components são executados no servidor, não é possível fazer uma comparação direta com os exemplos anteriores, pois eles atendem a casos de uso diferentes. O exemplo abaixo mostra como um Server Component pode buscar dados de um recurso do lado do servidor (como um banco de dados) antes de enviar o JSX como HTML renderizado para o cliente:
          </Text>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
              {codeExamples[9]}
          </SyntaxHighlighter>
          <Text>
            Com o surgimento dos Server Components, o React também introduziu o termo Client Components, que são os componentes tradicionais do React que rodam no lado do cliente com JavaScript — ou seja, essencialmente tudo o que você viu até agora neste guia. Os Server Components, em contraste com os Client Components, não podem usar React Hooks ou qualquer código JavaScript (por exemplo, adicionar manipuladores de eventos), pois são executados no servidor.
          </Text>
          <Text>
            O próprio React fornece apenas a especificação base e os blocos de construção para os Server Components, mas depende de um framework React (como o Next.js) para implementá-los.
          </Text>
        </article>

        {/* Asyn Components  */}
        <article>
          <H3>Async Components</H3>
          <Text>
            Atualmente, Async Components são suportados apenas para Server Components, mas espera-se que sejam suportados para Client Components no futuro. Se um componente for marcado como async, ele pode realizar operações assíncronas (por exemplo, buscar dados).
          </Text>
          <Text>
            Você viu esse comportamento no exemplo anterior de Server Component, onde o componente buscava dados de um banco de dados antes de enviar o JSX renderizado como HTML para o cliente. Isso não funciona em um Client Component porque bloquearia a renderização do componente no lado do cliente. No momento, você só pode passar uma Promise do JavaScript para um Client Component:
          </Text>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
              {codeExamples[10]}
          </SyntaxHighlighter>
          <Text>
            E resolvê-la com a API use do React no Client Component.
          </Text>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[11]}
          </SyntaxHighlighter>
          <Text>
            No futuro, é provável que o React ofereça suporte a async components também para Client Components, permitindo buscar dados dentro de um Client Component antes de renderizá-lo. Todos os React Components compartilham um entendimento comum sobre como utilizar as React Props, pois elas são usadas apenas para passar informações para baixo na árvore de componentes. No entanto, o uso de state e side-effects varia entre Class Components e Function Components.
          </Text>
        </article>

        <H2>Componentes, Elementos e Instâncias</H2>
        <Text>
          A distinção entre componente, elemento e instância é essencial para compreender o ciclo de vida e o funcionamento interno do React. O componente é a definição, o elemento é a representação virtual, e a instância é a execução real durante o processo de renderização. Ao entender essa tríade, conseguimos não apenas criar aplicações mais organizadas, mas também depurar, otimizar e escalar projetos com mais clareza.
        </Text>
        {/* components */}
        <H3>Componentes</H3>
        <Text>
          Um componente em React é, fundamentalmente, uma função ou uma classe que define como uma parte da interface deve se comportar e ser exibida. Ele é uma abstração reutilizável, uma espécie de "molde" que descreve o que deve ser renderizado na tela, podendo receber props e gerenciar estado (state).
        </Text>
        <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
          {`
function MeuComponente({title}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
          `}
        </SyntaxHighlighter>

        {/* elementos */}
        <H3>Elementos</H3>
        <Text>
          Um elemento React é o objeto JavaScript que representa uma instância de uso de um componente ou de um elemento HTML nativo (como div, button, etc.). Ele é criado, por exemplo, quando você escreve {`<Botao texto="Clique aqui" />.`}. Por trás dos panos, React transforma isso em:
        </Text>
        <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
          {`React.createElement(Botao, { texto: "Clique aqui" });`}
        </SyntaxHighlighter>
        <Text>
          Esse elemento é uma estrutura imutável que descreve o que deve ser exibido na tela. Ele não é o componente em si, nem é a interface final renderizada no DOM – ele é uma descrição virtual, usada internamente pelo React para construir a árvore de componentes (a "Virtual DOM").
        </Text>

        {/* instâncias */}
        <H3>Instâncias</H3>
        <Text>
          A instância aparece principalmente em componentes de classe ou em componentes funcionais com hooks. Quando o React encontra um elemento, ele renderiza esse elemento, criando uma instância do componente, que é o momento em que ele executa o componente e produz um novo elemento React (geralmente JSX).
        </Text>
        <Text>
          Para componentes de classe, essa instância é um objeto criado com new, e o React gerencia o ciclo de vida por meio dos métodos como componentDidMount, render, etc. Para componentes funcionais, a ideia de "instância" é mais abstrata: a cada renderização, o React executa a função do componente, com um contexto interno que mantém estado via hooks como useState e useEffect.
        </Text>

        <UpPage />
       </>
    );
}