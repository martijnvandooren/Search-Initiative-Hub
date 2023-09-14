import { VotingOption } from "./VotingOption";

export class VotingSubject{
    id: number;
    title: string;
    options: VotingOption[];

    constructor(id: number, title: string, options: VotingOption[]){
        this.id = id;
        this.title = title;
        this.options = options;
    }
}