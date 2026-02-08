import "../styles/App.css"
import "../styles/Projects.css"

import HackPrinceton from '../images/HackPrinceton.png'
import LetsBuskSim1 from '../images/LetsBuskSim1.svg'
import LetsBuskSim2 from '../images/LetsBuskSim2.svg'
import LetsBuskSim3 from '../images/LetsBuskSim3.svg'
import LetsBuskSim4 from '../images/LetsBuskSim4.svg'
import LetsBuskSim5 from '../images/LetsBuskSim5.svg'
import LetsBuskSim6 from '../images/LetsBuskSim6.svg'
import LetsBuskIcon from '../images/BuskIcon.svg'

import eduSafeSim1 from '../images/eduSafeSim1.svg'
import eduSafeSim2 from '../images/eduSafeSim2.svg'
import eduSafeSim3 from '../images/eduSafeSim3.svg'
import eduSafeSim4 from '../images/eduSafeSim4.svg'
import eduSafeSim5 from '../images/eduSafeSim5.svg'
import eduSafeSim6 from '../images/eduSafeSim6.svg'
import eduSafeIcon from '../images/eduSafeIcon.svg'

import GTLinkSim1 from '../images/GTLinkSim1.svg'
import GTLinkSim2 from '../images/GTLinkSim2.svg'
import GTLinkSim3 from '../images/GTLinkSim3.svg'
import GTLinkSim4 from '../images/GTLinkSim4.svg'
import GTLinkSim5 from '../images/GTLinkSim5.svg'
import GTLinkSim6 from '../images/GTLinkSim6.svg'
import GTLinkSim7 from '../images/GTLinkSim7.svg'
import GTLinkIcon from '../images/GTLinkIcon.svg'

import GUESSEIcon from '../images/GUESS-EIcon.svg'

import Colorly1 from '../images/Colorly1.svg'
import Colorly2 from '../images/Colorly2.svg'
import Colorly3 from '../images/Colorly3.svg'
import Colorly4 from '../images/Colorly4.svg'
import Colorly5 from '../images/Colorly5.svg'



import { Image, Item } from "./Item"
import SectionView, { Section } from "./Section"

const sections = [
    new Section("Published", [
        new Item("GUESS-E", ["iOS", "Swift", "SwiftUI", "UIKit", "Multipeer Connectivity", "OpenAI API", "Google Admob"], "Like Pictionary, with AI. Download it on the App Store.",
        [new Image('80%', '80%', GUESSEIcon)]
        )
    ]), 
    new Section("Hackathons", [
        new Item("LetsBusk App - HackPrinceton", ["iOS", "Swift", "SwiftUI", "Location API", "Maps API", "Firebase Auth", "Firestore"], "An app connecting local street artists with enthusiasts.",
            [new Image('80%', '80%', LetsBuskIcon), new Image('100%', '%100', HackPrinceton), new Image('65%', '65%', LetsBuskSim1), new Image('65%', '65%', LetsBuskSim2),new Image('65%', '65%', LetsBuskSim3), new Image('65%', '65%', LetsBuskSim4), new Image('65%', '65%', LetsBuskSim5), new Image('65%', '65%', LetsBuskSim6)]
        ),
        new Item("eduSafe - HackHarvard", ["iOS", "Swift", "SwiftUI", "Location API", "Firebase Auth", "Firestore", "Firebase Storage"], "A lite app displaying a heatmap of school intruders' possible whereabaouts. Accessible by organizational accounts only.",
            [new Image('80%', '80%', eduSafeIcon), new Image('65%', '65%', eduSafeSim1), new Image('65%', '65%', eduSafeSim2),new Image('65%', '65%', eduSafeSim3), new Image('65%', '65%', eduSafeSim4), new Image('65%', '65%', eduSafeSim5), new Image('65%', '65%', eduSafeSim6)]
        ),
        new Item("Air Hockey Game - HackGT", ["Python", "Pygame"], "", []),
        new Item("Minesweeper Game - ShellHacks", ["Python", "Tkinter"], "", [])
    ]), 
    new Section("Other", [
        new Item("GT Link", ["Tech Lead", "iOS", "Swift",  "SwiftUI", "Firebase Auth", "Firestore"], "A collaboration app for the students of Georgia Tech with the goal of bringing together students pursuing technical side-projects. Led the development process as the Tech Lead (with the GT iOS Club).",
            [new Image('80%', '80%', GTLinkIcon), new Image('65%', '65%', GTLinkSim1), new Image('65%', '65%', GTLinkSim2),new Image('65%', '65%', GTLinkSim3), new Image('65%', '65%', GTLinkSim4), new Image('65%', '65%', GTLinkSim5), new Image('65%', '65%', GTLinkSim6), new Image('65%', '65%', GTLinkSim7)]
        ),
        new Item("Colorly App", ["iOS", "Swift",  "SwiftUI", "Firebase Auth", "Firestore"], "A color-based social feed like Twitter where users select an avatar and color upon sign-up.",
        [new Image('35%', '35%', Colorly1),new Image('35%', '35%', Colorly2),new Image('50%', '50%', Colorly3),new Image('50%', '50%', Colorly4),new Image('50%', '50%', Colorly5)]
        )
    ])
]

export default function Projects() {
    const Sections = sections.map( section => {
        return SectionView(section)
    })

    return (
        <div style={wrapper} >
            <h2 className="Sub-heading Projects-header">Projects</h2>
            {Sections}
        </div>
    )
}

const wrapper = {paddingBottom: '150px', display: "flex", flexDirection: "column" as 'column', width: "100%", alignItems: "center"};