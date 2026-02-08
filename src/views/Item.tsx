import '../styles/Item.css'
import Tag from './Tag';
import HackPrinceton from '../images/HackPrinceton.png'

export default function ItemView(item: Item) {
    const tags = item.tags.map( tag => {
        return Tag(tag)
    })

    function topImages() {
        const top = item.images.map(image => {
            return <ImageView src={image.src} height={image.height} width={image.width} />
        })
        .slice(0, item.images.length/2)

        return top && top.length > 0 ? top : []
    }

    function bottomImages() {
        const bottom = item.images.map(image => {
            return <ImageView src={image.src} height={image.height} width={image.width} />
        })
        .slice(item.images.length/2, undefined)

        return bottom && bottom.length > 0 ? bottom : []
    }

    return (
        <div className='Group'>
            <div className="Text">
                <h3 className='ProjectName'>{item.title}</h3>
                <div className='Tags' >
                    {tags} {/* Fall down a row if > 5. */}
                </div>
                <p className='Description' >{item.description}</p>
            </div>
            <div className="Images">
                <div className='Horizontal'>
                    {topImages()}
                </div>

                <div className='Horizontal'>
                    {bottomImages()}
                </div>
                {/* Add images variable to item group. */}
            </div>
        </div>
    )
}

function ImageView(props: Image) {
    return (
        <div className='ImageWrapper' >
            <img height={props.height} width={props.width} src={props.src} className='Image' />
        </div>

    )
}

export class Item {
    title: string;
    tags: string[];
    description: string;
    images: Image[];


    constructor(title: string, tags: string[], description: string, images: Image[] = [new Image(), new Image(), new Image(), new Image()]) {
        this.title = title
        this.tags = tags
        this.description = description
        this.images = images
    }
}

export class Image {
    width: string;
    height: string;
    src: string;

    constructor(width: string = '50%', height: string = '50%', src: string = HackPrinceton) {
        this.width = width
        this.height = height
        this.src = src
    }
}