import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Content'
import { ContentContainer } from '@/components/ui/ContentContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const RoutersPage = () => {
    return (
        <ContentContainer>
            <H1>Route e React Router no React</H1>
            <article>
                <H2>O que é uma SPA?</H2>
                <Text>
                    Uma SPA, ou Single Page Application, é uma aplicação web que carrega uma única página HTML e atualiza seu conteúdo dinamicamente conforme o usuário navega. Isso evita recarregamentos completos do navegador, oferecendo uma experiência mais fluida e rápida. React é uma das bibliotecas mais populares para criar SPAs, mas ele não traz um sistema de roteamento embutido. Para isso, usamos bibliotecas como o React Router.
                </Text>

                <H2>O que é o React Router?</H2>
                <Text>
                    O React Router é a biblioteca oficial para roteamento em aplicações React. Ele permite definir caminhos de URL e associá-los a componentes, permitindo que a navegação dentro da aplicação ocorra de forma dinâmica, sem recarregamento de página. Ele oferece vários recursos úteis como rotas aninhadas, navegação programática, rotas protegidas e muito mais.
                </Text>
            </article>

            <article>
                <H2>Componentes principais do React Router</H2>
                <Text>
                    Ao trabalhar com o React Router, alguns componentes são fundamentais:
                </Text>

                <H3>{`<BrowserRouter>`}</H3>
                <Text>
                    É o componente que envolve toda a aplicação e habilita o uso do roteamento baseado no histórico do navegador. Deve ser usado uma única vez, geralmente no componente principal (App).
                </Text>
           
                <H3>{`<Routes>`}</H3>
                <Text>
                    Serve como contêiner para os elementos {`<Route>`}. Ele é necessário para organizar e gerenciar as rotas declaradas na aplicação.
                </Text>

                <H3>{`<Route>`}</H3>
                <Text>
                    É o componente que define uma rota individual. Ele especifica qual caminho (via path) será associado a qual componente (via element).
                </Text>
            </article>

            <article>
                <H2>Exemplo prático de roteamento</H2>
                <Text>
                    Veja um exemplo simples de como configurar rotas em uma aplicação React:
                </Text>

            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`
            } </SyntaxHighlighter>
                <Text>Nesse código, temos duas rotas:</Text>
                <ol style={{listStyle: 'inside', marginLeft: '3em'}}>
                    <li style={{marginBlock: '.5em'}}>/ - renderiza o componente Home</li>
                    <li style={{marginBlock: '.5em'}}>/sobre - renderiza o componente About</li>
                </ol>
                <Text>A navegação entre essas páginas é instantânea e não causa recarregamento da aplicação.</Text>
            </article>

            <article>
                <H2>Navegação programática com useNavigate</H2>
                <Text>
                    Além da navegação por links, o React Router também permite redirecionar usuários de forma programada. Isso é útil após enviar um formulário ou fazer login, por exemplo. Para isso, usamos o hook useNavigate:
                </Text>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // lógica de autenticação
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Entrar</button>;
}`
            } </SyntaxHighlighter>
            </article>

            <article>
                <H2>Recursos adicionais</H2>
                <Text>O React Router também suporta:</Text>
                <ol style={{listStyle: 'inside', marginLeft: '3em'}}>
                    <li style={{marginBlock: '.5em'}}>Rotas com parâmetros, como /usuarios/:id</li>
                    <li style={{marginBlock: '.5em'}}>Rotas aninhadas, úteis para layouts com subcomponentes</li>
                    <li style={{marginBlock: '.5em'}}>Rotas protegidas, que exigem autenticação</li>
                    <li style={{marginBlock: '.5em'}}>Lazy loading de componentes para otimizar o desempenho</li>
                </ol>
                <Text>Esses recursos tornam o React Router uma ferramenta completa para lidar com a navegação em projetos React, tanto simples quanto complexos.</Text>
            </article>

            <article>
                <H2>Conclusão</H2>
                <Text>
                    O React Router, com seus componentes como {`<Route>`} e {`<BrowserRouter>`}, é essencial para o desenvolvimento de SPAs em React. Ele permite criar navegação eficiente e organizada, além de oferecer uma série de recursos que tornam o desenvolvimento mais robusto e escalável. Dominar essa biblioteca é um passo importante para qualquer desenvolvedor React que deseja criar aplicações modernas, com rotas bem estruturadas e uma boa experiência para o usuário.
                </Text>
            </article>

            <UpPage />
        </ContentContainer>
    )
}

export default RoutersPage;