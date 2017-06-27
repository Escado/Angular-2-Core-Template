import { Component, OnInit } from '@angular/core'
import { UserService } from './users.provider'
import { ActivatedRoute } from '@angular/router'
import { IUser } from './users.model'


@Component({
    templateUrl: 'app/admin/internal/users/users.component.html'
})
export class UserComponent implements OnInit {

    private users: IUser[] = [];

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