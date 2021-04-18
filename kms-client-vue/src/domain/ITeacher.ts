import { IGroup } from "./IGroup";

export interface ITeacher {
    firstname: string,
    lastname: string,
    socialsecuritycode: string,
    group: IGroup
}