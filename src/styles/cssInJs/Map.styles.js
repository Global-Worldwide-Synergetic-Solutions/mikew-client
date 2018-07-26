import styled, { css } from 'styled-components'
import { setTextProps} from './Mixins.styles';

const MapFrame = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: center; 
    align-items: center;

    line-height: 2rem;
`

const BodyText = styled.div`
    font-weight: 300;
    color: white;
    padding-left: 40px;
`
const Label = styled.span`
    color: white;
    font-style: normal;
`

const MainP = styled.p`
    color: yellow;
`

const Para = styled.p`
    text-align: left;
    color: grey;
    font-style: italic;
`

export { BodyText, Para, MapFrame, MainP, Label }