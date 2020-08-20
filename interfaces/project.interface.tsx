export interface IProjectHome {
    title: string,
    status: string,
    target: number,
    collected: number,
    user: {
        first_name: string,
        last_name: string
    }
}

export interface IProjectSingle extends IProjectHome {
    description: string
}
