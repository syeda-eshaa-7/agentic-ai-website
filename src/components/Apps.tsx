'use client'
import Image from 'next/image'
import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

type Props = {}

function Apps({}: Props) {
    const scrollref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:scrollref,
        offset:["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress,[0, 0.3, 0.5, 1],[0, 0, 1 , 1])
    const translateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1] , [200, 100 ,0, 0])
    console.log(opacity, translateX)
  return (
    <motion.div ref={scrollref} style={{opacity , translateX}} className='relative my-4'>
        <div className='relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 lg:gap-x-40'>
            <div className='flex flex-col items-center gap-8'>
                <p className='text-white'>Agents works everywhere:</p>
                <div className='flex w-full justify-around md:justify-between'>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/node.webp' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/deno.png' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/bun.png' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/logo-4.png' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/chrome.webp' alt='Node' width={114} height={102}/>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8'>
                <p className='text-white'>And with everything:</p>
                <div className='flex w-full justify-around md:justify-between'>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/react.webp' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/logo-2.png' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/vite.webp' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/next.png' alt='Node' width={114} height={102}/>
                    <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/logo-5.png' alt='Node' width={114} height={102}/>
                </div>
            </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 h-96 overflow-hidden'>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[50px] w-full bg-rose-500/30 blur-3xl'></div>
            <div className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[75px] w-2/3 bg-rose-500/40 blur-3xl'></div>
        </div>
        <hr className='w-full border-none h-px bg-gradient-to-r from-rose-700/0 via-rose-700/25 to-rose-700/0' />
    </motion.div>
  )
}

export default Apps

// 'use client'
// import Image from 'next/image'
// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform } from "framer-motion"

// type Props = {}

// function Apps({}: Props) {
//     const scrollref = useRef<HTMLDivElement>(null)
//     const { scrollYProgress } = useScroll({
//         target: scrollref,
//         offset: ["start end", "end start"]
//     })

//     const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0, 0, 1, 1])
//     const translateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [200, 100, 0, 0])

//     return (
//         <motion.div ref={scrollref} style={{ opacity, translateX }} className='relative my-4'>
//             <div className='relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 lg:gap-x-40'>
//                 {/* First Row: AI Frameworks */}
//                 <div className='flex flex-col items-center gap-8'>
//                     <p className='text-white'>Agenticali integrates with leading AI frameworks:</p>
//                     <div className='flex w-full justify-around md:justify-between'>
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/tensorflow.png' alt='TensorFlow' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/pytorch.png' alt='PyTorch' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/openai.png' alt='OpenAI' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/huggingface.png' alt='Hugging Face' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/langchain.png' alt='LangChain' width={114} height={102} />
//                     </div>
//                 </div>

//                 {/* Second Row: Development Tools */}
//                 <div className='flex flex-col items-center gap-8'>
//                     <p className='text-white'>And works seamlessly with modern development tools:</p>
//                     <div className='flex w-full justify-around md:justify-between'>
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/python.png' alt='Python' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/typescript.png' alt='TypeScript' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/docker.png' alt='Docker' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/kubernetes.png' alt='Kubernetes' width={114} height={102} />
//                         <Image className='h-10 w-auto sm:h-12 saturate-0 hover:saturate-100 transition-all duration-300 cursor-pointer' src='/vscode.png' alt='VS Code' width={114} height={102} />
//                     </div>
//                 </div>
//             </div>

//             {/* Background Effects */}
//             <div className='absolute inset-x-0 bottom-0 h-96 overflow-hidden'>
//                 <div className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[50px] w-full bg-rose-500/30 blur-3xl'></div>
//                 <div className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 h-[75px] w-2/3 bg-rose-500/40 blur-3xl'></div>
//             </div>

//             {/* Divider */}
//             <hr className='w-full border-none h-px bg-gradient-to-r from-rose-700/0 via-rose-700/25 to-rose-700/0' />
//         </motion.div>
//     )
// }

// export default Apps