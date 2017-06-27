import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/Rx';
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