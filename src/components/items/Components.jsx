import '@/components/items/Item.css'

export function Components() {
    return (
       <>
        <h1 className='item__h1'>Componentes</h1>
        <h2 className='item__h2'>Definição</h2>
        <p className='item__text'>
            <span className='item__text--strong'>Componentes</span> são funções ou classes que retornam elementos React (geralmente escritos em JSX) e representam partes da interface do usuário (UI). Eles permitem que a aplicação seja dividida em pedaços menores, reutilizáveis e independentes, facilitando a organização, manutenção e escalabilidade do código. Um componente pode ser pequeno como um Button, ou grande como uma página inteira. Componentes são funções JavaScript que retornam markup:
        </p>

        <pre className="item__code">
        {`
function MyButton() {
    return (
        <button>I'm a button</button>
    );
}
        `}
        </pre>


        <h2 className='item__h2'>Tipos de Componentes</h2>
        <h3 className='item__h3'>React CreateClass</h3>






       </>
    );
}