import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Content'
import { ContentContainer } from '@/components/ui/ContentContainer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const WritingCss = () => {
    return (
        <ContentContainer>
            <H1>Formas de Escrever CSS no React</H1>
            <Text>
                No desenvolvimento com React, estilizar componentes pode ser feito de diversas maneiras, cada uma com suas vantagens e desvantagens. A escolha da abordagem ideal depende do tamanho do projeto, da experiência da equipe e da necessidade de escalabilidade. Neste artigo, você vai conhecer as principais formas de escrever CSS em aplicações React.
            </Text>
            <article>
                <H2>1. CSS Tradicional com Arquivos Externos</H2>
                <Text>
                    A maneira mais comum e clássica de aplicar estilos no React é utilizando arquivos .css externos. Nesse modelo, os estilos são definidos em arquivos separados e importados dentro do componente.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`// App.js
import './App.css';

function App() {
  return <div className="container">Olá, mundo!</div>;
}`
            } </SyntaxHighlighter>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`/* App.css */
.container {
  background-color: #f0f0f0;
  padding: 20px;
}`
                }</SyntaxHighlighter>
                <Text>
                    Essa abordagem é simples e familiar, mas pode causar conflitos de nomes em projetos grandes, caso as classes não sejam bem organizadas.
                </Text>
            </article>

            <article>
                <H2>2. CSS Modules</H2>
                <Text>
                    CSS Modules são uma evolução dos arquivos CSS tradicionais. Eles permitem que os estilos tenham escopo local, evitando conflitos entre classes com o mesmo nome em arquivos diferentes.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`// App.module.css
.container {
  background-color: #f0f0f0;
  padding: 20px;
}`
            } </SyntaxHighlighter>
            <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`// App.js
import styles from './App.module.css';

function App() {
  return <div className={styles.container}>Olá, mundo!</div>;
}`
                }</SyntaxHighlighter>
                <Text>
                    Ao usar CSS Modules, os nomes das classes são convertidos em identificadores únicos, garantindo encapsulamento e organização.
                </Text>
            </article>
            
            <article>
                <H2>3. CSS-in-JS com Styled-Components</H2>
                <Text>
                    O styled-components é uma das bibliotecas mais populares para CSS-in-JS. Com ele, é possível criar componentes já com estilos integrados, utilizando template literals.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`import styled from 'styled-components';

const Container = styled.div${`
  background-color: #f0f0f0;
  padding: 20px;
`};

function App() {
  return <Container>Olá, mundo!</Container>;
}`
            } </SyntaxHighlighter>
                <Text>
                    Essa abordagem oferece várias vantagens: estilo condicional com base nas props, reuso de componentes estilizados e eliminação de conflitos de classes.
                </Text>
            </article>

            <article>
                <H2>4. Emotion</H2>
                <Text>
                    Outra biblioteca popular de CSS-in-JS é o Emotion. Ela oferece uma sintaxe parecida com o styled-components, mas com mais flexibilidade e alto desempenho.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const containerStyle = css${`
  background-color: #f0f0f0;
  padding: 20px;
`};

function App() {
  return <div css={containerStyle}>Olá, mundo!</div>;
}`
            } </SyntaxHighlighter>
                <Text>
                    Emotion é uma boa escolha para quem busca controle total sobre os estilos com performance otimizada.
                </Text>
            </article>

            <article>
                <H2>5. Inline Styles</H2>
                <Text>
                    Inline styles são aplicados diretamente no elemento JSX, usando um objeto JavaScript com as propriedades CSS.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`function App() {
  const style = { backgroundColor: '#f0f0f0', padding: '20px' };
  return <div style={style}>Olá, mundo!</div>;
}`
            } </SyntaxHighlighter>
                <Text>
                    Essa técnica é útil para estilos rápidos e simples, mas tem limitações: não suporta pseudo-classes (:hover, :focus) nem media queries.
                </Text>
            </article>

            <article>
                <H2>6. Utilitários com Tailwind CSS</H2>
                <Text>
                    Tailwind CSS é um framework que permite escrever estilos diretamente nas classes dos elementos, usando utilitários pré-definidos.
                </Text>
                <SyntaxHighlighter language='jsx' style={dracula} showLineNumbers wrapLines wrapLongLines>
            {
`function App() {
  return <div className="bg-gray-100 p-5">Olá, mundo!</div>;
}`
            } </SyntaxHighlighter>
                <Text>
                    Essa abordagem acelera o desenvolvimento, promove consistência visual e evita a criação de folhas de estilo separadas. Porém, pode haver uma curva de aprendizado inicial.
                </Text>
            </article>

            <H2>Conclusão</H2>
            <Text>
                React oferece várias formas de aplicar CSS, desde as mais tradicionais até as mais modernas. CSS externo e CSS Modules são boas escolhas para quem prefere separar lógica de estilo. Já CSS-in-JS e Tailwind são ideais para projetos modernos que exigem escalabilidade, flexibilidade e manutenção facilitada.
            </Text>
            
            <UpPage />
        </ContentContainer>
    );
};

export default WritingCss;