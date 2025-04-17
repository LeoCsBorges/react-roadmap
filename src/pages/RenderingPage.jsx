import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Item'
import { ItemContainer } from '@/components/ui/ItemContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function RenderingPage() {
    return (
        <ItemContainer>
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

            </article>

            <UpPage />
        </ItemContainer>
    );
}
