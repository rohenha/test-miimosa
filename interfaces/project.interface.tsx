export interface IProjectHome {
    title: string,
    status: string,
    target: number,
    collected: number
}

export interface IProjectSingle extends IProjectHome {
    description: string,
    user: {
        first_name: string,
        last_name: string
    }
}
