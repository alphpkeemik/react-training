import {v4} from "@types/uuid";

export type TTodo = {
    title: string,
    content: string,
    done: boolean,
    id: v4,
}