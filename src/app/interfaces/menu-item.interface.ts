export interface IMenuItems {
    id: number;
    icon: string;
    label: string;
    router?: string;
    subItem?: IMenuItems[];
}