import { StockType } from "../../../types"
import { DraggableProvided } from "react-beautiful-dnd"


interface StockCardProps{
    stockCard: StockType,
    index: number,
    provided: DraggableProvided
 }

 export type { StockCardProps }