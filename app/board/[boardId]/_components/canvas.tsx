"use client"

<<<<<<< HEAD
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

interface CanvasProps {
    boardId: string;
}

export const Canvas = ({
    boardId
}: CanvasProps) => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info />
            <Participants />
            <Toolbar />
        </main>
    )
}
=======
>>>>>>> 453dcedb711d6d885542668d7a6c5370f1acb327
