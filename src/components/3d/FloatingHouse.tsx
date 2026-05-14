export default function FloatingHouse() {
    return (
        <div className="css-house-scene" aria-hidden="true">
            <div className="css-house">
                <div className="css-house__roof" />
                <div className="css-house__body">
                    <div className="css-house__window css-house__window--left" />
                    <div className="css-house__window css-house__window--right" />
                    <div className="css-house__door" />
                </div>
                <div className="css-house__chimney" />
                <div className="css-house__base" />
            </div>
        </div>
    )
}
