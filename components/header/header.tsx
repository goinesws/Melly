import TitleCard from '@/public/titleCardMelly.svg'


export function Header() {
    return (
        <div className="relative">
            <img className="w-full z-0" src="./teaser.gif"></img>
            <div className="absolute z-10 top-0 left-0 w-full flex content-center">
                <TitleCard/>
            </div>

        </div>
    )
}