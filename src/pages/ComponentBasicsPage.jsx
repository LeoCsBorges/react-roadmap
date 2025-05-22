import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Content'
import { ContentContainer } from '@/components/ui/ContentContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ComponentBasicsPage = () => {
    return (
        <ContentContainer>
          <H1>Noções básicas de Componentes</H1>

          {/* JSX */}
          <article>
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
          </article>
         
          {/* pros vs state */}
          <article>
            <H2>Props vs State</H2>
            <Text>
            "Props", abreviação de "properties" (propriedades), são dados passados de um componente pai para um componente filho. Elas são imutáveis dentro do componente que as recebe, o que significa que o componente filho não pode alterar diretamente os valores das props que lhe foram entregues. As props são, portanto, um mecanismo de comunicação entre componentes, permitindo que dados fluam de cima para baixo na hierarquia da aplicação (top-down). 
            </Text>
            <Text>
            O state (estado) é um objeto gerenciado internamente por um componente. Ele representa dados mutáveis, ou seja, informações que podem mudar com o tempo, geralmente como resultado de ações do usuário, chamadas à API ou outras interações. O state é essencial para criar componentes dinâmicos, pois quando ele é alterado, o componente é automaticamente re-renderizado, refletindo as novas informações na interface.
            </Text>
          </article>  
            
          {/* condicional rendering */}
          <article>
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

              <H3>Ternary</H3>
              <Text>
              É verdade que podemos usar JavaScript dentro do JSX, mas isso se torna complicado ao usar instruções como if, else e switch case dentro do JSX, já que não há uma forma real de escrevê-las inline. Uma outra maneira de expressar uma instrução if else em JavaScript é usando o operador ternário.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
// if else
function getFood(isVegetarian) {
  if (isVegetarian) {
    return 'tofu';
  } else {
    return 'fish';
  }
}

// ternary operator
function getFood(isVegetarian) {
  return isVegetarian ? 'tofu' : 'fish';
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              A operação ternária torna a renderização condicional em React não apenas mais concisa, mas também oferece uma forma fácil de escrever essa lógica inline dentro do return. Dessa forma, apenas uma parte do seu JSX é renderizada condicionalmente, enquanto outras partes permanecem intactas, sem depender de nenhuma condição.  
              </Text>

              <H3>&&</H3>
              <Text>
              É comum querer renderizar um elemento ou nada. Você já aprendeu que uma condição if simples resolve essa situação. No entanto, às vezes você quer escrever essa condição inline, como no operador ternário. Veja o exemplo de um componente de indicador de carregamento, que usa um operador ternário condicional para retornar ou o elemento ou nada:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading ? <p>Loading...</p> : null}</div>;
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Isso funciona perfeitamente e você consegue escrever a condição inline no seu JSX. No entanto, existe uma alternativa que elimina a necessidade de retornar null. O operador lógico && ajuda a tornar condições que retornariam null mais concisas. Em JavaScript, uma expressão como true && 'Hello World' sempre resulta em 'Hello World', enquanto false && 'Hello World' sempre resulta em false. Em React, você pode aproveitar esse comportamento. Se a condição for verdadeira, a expressão após o operador lógico && será exibida como saída. Se a condição for falsa, o React ignora e pula essa expressão, não renderizando nada na interface.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
function LoadingIndicator({ isLoading }) {
  return <div>{isLoading && <p>Loading...</p>}</div>;
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Essa é a abordagem ideal quando você quer retornar nada ou um elemento dentro do JSX. Isso é conhecido como avaliação de curto-circuito (short-circuit evaluation), e torna o código ainda mais conciso do que usar um operador ternário.
              </Text>

              <H3>Switch Case</H3>
              <Text>
              Agora, pode haver casos em que você tenha múltiplas renderizações condicionais. Por exemplo, imagine um componente de notificação que renderiza um componente de erro, de aviso ou de informação com base em uma string de status. Nesse caso, você pode usar uma estrutura condicional como if...else if...else, um switch, ou até operadores ternários aninhados — embora seja importante manter a legibilidade do código.
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
function Notification({ text, status }) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              É inteligente usar o default no operador switch case, porque um componente React sempre precisa retornar um elemento ou null. Se um componente realiza uma renderização condicional com base em uma string, faz sentido descrever a interface do componente usando TypeScript:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
type Status = 'info' | 'warning' | 'error';

type NotificationProps = {
  text: string;
  status: Status;
};

function Notification({ text, status }: NotificationProps) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Um switch case é um bom começo para múltiplas renderizações condicionais, mas ele tem as mesmas limitações que uma instrução if else: não pode ser usado diretamente dentro do JSX. Ou será que pode? Na verdade, é possível usar switch case dentro do JSX ao encapsular a lógica em uma função de renderização condicional autoexecutável (IIFE – Immediately Invoked Function Expression). Veja como:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
function Notification({ text, status }) {
  return (
    <div>
      {(() => {
        switch (status) {
          case 'info':
            return <Info text={text} />;
          case 'warning':
            return <Warning text={text} />;
          case 'error':
            return <Error text={text} />;
          default:
            return null;
        }
      })()}
    </div>
  );
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Em conclusão, o operador switch case é útil para múltiplas renderizações condicionais, mas será que é a melhor forma de fazer isso? Vamos explorar como podemos ter renderizações condicionais múltiplas usando enums no lugar de switch case. 
              </Text>

              <H3>Multiple Conditional Renderings</H3>
              <Text>
              Na verdade, um objeto JavaScript com pares de chave e valor pode ser usado para mapear valores, mas isso não é exatamente o que tradicionalmente chamamos de enum. No JavaScript, enums não são nativos, como em outras linguagens, mas podemos simular essa funcionalidade com um objeto. Quando você cria um objeto com pares de chave e valor para mapear valores, você cria algo semelhante a um enum
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
const NOTIFICATION_STATES = {
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
  error: 'Something went wrong ...',
};
                `
              }
              </SyntaxHighlighter>
              <Text>
              Um enum é uma ótima maneira de lidar com renderização condicional com múltiplas condições em React. Eles são declarações de switch case potencializadas, porque podem ser usados dentro do JSX. Vamos considerar o componente de notificação novamente, mas desta vez com um enum como um objeto inline (chaves internas):
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
function Notification({ text, status }) {
  return (
    <div>
      {
        {
          info: <Info text={text} />,
          warning: <Warning text={text} />,
          error: <Error text={text} />,
        }[status]
      }
    </div>
  );
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              A chave da propriedade status nos ajuda a recuperar o valor do objeto. Isso é legal, não é? É muito mais legível em comparação com o operador switch case. Neste exemplo, tivemos que usar um objeto inline, porque os valores do objeto dependem da propriedade text. De qualquer forma, essa seria a minha maneira recomendada. No entanto, se não dependesse da propriedade text, você poderia usar um enum como uma constante para a renderização condicional:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
};

function Notification({ status }) {
  return (
    <div>
      {NOTIFICATION_STATES[status]}
    </div>
  );
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Isso deixa as coisas mais limpas no JSX. Se ainda dependêssemos da propriedade text de antes, poderíamos usar uma renderização condicional com uma função para recuperar o valor também:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
const getNotification = text => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />,
});

function Notification({ status, text }) {
  return <div>{getNotification(text)[status]}</div>;
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Afinal, a renderização condicional com enum em React é mais elegante do que a declaração switch case. Objetos como enums abrem várias opções para ter múltiplas renderizações condicionais.
              </Text>
              
              <H3>HOCs</H3>
              <Text>
              Os Higher-Order Components (HOCs) são uma combinação perfeita para renderização condicional em React. HOCs podem ajudar em vários casos de uso, e um desses casos pode ser alterar a aparência de um componente com uma renderização condicional. Vamos dar uma olhada em um HOC que mostra um elemento ou um componente:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
                `
// Higher-Order Component
function withLoadingIndicator(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }

    return (
      <div>
        <p>Loading</p>
      </div>
    );
  };
}

const ListWithLoadingIndicator = withLoadingIndicator(List);

function App({ list, isLoading }) {
  return (
    <div>
      <h1>Hello Conditional Rendering</h1>

      <ListWithLoadingIndicator isLoading={isLoading} list={list} />
    </div>
  );
}
                `
              }
              </SyntaxHighlighter>
              <Text>
              Neste exemplo, o componente List pode se concentrar em renderizar a lista. Ele não precisa se preocupar com o status de carregamento. Um HOC oculta todo o "ruído" do seu componente real. No final, você poderia adicionar múltiplos HOCs (composição) para ocultar mais de um caso de borda de renderização condicional. Como alternativa aos HOCs, você também poderia usar renderização condicional com uma render prop.
              </Text>
          </article>

          {/* composition */}
          <article>
            <H2>Composition</H2>
            <Text>
            Existe uma propriedade (prop do React) que nos ajuda com esse dilema em nosso componente React: a prop children do React. É uma prop especial fornecida pelo React para renderizar algo dentro de um componente, mesmo quando o componente não tem conhecimento prévio disso. Um exemplo básico pode ser o seguinte:
            </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`
const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);
`
              } </SyntaxHighlighter>
              <Text>
              O elemento button se torna um componente reutilizável chamado Button, enquanto o componente Button não sabe exatamente o que ele renderiza — exceto que sempre será um botão. Vamos usar a prop children no nosso exemplo anterior para substituir o elemento HTML form por um componente Form, que renderiza todo o seu conteúdo interno usando a prop children do React:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`
