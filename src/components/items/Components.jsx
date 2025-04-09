import '@/components/items/Item.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import upArrow from '@/assets/images/up-icon.png'

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
        <h1 className='item__h1'>Componentes</h1>
        <h2 className='item__h2'>Definição</h2>
        <p className='item__text'>
            <span className='item__text--strong'>Componentes</span> são funções ou classes que retornam elementos React (geralmente escritos em JSX) e representam partes da interface do usuário (UI). Eles permitem que a aplicação seja dividida em pedaços menores, reutilizáveis e independentes, facilitando a organização, manutenção e escalabilidade do código. Um componente pode ser pequeno como um Button, ou grande como uma página inteira. Componentes são funções JavaScript que retornam markup:
        </p>

        <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[0]}
        </SyntaxHighlighter>

        <h2 className='item__h2'>Tipos de Componentes</h2>
        {/* createClass */}
        <article>
            <h3 className='item__h3'>React CreateClass</h3>
            <p className="item__text">
                O React inicialmente dependia do createClass (obsoleto) para definir componentes como uma factory function que criava Componentes de Classe do React sem a necessidade de uma classe em JavaScript. Essa abordagem era o padrão para construir componentes React antes da introdução do JavaScript ES6 em 2015, pois o JavaScript ES5 não possuía uma sintaxe nativa para classes.
            </p>

            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[1]}
            </SyntaxHighlighter>

            <p className="item__text">
                Neste exemplo, o método de fábrica createClass() do React recebe um objeto que define os métodos de um componente React. A função getInitialState() é usada para inicializar o estado do componente, enquanto o método obrigatório render() é responsável por exibir a saída usando JSX. Métodos adicionais, como incrementCounter(), podem ser adicionados ao objeto para servir como manipuladores de eventos do componente.
            </p>
            <p className="item__text">
                Métodos de ciclo de vida para efeitos colaterais também estavam disponíveis. Por exemplo, para gravar o valor de texto do estado no armazenamento local do navegador sempre que ele for atualizado, poderíamos usar o método de ciclo de vida componentDidUpdate(). Além disso, o valor pode ser lido do armazenamento local quando o componente recebe seu estado inicial.
            </p>

            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[2]}
            </SyntaxHighlighter>

            <p className="item__text">
                O método createClass do React não está mais disponível no pacote principal do React. Se você quiser experimentá-lo, será necessário instalar um pacote adicional do Node chamado create-react-class.
            </p>
        </article>

        {/* Mixins */}
        <article>
            <h3 className='item__h3'>React Mixins (padrões)</h3>
            <p className="item__text">
                Mixins no React (obsoletos) foram introduzidos como o primeiro padrão do React para lógica reutilizável de componentes. Com um Mixin no React, era possível extrair a lógica de um componente React para um objeto independente. Ao usar um Mixin em um componente, todas as funcionalidades do Mixin eram incorporadas ao componente:
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[3]}
            </SyntaxHighlighter>
            <p className="item__text">
                O LocalStorageMixin encapsula a lógica para gerenciar o estado do texto dentro do local storage, inicializando o texto em getInitialState e atualizando-o em componentDidUpdate. Ao adicionar o Mixin ao array mixins, o componente pode reutilizar essa funcionalidade compartilhada sem duplicar código.
            </p>
            <p className="item__text">
                No entanto, Mixins no React não são mais utilizados, pois apresentavam várias desvantagens e só funcionavam com componentes criados usando createClass.
            </p>
        </article>

        {/* Class Components */}
        <article>
            <h3 className="item__h3">React Class Components</h3>
            <p className="item__text">
                Componentes de Classe do React (não recomendados) foram introduzidos na versão 0.13, lançada em março de 2015. Antes disso, os desenvolvedores usavam a função createClass para definir componentes, mas eventualmente o React descontinuou o uso de createClass na versão 15.5 (abril de 2017) e passou a recomendar o uso dos Componentes de Classe.
            </p>
            <p className="item__text">
                Os Componentes de Classe foram introduzidos como uma forma de utilizar classes nativas do JavaScript (devido ao lançamento do ES6 em 2015), já que as classes passaram a fazer parte da linguagem.
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[4]}
            </SyntaxHighlighter>
            <p className="item__text">
                Um Componente React escrito com uma classe JavaScript possui métodos como o construtor da classe — que é usado principalmente no React para definir o estado inicial (state) ou fazer o bind de métodos — e o método obrigatório render, que retorna o JSX como saída.
            </p>
            <p className="item__text">
                Toda a lógica interna do Componente React vem da herança orientada a objetos. Mas vale lembrar que nunca foi recomendado usar herança para além disso. Em vez disso, sempre foi recomendado usar composição ao invés de herança (composition over inheritance).
            </p>
            <p className="item__text">
                Com o lançamento dos React Hooks na versão 16.8 (fevereiro de 2019), os Function Components com Hooks se tornaram o padrão da indústria, tornando os Componentes de Classe do React praticamente obsoletos. Antes disso, os Componentes de Classe e os Componentes de Função coexistiam, já que os Function Components não tinham a capacidade de gerenciar estado ou lidar com efeitos colaterais sem o uso dos Hooks.
            </p>
        </article>

        {/* Higher-order Componets  */}
        <article>
            <h3 className="item__h3">React Higher-Order Components</h3>
            <p className="item__text">
                Higher-Order Components (HOCs) do React (não recomendados atualmente) foram um padrão avançado bastante popular no React para reutilizar lógica entre componentes.
            </p>
            <p className="item__text">
                A explicação mais curta para um Higher-Order Component é que ele é um componente que recebe outro componente como entrada e retorna esse componente como saída com funcionalidades estendidas. Vamos revisitar o exemplo com a funcionalidade de local storage extraída:
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[5]}
            </SyntaxHighlighter>
            <p className="item__text">
                Outro padrão avançado popular no React são os Render Prop Components, que muitas vezes são usados como alternativa aos Higher-Order Components. Vale destacar que tanto os HOCs quanto os Render Prop Components podem ser usados com Componentes de Classe (como visto acima) e também com Function Components (como veremos a seguir).
            </p>
            <p className="item__text">
                Tanto os Higher-Order Components quanto os Render Prop Components não são mais muito utilizados em aplicações modernas com React. Atualmente, o padrão mais comum para compartilhar lógica entre componentes é o uso de Function Components com React Hooks.
            </p>
        </article>

        {/* Function Components */}
        <article>
            <h3 className="item__h3">React Function Components</h3>
            <p className="item__text">
                Function Components (FC) do React (às vezes chamados de Functional Components) são usados como substitutos dos Componentes de Classe. Eles são definidos como funções em vez de classes. No passado, não era possível usar estado ou lidar com efeitos colaterais nos FCs, por isso também eram chamados de Functional Stateless Components (componentes funcionais sem estado), mas isso mudou com a chegada dos React Hooks, que os redefiniram como Function Components.
            </p>
            <p className="item__text">
                React Hooks trouxeram estado e efeitos colaterais (side-effects) para os Function Components, o que fez deles o padrão da indústria nas aplicações modernas em React. O React oferece uma variedade de hooks nativos, mas também permite a criação de hooks personalizados (custom hooks). Vamos ver como o componente de classe anterior pode ser reescrito como um Function Component com Hooks:
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[6]}
            </SyntaxHighlighter>
            <p className="item__text">
                O código anterior mostra o Function Component utilizando o Hook nativo useState do React para gerenciar o estado. Mas os React Hooks também foram introduzidos para trazer o gerenciamento de efeitos colaterais (side-effects) aos Function Components. O código a seguir mostra o uso do Hook useEffect do React, que é executado sempre que o valor do estado muda:
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[7]}
            </SyntaxHighlighter>
            <p className="item__text">
                Por fim, mas não menos importante, podemos extrair os dois hooks em um único Hook Personalizado (Custom Hook) encapsulado, que garante a sincronização do estado do componente com o local storage. No final, esse hook retorna o valor necessário e a função de atualização (setter) para serem usados no Function Component.
            </p>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
                {codeExamples[8]}
            </SyntaxHighlighter>
            <p className="item__text">
                Como ele é extraído do Function Component, pode ser reutilizado em qualquer outro componente para compartilhar lógica de negócio reutilizável. Trata-se de uma abstração e um padrão avançado no React, equivalente aos Mixins, Higher-Order Components e Render Prop Components.
            </p>
            <p className="item__text">
                Enquanto os Mixins eram usados apenas com componentes criados via createClass, os Higher-Order Components e os Render Prop Components podiam ser usados tanto com Componentes de Classe quanto com Function Components. Mas a forma recomendada atualmente para compartilhar lógica entre componentes é utilizando os Custom Hooks.
            </p>
        </article>

        {/* Server Components */}
        <article>
          <h3 className="item__h3">React Server Components</h3>
          <p className="item__text">
            A adição mais recente ao React (2023) são os React Server Components (RSC), que permitem aos desenvolvedores executar componentes no servidor. Os principais benefícios são: apenas HTML é enviado para o cliente e o componente pode acessar recursos do lado do servidor.
          </p>
          <p className="item__text">
            Como os Server Components são executados no servidor, não é possível fazer uma comparação direta com os exemplos anteriores, pois eles atendem a casos de uso diferentes. O exemplo abaixo mostra como um Server Component pode buscar dados de um recurso do lado do servidor (como um banco de dados) antes de enviar o JSX como HTML renderizado para o cliente:
          </p>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
              {codeExamples[9]}
          </SyntaxHighlighter>
          <p className="item__text">
            Com o surgimento dos Server Components, o React também introduziu o termo Client Components, que são os componentes tradicionais do React que rodam no lado do cliente com JavaScript — ou seja, essencialmente tudo o que você viu até agora neste guia. Os Server Components, em contraste com os Client Components, não podem usar React Hooks ou qualquer código JavaScript (por exemplo, adicionar manipuladores de eventos), pois são executados no servidor.
          </p>
          <p className="item__text">
            O próprio React fornece apenas a especificação base e os blocos de construção para os Server Components, mas depende de um framework React (como o Next.js) para implementá-los.
          </p>
        </article>

        {/* Asyn Components  */}
        <article>
          <h3 className="item__h3">Async Components</h3>
          <p className="item__text">
            Atualmente, Async Components são suportados apenas para Server Components, mas espera-se que sejam suportados para Client Components no futuro. Se um componente for marcado como async, ele pode realizar operações assíncronas (por exemplo, buscar dados).
          </p>
          <p className="item__text">
            Você viu esse comportamento no exemplo anterior de Server Component, onde o componente buscava dados de um banco de dados antes de enviar o JSX renderizado como HTML para o cliente. Isso não funciona em um Client Component porque bloquearia a renderização do componente no lado do cliente. No momento, você só pode passar uma Promise do JavaScript para um Client Component:
          </p>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
              {codeExamples[10]}
          </SyntaxHighlighter>
          <p className="item__text">
            E resolvê-la com a API use do React no Client Component.
          </p>
          <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers>
            {codeExamples[11]}
          </SyntaxHighlighter>
          <p className="item__text">
            No futuro, é provável que o React ofereça suporte a async components também para Client Components, permitindo buscar dados dentro de um Client Component antes de renderizá-lo. Todos os React Components compartilham um entendimento comum sobre como utilizar as React Props, pois elas são usadas apenas para passar informações para baixo na árvore de componentes. No entanto, o uso de state e side-effects varia entre Class Components e Function Components.
          </p>
        </article>

        <a className='up-page' href="#top">
            <img src={upArrow} alt />
        </a>
       </>
    );
}