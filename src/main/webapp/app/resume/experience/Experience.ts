/**
 * Created by Paddy on 28/11/2016.
 */
export class Experience {
    id: string;
    position: string;
    companyName: string;
    startDate: string;
    endDate: string;
    techUsed: string;
    keyProjects: Array<string>;
    about: Array<string>;
    url: string;
    state = 'inactive';

    // constructor(public id: string,
    //             public position: string,
    //             public companyName: string,
    //             public startDate: string,
    //             public endDate: string,
    //             public techUsed: string,
    //             public keyProjects: Array<string>,
    //             public about: Array<string>,
    //             public url: string,
    //             public state = 'inactive') {
    // }

    constructor(exp: any) {
        this.id = exp.id;
        this.position = exp.position;
        this.companyName = exp.companyName;
        this.startDate = exp.startDate;
        this.endDate = exp.endDate;
        this.techUsed = exp.techUsed;
        this.keyProjects = exp.keyProjects;
        this.about = exp.about;
        this.url = exp.url;
        this.state = exp.state;
    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
