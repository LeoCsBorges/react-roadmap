import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Content'
import { ContentContainer } from '@/components/ui/ContentContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function RenderingPage() {
    return (
        <ContentContainer>
            <H1>Renderização</H1>
            <Text>
            A renderização no React é baseada em uma abordagem declarativa, onde o desenvolvedor descreve como a interface deve se parecer de acordo com o estado e as propriedades (props) do componente. Ao invés de manipular diretamente o DOM real, o React utiliza uma representação leve chamada Virtual DOM (VDOM). Sempre que há uma mudança de estado ou props, uma nova árvore do VDOM é gerada e comparada com a versão anterior por meio de um algoritmo de diferença. Esse processo, chamado de reconciliation, identifica as alterações mínimas necessárias e atualiza apenas os trechos modificados do DOM real, tornando a renderização mais eficiente e melhorando a performance da aplicação.
            </Text>
            <Text>
            Além disso, o React oferece mecanismos para evitar re-renderizações desnecessárias, como React.PureComponent, shouldComponentUpdate e React.memo, que permitem otimizar ainda mais o desempenho ao controlar quando um componente realmente precisa ser atualizado. Recursos como React.lazy e Suspense também contribuem para o carregamento sob demanda de componentes, reduzindo o tempo de carregamento inicial. Com essas estratégias, o React garante interfaces rápidas, responsivas e escaláveis, mesmo em aplicações complexas.
            </Text>

            {/* Ciclo de vida */}
            <article>
                <H2>Ciclo de Vida do Componente</H2>
                <Text>
                Desde que o React surgiu, lá em 2013, os desenvolvedores passaram a utilizar componentes de classe para aproveitar todos os recursos da biblioteca (extensões da React.Component) com o objetivo de manipular o DOM no desenvolvimento de aplicações baseadas em React. Mas como funciona exatamente a abordagem baseada em componentes de classe?
                </Text>
                <Text>
                Tradicionalmente, isso é feito através da criação de classes que estendem React.Component, permitindo acesso a métodos especiais e ao ciclo de vida do componente. Como você provavelmente já sabe, cada instância de um componente React possui um lifecycle (ciclo de vida). Esse ciclo de vida é dividido em três fases principais: montagem (mounting), atualização (updating) e desmontagem (unmounting). Cada fase oferece métodos específicos — como componentDidMount, componentDidUpdate e componentWillUnmount — que permitem ao desenvolvedor controlar com precisão o comportamento do componente em momentos específicos da sua existência na aplicação. Essa estrutura tradicional fornece um modelo claro e poderoso, especialmente útil antes do surgimento dos hooks com os componentes funcionais.  
                </Text>

                <H3>Class components vs Functional components</H3>
                <Text>
                Como você provavelmente já sabe, uma forma alternativa de aproveitar os métodos do ciclo de vida em React é por meio dos hooks. Isso se deve principalmente aos hooks useState e useEffect — funções especiais que se conectam aos recursos internos do React, permitindo definir o estado inicial e reagir a eventos do ciclo de vida diretamente em componentes funcionais. Atualmente, é possível emular o comportamento da maioria dos métodos de ciclo de vida suportados apenas com o uso cuidadoso desses dois hooks em funções JavaScript puras.
                </Text>
                <Text>
                Mas será que os componentes funcionais com hooks são superiores aos baseados em classe? Antes de responder essa pergunta, é importante revisar as fases do ciclo de vida usando a abordagem tradicional com classes. Essa compreensão vai ajudar a comparar melhor as duas formas de trabalhar com componentes no React.
                </Text>

                <H3>Mounting no React Class Component</H3>
                <Text>
                Como mencionamos, durante a fase de mounting (montagem) do ciclo de vida, o componente de classe é inserido no DOM. Um bom exemplo é o método <TextStrong>componentDidMount()</TextStrong> — um método do ciclo de vida que é executado logo após o componente ser montado e renderizado no DOM. Esse método é especialmente útil quando você precisa iniciar uma função com intervalo de tempo, fazer uma requisição assíncrona ou configurar algum recurso externo. Exemplo:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`componentDidMount() {
  fetch(url).then(res => {
    // Handle response in the way you want.
    // Most often with editing state values.
  })
}`
                } </SyntaxHighlighter>

                <H3>Updating no React Class Component</H3>
                <Text>
                O método <TextStrong>componentDidUpdate()</TextStrong> é chamado logo após uma atualização do componente ocorrer. Ele é executado sempre que o componente é atualizado, exceto durante a renderização inicial. Esse é um bom momento para interagir com ambientes externos que não são reativos, como APIs externas, manipulação direta do DOM ou sincronização com serviços externos. Fazer requisições HTTP aqui é uma prática comum e útil. 
                </Text>
                <Text>
                Você também pode usar setState() dentro de componentDidUpdate() para agendar mudanças de estado com base em novas props ou dados carregados, mas é fundamental envolver essa chamada em uma condição, a fim de evitar loops infinitos. Isso acontece porque toda vez que setState() é chamado, o componente é atualizado, e após essa atualização, componentDidUpdate() é chamado novamente — se o setState() for chamado de novo sem controle, esse ciclo se repete indefinidamente, mesmo que os valores do estado não mudem.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`componentDidUpdate(prevProps, prevState) {
  // Always compare props or state
  if (this.props.counter !== prevProps.counter) {
    this.postCounter(this.props.counter);
  }
}`
                } </SyntaxHighlighter>

                <H3>Unmounting no React Class Component</H3>
                <Text>
                O método <TextStrong>componentWillUnmount()</TextStrong> é invocado imediatamente antes do componente ser removido do DOM. Ele é essencial para realizar tarefas de limpeza que evitam vazamentos de memória ou comportamentos inesperados após o componente deixar de existir. Esse método é normalmente utilizado para remover event listeners, limpar intervalos ou timeouts, e cancelar requisições assíncronas que possam tentar atualizar o estado de um componente que já foi desmontado. Em outras palavras, qualquer recurso externo iniciado durante o ciclo de vida do componente deve ser encerrado aqui para garantir a integridade da aplicação.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`componentWillUnmount() {
	document.removeEventListener("click", this.someFunction);
}`
                } </SyntaxHighlighter>


                <H3>Ciclo de vida do Componente React com Hooks</H3>
                <Text>
                Você pode utilizar o hook <TextStrong>useEffect</TextStrong> para obter os mesmos resultados que os métodos componentDidMount, componentDidUpdate e componentWillUnmount em componentes funcionais. O useEffect aceita dois parâmetros: o primeiro é uma função de callback que será executada após a renderização, de forma semelhante ao que acontece com componentDidMount. O segundo parâmetro é o array de dependências, que determina quando o efeito deve ser reexecutado.
                </Text>
                <Text>
                Se você quiser que o <TextStrong>useEffect</TextStrong> rode apenas uma vez, durante a montagem do componente (e faça a limpeza na desmontagem), basta passar um array vazio ([]) como segundo argumento. Isso instrui o React a executar o efeito apenas na montagem e a executar a função de limpeza na desmontagem, imitando exatamente o comportamento de componentDidMount e componentWillUnmount. Para fazer a limpeza, retorne uma função de callback no useEffect:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`useEffect(
  () => {
    document.addEventListener(“click”, someFunc);
    
    return () => {
      document.removeEventListener(“click”, someFunc);
    };
  },
  []
);`
                } </SyntaxHighlighter>
                
                <H3>Class Components Vs Hooks</H3>
                <Text>
                Hoje, os componentes funcionais com hooks são o padrão moderno no desenvolvimento com React. Eles oferecem mais clareza, reutilização de lógica e um código mais enxuto. Os componentes de classe ainda funcionam bem e são comuns em projetos legados, mas, para novos projetos, os hooks são geralmente a escolha preferida.
                </Text>
            </article>

            {/* Listas e Chaves */}
            <article>
                <H2>Lists e Keys</H2>
                <Text>
                Ao trabalhar com interfaces dinâmicas em React, é comum lidarmos com listas de dados que precisam ser renderizadas na interface. Para isso, o React fornece uma abordagem eficiente baseada em dois conceitos fundamentais: Lists (listas) e Keys (chaves).
                </Text>

                <H3>Renderizando Listas em React</H3>
                <Text>
                Em React, podemos usar o método .map() do JavaScript para iterar sobre arrays e renderizar componentes dinamicamente. Vamos ver um exemplo prático:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const users = ['Ana', 'Bruno', 'Carlos'];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  );
}`
                } </SyntaxHighlighter>

                <Text>
                Este código renderiza uma UL com três LI. No entanto, se executarmos esse código, o React irá emitir um warning no console:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`Warning: Each child in a list should have a unique "key" prop.`
                } </SyntaxHighlighter>
                <H3>O que são Keys?</H3>
                <Text>
                Keys são atributos especiais que devemos adicionar a cada elemento da lista quando usamos .map() para criar elementos JSX. Elas ajudam o React a identificar quais itens foram alterados, adicionados ou removidos. Reescrevendo o exemplo anterior com keys:  
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const users = ['Ana', 'Bruno', 'Carlos'];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}`
                } </SyntaxHighlighter>
                <Text>
                <TextStrong>Cuidado com o uso de índices como Keys!</TextStrong> Embora o exemplo acima use index como key, isso não é recomendado na maioria dos casos. Usar o índice do array como key pode causar problemas de desempenho e bugs sutis na interface, especialmente quando a lista muda (adiciona ou remove itens, por exemplo). Por quê? Porque o React pode reutilizar componentes de forma incorreta ao comparar as chaves antigas com as novas. O ideal é usar uma chave única e estável, como um id.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Bruno' },
  { id: 3, name: 'Carlos' },
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
                } </SyntaxHighlighter>
                <Text>
                O React utiliza um algoritmo chamado reconciliation para atualizar a DOM de forma eficiente. Quando o estado muda e o componente é re-renderizado, o React compara a nova lista com a antiga usando as keys. Assim, ele sabe exatamente o que mudou e atualiza apenas o necessário na interface. Sem keys únicas e estáveis, o React pode: 1. Reutilizar elementos incorretamente; 2. Perder o estado interno de componentes; 3. Aplicar atualizações desnecessárias à DOM.
                </Text>
            </article>

            {/* Render Props */}
            <article>
                <H2>Render Props</H2>
                <Text>
                Render Props é um padrão avançado no React que permite compartilhar lógica entre componentes de forma reutilizável e flexível. Ele funciona ao passar uma função como prop — geralmente chamada de render ou children — que define como o componente deve ser renderizado. Essa função recebe dados internos do componente e retorna o JSX que deve ser exibido, permitindo que o componente encapsule a lógica (como detecção de posição do mouse, autenticação, etc.) enquanto o componente pai define a interface visual. Esse padrão oferece grande controle sobre o comportamento e a apresentação de componentes, sendo uma alternativa poderosa aos High Order Components (HOCs).
                </Text>
                <Text>
                Apesar de útil, o padrão de Render Props perdeu parte de sua popularidade com a introdução dos React Hooks, que oferecem uma maneira mais simples e legível de compartilhar lógica entre componentes funcionais. Hoje em dia, muitos casos de uso de Render Props podem ser substituídos por hooks personalizados, que tornam o código mais direto e fácil de manter. Ainda assim, Render Props continua sendo relevante em situações que exigem flexibilidade extrema na renderização ou quando se trabalha com bibliotecas mais antigas baseadas nesse padrão.
                </Text>
            </article>

            {/* Refs */}
            <article>
                <H2>Refs</H2>
                <Text>
                Ocasionalmente, ao construir aplicações em React, podemos querer armazenar alguns dados que não são state nas instâncias dos componentes. Ou seja, dados que queremos armazenar, mas que não necessitam de um rerender da instância do componente. 
                </Text>
                <Text>
                Por exemplo, suponha que queremos armazenar o elemento real do DOM associado a uma instância de componente, para que possamos acessá-lo diretamente e, possivelmente, executar alguns métodos do DOM sobre ele. Um exemplo clássico disso é focar um elemento input após ele ser renderizado no React, o que é feito chamando o método focus() no nó do elemento input do DOM. Nesses casos, obviamente não precisamos usar o state para armazenar esses dados. O que precisamos, na verdade, é de uma <TextStrong>ref</TextStrong>.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`Uma ref é uma forma de armazenar dados que não fazem parte do state em uma instância de componente.`
                } </SyntaxHighlighter>
                <Text>
                Como você pode imaginar, o termo ref é uma forma abreviada de reference (referência). Nesse sentido, uma ref é simplesmente uma referência, ou seja, um objeto que armazena dados que não fazem parte do state para uma determinada instância de componente. Como as refs não estão relacionadas ao state dos componentes, elas não causam nenhum rerender.
                </Text>
                <H3>useRef() Hook</H3>
                <Text>
                Assim como o hook useState() conecta um componente ao utilitário de state do React, o hook useRef() o conecta ao utilitário de ref do React. Basicamente, chamar useRef() (dentro de um componente) cria uma nova ref. A função do hook pode receber um valor inicial para a ref. useRef() retorna a ref propriamente dita, ou seja, uma referência para um objeto que armazena os dados atuais da ref. Esse objeto não é o dado em si; em vez disso, ele possui uma propriedade <TextStrong>current</TextStrong>, que contém os dados da ref que fornecemos ao chamar useRef().
                </Text>
                <Text>
                Vamos supor que queremos salvar o momento em que uma determinada seleção foi feita e, em seguida, exibi-lo quando a seleção for clicada, utilizando um alert. Graças às refs, isso é extremamente fácil de fazer:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function LanguageItem({children}) {
   const createdAt = useRef(new Date());

   return (
      <li onClick={() => alert(createdAt.current)}>{children}</li>
   );
}`
                } </SyntaxHighlighter>
                <Text>
                No momento em que um 'LanguageItem' é criado pela primeira vez, o horário é registrado naquele instante e armazenado em uma ref criada. A partir daí, a ref permanece como está, ou seja, não é atualizada. Lembre-se de que essa mesma tarefa poderia ter sido realizada usando state, mas não há absolutamente nenhuma necessidade disso. Se não precisamos de state, então simplesmente não devemos usá-lo. Simples assim.
                </Text>
                <Text>
                Assim como o state é preservado entre os rerenders dos elementos do React, as refs também são preservadas exatamente da mesma forma. Isso também significa que, se o elemento for descartado, suas refs também serão descartadas. Agora, vamos ver como acessar diretamente elementos do DOM por meio de refs no React.
                </Text>
                <H3>A prop Ref</H3>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function App() {
   return (
      <>
         <div>A div</div>
         <button>Get dimensions of div</button>
      </>
   );
}`
                } </SyntaxHighlighter>
                <Text>
                Considere o código acima. Queremos armazenar uma referência ao nó do elemento DOM correspondente ao elemento div aqui, para que possamos recuperar sua largura (width) e altura (height) posteriormente. Usando refs e nosso conhecimento sobre o DOM, aqui está uma maneira de fazer isso:  
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function App() {
   const divElement = useRef(document.querySelector('div'));

   function onClick() {
      const width = divElement.current.offsetWidth;
      const height = divElement.current.offsetHeight;
      alert(Width: $width, Height: $height);
   }

   return (
      <>
         <div>A div</div>
         <button onClick={onClick}>Get dimensions of div</button>
      </>
   );
}`
                } </SyntaxHighlighter>
                <Text>
                O método document.querySelector() seleciona o elemento div, que então é armazenado na ref divElement. Agora, quando o botão é clicado, podemos facilmente acessar esse elemento div e recuperar suas dimensões, usando a ref divElement. Embora esse exemplo funcione, há um pequeno problema com ele. Tivemos que procurar manualmente o elemento DOM desejado usando querySelector() e, em seguida, inicializamos a divElement com isso. O React simplifica essa abordagem, e com razão, com a ajuda da ref prop. Usando a ref prop, não precisamos mais fazer nenhuma seleção manual de elementos! Vamos ver como a ref funciona.
                </Text>
                <Text>
                Primeiro, como antes, criamos uma ref para armazenar uma referência a um elemento DOM. Isso, obviamente, significa chamar useRef(). Em seguida, vamos até o elemento React cujo elemento DOM correspondente precisamos acessar e definimos a ref prop nele. O valor dessa ref prop é simplesmente a ref que criamos antes. Lembre-se de que uma ref é um objeto e, portanto, passar uma para a ref prop significa que o createElement() agora tem controle total sobre essa ref e pode modificar qualquer uma de suas propriedades. E é exatamente isso que acontece — o React pega a ref passada pela ref prop de um elemento e define a propriedade current correspondente ao elemento DOM. Vamos usar a ref para reimplementar o programa anterior:
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`function App() {
   const divElement = useRef(); // No need to initialize the ref.

   function onClick() {
      const width = divElement.current.offsetWidth;
      const height = divElement.current.offsetHeight;
      alert(Width: $width, Height: $height);
   }

   return (
      <>
         <div ref={divElement}>A div</div>
         <button onClick={onClick}>Get dimensions of div</button>
      </>
   );
}`
                } </SyntaxHighlighter>
                <Text>
                Como você pode ver, esse código é muito mais compacto e simples do que o anterior. Ao adotar essa abordagem de usar a ref prop, não precisamos nos preocupar em selecionar elementos DOM manualmente — basta decidir qual nó DOM correspondente ao elemento React queremos referenciar e, em seguida, passar a ref prop para ele.
                </Text>
            </article>

            {/* Eventos */}
            <article>
              <H3>Eventos</H3>
              <Text>
              No React, os events (eventos) funcionam de forma semelhante aos eventos do DOM em JavaScript, mas com algumas diferenças importantes que tornam o uso mais consistente e multiplataforma. React utiliza um sistema de eventos sintéticos chamado SyntheticEvent, que encapsula os eventos nativos do navegador e fornece uma interface padronizada entre diferentes navegadores. Isso significa que, independentemente de como um navegador implementa um determinado evento, o React garante que seu comportamento será previsível e coerente. Os eventos em React são nomeados utilizando a convenção camelCase, utilizando 'handle' e o evento referido. São passados como funções dentro do JSX, como por exemplo:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
                {
`import React from 'react';

function App() {
  function handleClick() {
    console.log('Button click ...');
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Event Handler
      </button>
    </div>
  );
}`
                } </SyntaxHighlighter>
              <Text>
              Além disso, o React gerencia o ciclo de vida dos eventos de forma otimizada, o que contribui para a performance da aplicação. Um ponto importante é que, ao contrário do JavaScript tradicional, você não pode retornar false para prevenir o comportamento padrão de um evento; em vez disso, deve-se usar event.preventDefault(). Também é possível acessar o evento nativo, caso necessário, através da propriedade nativeEvent do SyntheticEvent. Eventos mais comuns incluem onChange para inputs, onSubmit para formulários, onMouseEnter, onFocus, entre outros. Entender como os eventos funcionam no React é essencial para construir interfaces interativas e responsivas, garantindo que a lógica de interação esteja desacoplada do DOM e integrada ao modelo declarativo do React.
              </Text>
            </article>

            <UpPage />
        </ContentContainer>
    );
}
