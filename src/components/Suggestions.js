import "../styles/Suggestions.scss";
import Profile from './Profile'
function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">
                    Suggestions For You
                </div>
                <a href="/">See All</a>
            </div>
            <Profile caption="Followed by mapvaul + 3 more" urlText="Follow" iconSize="small"storyBorder={true} />
            <Profile caption="Followed by mapvaul + 1 more" urlText="Follow" iconSize="small"storyBorder={false} />
            <Profile caption="Followed by mapvaul + 5 more" urlText="Follow" iconSize="small"storyBorder={true} />
            <Profile caption="Follows You" urlText="Follow" iconSize="small"storyBorder={false} />
        </div>
    )
}
export default Suggestions;