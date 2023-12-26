'use client'

import { FC } from "react";
import { useDraw } from "@/hooks/useDraw";
interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  const {canvasRef} = useDraw(drawLine)

  function drawLine({prevPoint , currentPoint , ctx}:Draw){
     const {x:currX , y :currY} = currentPoint;

     const color = '#000'
     const lineWidth = 5;
     let startPoint = prevPoint ?? currentPoint

     ctx.beginPath()
     ctx.lineWidth = lineWidth
  }
  return (
  <div className="w-screen h-screen bg-white flex justify-center items-center">
    <canvas
      width={650}
      height={650}
      className="border border-black rounded-md"
    />
  </div>)
}

export default page