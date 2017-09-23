/**
 * Created by Paddy on 28/11/2016.
 */
export class Experience {

    constructor(public id: string,
                public position: string,
                public companyName: string,
                public startDate: string,
                public endDate: string,
                public techUsed: string,
                public keyProjects: Array<string>,
                public about: Array<string>,
                public url: string,
                public state = 'inactive') {
    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
