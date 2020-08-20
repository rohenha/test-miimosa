import * as React from 'react';
import { IPercentComponentProps } from "Interfaces";

export function PercentComponent({ collected, target, text}: IPercentComponentProps) {

    return (
        <React.Fragment>
            <p className="text__home_percent">{Math.floor(collected / target * 100)}%</p>
            <p className="text__home_collected">{text}</p>
        </React.Fragment>
    );
}