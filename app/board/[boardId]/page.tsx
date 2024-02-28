<<<<<<< HEAD
import { Canvas } from "./_components/canvas"
import { Room } from "@/components/room"
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

const BoardIdPage = ({
    params
}: BoardIdPageProps) => {

    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>

=======
const BoardIdPage = () => {
    return (
        <div>
            Board id page
        </div>
>>>>>>> 453dcedb711d6d885542668d7a6c5370f1acb327
    )
}

export default BoardIdPage