'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import PauseMenu from './PauseMenu';

const Game: FC<{ viewMenu: () => void }> = ({ viewMenu }) => {
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const pause = () => {
        setIsPaused(true);
    }

    const continueGame = () => {
        setIsPaused(false);
    }

    return (
        <>
            <div className='flex flex-col px-5 w-full relative'>
                <section className='flex justify-between pt-[50px]'>
                    <button
                        className='bg-purple-dark hover:bg-pink rounded-[20px] text-white font-bold w-[108px] py-[10px]'
                        onClick={pause}
                    >
                        MENU
                    </button>
                    <Image
                        className='w-[40px]'
                        src="/logo.svg"
                        alt="Connect Four Logo"
                        width={40}
                        height={40}
                    />
                    <button
                        className='bg-purple-dark hover:bg-pink rounded-[20px] text-white font-bold w-[108px] py-[10px]'
                    >
                        RESTART
                    </button>
                </section>
            </div>
            <PauseMenu
                isOpen={isPaused}
                continueGame={continueGame}
                quitGame={viewMenu}
                restart={() => console.log('restart')}
            />
        </>
    )
}

export default Game

