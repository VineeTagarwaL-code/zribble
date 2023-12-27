'use client'

import { FC, useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { drawLine } from "@/utils/drawLine";
import { io } from "socket.io-client";
import { ChromePicker } from 'react-color'
interface pageProps { }
const socket  = io('http://localhost:3200')
const page: FC<pageProps> = ({ }) => {
  const [color, setColor] = useState<string>('#000')
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine)


  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    
  }

  function createLine({prevPoint , currentPoint , ctx }:Draw){

  }
return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
      <div className='flex flex-col gap-10 pr-10'>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  )
}

export default page