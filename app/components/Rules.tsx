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
                className='absolute bottom-[-32px] group'
                onClick={closeRules}
            >
                <svg width="70px" height="75px" viewBox="0 0 70 75" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>icon-check</title>
                    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="icon-check">
                            <circle className="fill-black group-hover:fill-purple" id="Oval-Copy-37" fill="#000000" cx="35" cy="35" r="35"></circle>
                            <circle className="fill-black group-hover:fill-purple" id="Oval-Copy-38" fill="#000000" cx="35" cy="40" r="35"></circle>
                            <circle id="Oval-Copy-39" fill="#FD6687" cx="35" cy="35" r="32"></circle>
                            <polyline id="Path" stroke="#FFFFFF" stroke-width="3" points="20 34.5819497 30.2640104 44.84596 50.1099704 25"></polyline>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default Rules