import { Avatar } from "./blogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div>
            BlogBuddies
        </div>
        <div>
            <Avatar name="Digvijay Kesare"/>
        </div>

    </div>
}