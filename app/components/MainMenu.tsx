import React from 'react'
import Image from 'next/image'

const MainMenu = () => {
    return (
        <div className='m-auto w-[480px] md:border md:shadow rounded-[40px] bg-purple'>
            <div className='flex flex-col items-center px-5 md:px-10 pt-[70px] pb-10 gap-5 text-md font-bold'>
                <Image
                    className='w-[52px] mb-[50px]'
                    src="/logo.svg"
                    alt="Connect Four Logo"
                    width={52}
                    height={52}
                />
                <button className='flex items-center justify-between border shadow rounded-[20px] w-full bg-yellow h-[72px] text-start px-4 hover:shadow-purple hover:border-purple'>
                    <span>PLAY VS PLAYER</span>
                    <Image
                        className='w-[82px]'
                        src="/player-vs-player.svg"
                        alt="player va player icon"
                        width={82}
                        height={46}
                    />
                </button>
                <button className='border shadow rounded-[20px] w-full bg-white h-[72px] text-start px-4 hover:shadow-purple hover:border-purple'>
                    GAME RULES
                </button>
            </div>
        </div>
    )
}

export default MainMenu