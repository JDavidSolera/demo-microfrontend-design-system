import { rgba } from "polished";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { ModalType } from "./modal.types";

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme}) => rgba(theme.colors.secondary, 0.7)};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 24px 32px;
    background: white;
    box-shadow: 0px 4px 9px 0px #777F932B;
    border-radius: 8px;
    
    ${layout}
    ${space}
`

const Icon = styled.div<{ type: ModalType}>`
    display: flex;
    margin: 0 auto;
    width: 56px;
    height: 56px;
    color: white;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    margin-bottom: 21px;
    background-color: ${({ theme }) => theme.colors.primary};
`

const ModalStyled = {
    Overlay,
    Wrapper,
    Icon
}

export default ModalStyled