import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Item'
import { ItemContainer } from '@/components/ui/ItemContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function ComponentBasicsPage() {
    return (
        <ItemContainer>
            <H1>Noções básicas de Componentes</H1>
            <H2>JSX (JavaScript XML)</H2>
            <Text>
            JSX é uma extensão de sintaxe para JavaScript amplamente utilizada no ecossistema React. Ela permite escrever estruturas semelhantes a HTML dentro do código JavaScript, proporcionando uma maneira declarativa e expressiva de descrever a árvore de elementos da interface do usuário. Embora o JSX não seja um requisito para utilizar React — já que o mesmo pode ser escrito usando chamadas explícitas a React.createElement() — ele se tornou uma convenção amplamente adotada por sua legibilidade, produtividade e integração fluida com a lógica JavaScript.
            </Text>

            <H3>1. Conceito e transformação</H3>
            <Text>
            O JSX é interpretado por transpiladores como o Babel, que converte essa sintaxe em chamadas JavaScript puras. Um fragmento como:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
const elemento = <h1>Olá, mundo!</h1>; 
`
            } </SyntaxHighlighter>
            <Text>
            É transformado, em tempo de build, em:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
const elemento = React.createElement("h1", null, "Olá, mundo!");
`
            } </SyntaxHighlighter>
            <Text>
            Essa chamada ao React.createElement() retorna um objeto com a seguinte estrutura:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
{
  type: 'h1',
  props: {
    children: 'Olá, mundo!'
  }
}
`
            } </SyntaxHighlighter>
            <Text>
            Esse objeto é conhecido como React Element, e representa a descrição abstrata (ou virtual) de um elemento DOM — é parte fundamental do processo de renderização pelo Virtual DOM.
            </Text>

            <H3>2. Integração com JavaScript</H3>
            <Text>
            Uma das principais vantagens do JSX é a sua integração nativa com JavaScript. Através das chaves {}, é possível interpolar expressões dentro do JSX:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
const nome = "João";
const elemento = <h1>Olá, {nome}</h1>;
`
            } </SyntaxHighlighter>
            <Text>
            Dentro das chaves, podem ser utilizadas expressões válidas em JavaScript, como chamadas de função, operadores ternários, literais, etc. Não é possível inserir declarações (como if, for, let, etc.) diretamente dentro do JSX. Exemplo com lógica condicional:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
const estaLogado = true;
return <p>{estaLogado ? "Bem-vindo de volta" : "Por favor, faça login"}</p>;
`
            } </SyntaxHighlighter>
            <Text>
            JSX representa uma solução elegante e prática para construir interfaces no React. Ao combinar o paradigma declarativo do HTML com a expressividade do JavaScript, ele permite que os desenvolvedores descrevam interfaces de forma intuitiva, concisa e eficiente. 
            </Text>


            <H2>Props vs State</H2>
            <Text>
            "Props", abreviação de "properties" (propriedades), são dados passados de um componente pai para um componente filho. Elas são imutáveis dentro do componente que as recebe, o que significa que o componente filho não pode alterar diretamente os valores das props que lhe foram entregues. As props são, portanto, um mecanismo de comunicação entre componentes, permitindo que dados fluam de cima para baixo na hierarquia da aplicação (top-down). 
            </Text>
            <Text>
            O state (estado) é um objeto gerenciado internamente por um componente. Ele representa dados mutáveis, ou seja, informações que podem mudar com o tempo, geralmente como resultado de ações do usuário, chamadas à API ou outras interações. O state é essencial para criar componentes dinâmicos, pois quando ele é alterado, o componente é automaticamente re-renderizado, refletindo as novas informações na interface.
            </Text>


            <H2>Conditional Rendering</H2>
            <H3>If</H3>
            <Text>
            A forma mais básica de renderização condicional em React é feita com uma simples instrução if. Imagine que você não quer renderizar algo no seu componente React porque as props necessárias não estão disponíveis. Por exemplo: um componente List em React não deve renderizar os elementos HTML da lista se não houver uma lista de itens para exibir. Você pode usar uma instrução if em JavaScript puro para retornar mais cedo — isso é conhecido como guard pattern (ou "padrão de guarda"):  
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
const users = [
  { id: '1', firstName: 'Robin', lastName: 'Wieruch' },
  { id: '2', firstName: 'Dennis', lastName: 'Wieruch' },
];

function App() {
  return (
    <div>
      <h1>Hello Conditional Rendering</h1>
      <List list={users} />
    </div>
  );
}

function List({ list }) {
  if (!list) {
    return null;
  }

  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
}
`
            } </SyntaxHighlighter>
            <Text>
            Experimente você mesmo definindo users como null ou undefined. Se a informação vinda das props for null ou undefined, o componente React retorna null na renderização condicional. Nesse caso, um componente React que retorna null em vez de JSX não renderiza nada. Neste exemplo, fizemos a renderização condicional com base nas props, mas ela também poderia ser baseada em state ou em hooks. Perceba que ainda não usamos a instrução if dentro do JSX, apenas fora dele, antes da declaração return.
            </Text>

            <H3>If Else</H3>
            <Text>
            Vamos continuar com o exemplo anterior para aprender sobre instruções if else em React. Se não houver uma lista, renderizamos null e escondemos o HTML, como vimos antes com a instrução if simples. No entanto, você pode querer exibir um texto como feedback para o usuário quando a lista estiver vazia, proporcionando uma melhor experiência de uso. Isso funcionaria com outra instrução if simples, mas vamos expandir o exemplo usando uma instrução if else.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`
function List({ list }) {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div>
        {list.map(item => (
          <Item item={item} />
        ))}
      </div>
    );
  }
}
`
            } </SyntaxHighlighter>
            <Text>
            Agora, o componente List renderiza ou nada, ou um texto, ou a lista de itens com base em alguma lógica JavaScript. Embora o exemplo anterior mostre como usar instruções if else em React, é recomendável usar instruções if simples sempre que você quiser proteger o seu retorno principal (neste caso: retornar a lista), como uma boa prática.
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
              `
function List({ list }) {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  }

  return (
    <div>
      {list.map(item => (
        <Item item={item} />
      ))}
    </div>
  );
}
              `
            }
            </SyntaxHighlighter>
            <Text>
            Isso é muito mais legível do que a renderização condicional com if else do exemplo anterior. Todos os guard clauses estão organizados de forma clara como instruções if simples antes da instrução principal de return, que pode ser interpretada também como um else implícito. Ainda assim, nenhuma das instruções if ou else foi usada dentro da declaração return até agora.
            </Text>

            <H2>Composition</H2>


            <UpPage />
        </ItemContainer>
    )
}