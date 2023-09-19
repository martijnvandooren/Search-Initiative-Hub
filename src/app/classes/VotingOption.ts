export class VotingOption {
    id: number;
    title: string;
    smallTitle: string;
    votes: number;

    constructor(id: number, title: string, smallTitle: string, votes: number) {
        this.id = id;
        this.title = title;
        this.smallTitle = smallTitle;
        this.votes = votes;
    }
  }