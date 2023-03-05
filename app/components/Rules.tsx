import React, { FC } from 'react'
import Image from 'next/image'

const Rules: FC<{ closeRules: () => void }> = ({ closeRules }) => {
    return (
        <div className='relative flex flex-col m-auto border shadow rounded-[40px] bg-white mx-5 md:mx-auto pt-[30px] pb-[60px] items-center px-5 md:w-[480px]'>
            <h1 className='text-lg font-bold mb-[29px]'>RULES</h1>
            <div className='flex flex-col gap-[33px]'>
                <section>
                    <h2 className='text-purple font-bold mb-4'>OBJECTIVES</h2>
                    <p className='text-xs'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
                </section>
                <section>
                    <h2 className='text-purple font-bold mb-4'>HOW TO PLAY</h2>
                    <ol className='list-decimal text-xs marker:font-bold flex flex-col gap-[10px] pl-5'>
                        <li className='pl-1'>Players must alternate turns, and only one disc can be dropped in each turn. </li>
                        <li className='pl-1'>Red goes first in the first game.</li>
                        <li className='pl-1'>The game ends when there is a 4-in-a-row or a stalemate.</li>
                        <li className='pl-1'>The starter of the previous game goes second on the next game.</li>
                    </ol>
                </section>
            </div>
            <button
                className='absolute bottom-[-32px]'
                onClick={closeRules}
            >
                <Image
                    alt='icon check'
                    src='/icon-check.svg'
                    width={64}
                    height={64}
                />
            </button>
        </div>
    )
}

export default Rules