import {v4} from "@types/uuid";

export type TTodo = {
    title: string,
    content: string,
    done: boolean,
    id: v4,
}
export type TProduct = {
    name: string,
    description: string,
    price: Number,
    id: number,
    imageUrl: string,
}