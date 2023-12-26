import { useEffect, useRef, useState } from "react"

export const useDraw=(onDraw :({ctx, currentPoint , prevPoint} : Draw)=> void) =>{
  const [mouseDown , setMouseDown ]  = useState(false)    
  const canvasRef = useRef<HTMLCanvasElement>(null)
   


  const onMouseDown = ()=> setMouseDown(true)
   const prevPoint  = useRef<null | Point>(null)
    useEffect(()=>{
     // add event listeners
   const handler = ( e: MouseEvent)=>{
  const currentPoint= pointInCanvas(e)

  const ctx = canvasRef.current?.getContext('2d')
  if(!ctx || !currentPoint) return




   }

   const pointInCanvas = (e : MouseEvent)=>{
    const canvas = canvasRef.current 
    if(!canvas)return 

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX- rect.left

    const y = e.clientY-rect.top

    return {
        x , y
    }
   }
     canvasRef.current?.addEventListener('mousemove' , handler)
     console.log("inside the")

     return ()=> canvasRef.current?.addEventListener("mousemove" , handler)
    } , [])


    return {canvasRef  , onMouseDown}
}