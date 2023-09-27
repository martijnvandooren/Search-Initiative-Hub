import { Component } from '@angular/core';
import { Membership } from 'src/app/classes/membership';

@Component({
  selector: 'app-join-cards',
  templateUrl: './join-cards.component.html',
  styleUrls: ['./join-cards.component.scss']
})
export class JoinCardsComponent {
  memberships: Membership[] = [
    new Membership('group', 'Free', 'A free subscribtion includes all the features of the hub are available! You can vote, discuss, see the tech tree, projects etcetera.', '#42b7ca'),
    new Membership('star_rate', 'Bronze', 'As a bronze member you get all the perks of free but with extra votes.', '#CD7F32'),
    new Membership('star_rate star_rate', 'Silver', 'As a silver member you get every perk as bronze but with more votes, priviliges and collaboration!', 'silver'),
    new Membership('star_rate star_rate star_rate', 'Gold', 'Gold members get the exclusive right to make new Questions, get extra votes and can be selected for working with the orginazation', 'gold')
  ]
}
