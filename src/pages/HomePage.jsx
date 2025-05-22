import CompassIcon from '@/assets/images/compass-icon.png'
import './HomePage.css'
import { ContentContainer } from '@/components/ui/ContentContainer'

export const HomePage = () => {
    return (
        <ContentContainer>
            <div className="index-wrapper">
                <img className='index-icon' src={CompassIcon} alt />
                <h2 className='index-title'>
                    Explorando o Roadmap do React: Um Guia Completo
                </h2>
            </div>
            <p className='index-description'>
                O universo do React pode parecer vasto à primeira vista, mas com um bom roadmap em mãos, tudo começa a fazer sentido. Esta página é dedicada a destrinchar, passo a passo, cada um dos principais conceitos, ferramentas e práticas que fazem parte da jornada de aprendizado em React. Da criação de componentes ao uso de hooks, da navegação com React Router até a integração com APIs — aqui você encontrará explicações claras, exemplos práticos e insights que vão te ajudar a dominar o ecossistema React de forma sólida e progressiva.
            </p>
        </ContentContainer>
    )
}

export default HomePage;