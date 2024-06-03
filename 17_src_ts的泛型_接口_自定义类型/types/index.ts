export interface PersonInter {
    id: string,
    name: string,
    num: number,
}
// 自定义类型
export type Persons = Array<PersonInter>
// type Persons = PersonInter[]

export interface CarLimit {
    name: string,
    address: string,
    price: number
}