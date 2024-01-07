export interface Item {
    id: string,
    item: string,
    checked: boolean,
}

export default class ListItem implements Item {
    constructor(
        private _id: string = '',
        // private _item: string = '',
        // private _checked: bool = false,
    ){}

    get id():string {
        return this._id
    }

    set id(id:string){
        this._id=id
    }

}{}