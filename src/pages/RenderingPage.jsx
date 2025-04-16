import { H1, H2, H3, Text, TextStrong, UpPage } from '@/components/ui/Item'
import { ItemContainer } from '@/components/ui/ItemContainer';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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


            <H2>Ciclo de Vida do Componente</H2>
        </ItemContainer>
    );
}
