import { IProjectHome, IProjectSingle } from 'Interfaces';
import { WithTranslation } from 'react-i18next';

export interface IHomePage extends WithTranslation {
    projects: IProjectHome[]
}

export interface IEquipePage extends WithTranslation {
    project: IProjectSingle
}