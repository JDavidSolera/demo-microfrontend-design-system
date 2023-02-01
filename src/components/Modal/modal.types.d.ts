import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { LayoutProps, SpaceProps } from "styled-system";

export type ModalType = 'alert' | 'warning' | 'info'

export type ModalStyledProps = LayoutProps<DefaultTheme> & SpaceProps<DefaultTheme>

export type ModalProps = ModalStyledProps & {
    children: ReactNode
    type?: ModalType
}