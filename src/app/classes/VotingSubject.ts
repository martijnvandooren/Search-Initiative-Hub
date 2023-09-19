import { VotingOption } from "./VotingOption";

export class VotingSubject{
    id: number;
    title: string;
    smallTitle: string;
    description: string;
    options: VotingOption[];

    constructor(id: number, title: string, smallTitle: string, description: string, options: VotingOption[]){
        this.id = id;
        this.title = title;
        this.smallTitle = smallTitle;
        this.description = description;
        this.options = options;
    }

    mostVotedOption() : VotingOption{
        return this.options.reduce((prev, current) => { return prev.votes > current.votes ? prev : current})
    }

    numberOfTotalVotes() : number {
        return this.options.reduce((accumulator, current) => {
            return accumulator + current.votes;
          }, 0);
    }
}
