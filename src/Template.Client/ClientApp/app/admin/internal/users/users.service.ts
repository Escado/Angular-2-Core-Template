import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IUser } from './users.model'

@Injectable()
export class UserService {
    
    Get(): Observable<IUser[]> {
        let subject = new Subject<IUser[]>();
        setTimeout(() => { subject.next(users); subject.complete(); }, 1000);
        return subject;
    }
}

const users: IUser[] = [
    {
        id: 1,
        name: "Ben",
        surname: "Dakov"
    }, {
        id: 2,
        name: "Me",
        surname: "You"
    },


]