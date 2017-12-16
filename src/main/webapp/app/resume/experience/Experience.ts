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
    }
}
