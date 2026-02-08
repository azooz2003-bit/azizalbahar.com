import '../styles/Item.css'

export default function Tag(name: string) {
    return (
        <>
            <h3 className="Tag" >
                {name}
            </h3>
        </>
    )
}