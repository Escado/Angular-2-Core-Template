import { Component, OnInit } from '@angular/core'
import { UserService } from './users.service'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './users.model'


@Component({
    templateUrl: 'users.component.html'
})
export class UserComponent implements OnInit {

    users: IUser[] = [];

    constructor(
        private _userService: UserService,
        private _route: ActivatedRoute
    ) { }

    setUsers(): void {
        this.users = this._route.snapshot.data['users']
    }

    ngOnInit(): void {
        this.setUsers();
    }
}