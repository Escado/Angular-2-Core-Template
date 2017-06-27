import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { UserService } from './users.provider'

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private userService:UserService) {}
  resolve() {
    return this.userService.Get().map(events => events)
  }
}