const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);
`
              } </SyntaxHighlighter>
              <Text>
              Vamos continuar com essa substituição para os outros elementos React antes de colhermos os frutos de ter um componente de Formulário React componível. O componente Button que foi mostrado anteriormente pode ser usado para renderizar nosso elemento de botão:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`
const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <label>
        Your name:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>

      <Button type="submit">Send</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);
`
              } </SyntaxHighlighter>
              <Text>
              Por fim, mas não menos importante, o elemento HTML do campo de entrada (input) e seu rótulo (label). Vamos extraí-los para outro componente React reutilizável:
              </Text>
              <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
              {
`
const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  return (
    <Form
      onSubmit={event => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <InputField value={username} onChange={setUsername}>
        Your name:
      </InputField>

      <Button type="submit">Send</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = 'button', children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </label>
);
`
              } </SyntaxHighlighter>
              <Text>
              Como você pode ver, o componente InputField se torna genérico/abstrato, enquanto todas as props são passadas para o componente para especializá-lo. Além disso, esse componente vai um passo além dos componentes Form e Button, pois oferece um novo tipo de composição de "elemento HTML", encapsulando um rótulo (label) com um campo de entrada (input) em um único componente. Ele pode ser reutilizado tanto dentro do componente Form quanto em qualquer outro lugar. Os três passos anteriores transformaram nosso Form em um componente React componível. O Form renderiza o elemento HTML form, mas tudo dentro dele é renderizado com a prop children do React. O mesmo se aplica aos componentes dentro do Form, que seguem o mesmo princípio de composição, simplesmente renderizando qualquer conteúdo passado para eles por meio da propriedade children.
              </Text>
          </article>

          <UpPage />
        </ContentContainer>
    )
}

export default ComponentBasicsPage;