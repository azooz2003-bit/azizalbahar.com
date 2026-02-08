import ItemView, { Item } from "./Item";
import "../styles/App.css";
import "../styles/Section.css";

export default function SectionView(section: Section) {
    const title: string = section.sectionTitle;
    const projects = section.projects.map(item => {
        return ItemView(item)
    })

    return (
        <div className="Section" > 
            <h2 className="Sub-heading" >{title}</h2>
            {projects}
        
        </div>
    )
}

export class Section {
    sectionTitle: string;
    projects: Item[];

    constructor(sectionTitle: string, projects: Item[]) {
        this.sectionTitle = sectionTitle
        this.projects = projects
    }

}

