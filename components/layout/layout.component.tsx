import HeaderComponent from "../header/header.component";
import * as React from 'react';
import { ILayoutComponentProps } from "Interfaces";

export function LayoutComponent({ children }: ILayoutComponentProps) {
    return (
        <React.Fragment>
            <HeaderComponent />
            <main>
                {children}
            </main>
        </React.Fragment>
    );
}