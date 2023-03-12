import React, { FC } from 'react'
import { Dialog } from '@headlessui/react'

const PauseMenu: FC<{
    isOpen: boolean,
    continueGame: () => void,
    restart: () => void,
    quitGame: () => void,
}> = ({ isOpen, continueGame, restart, quitGame }) => {
    return (
        <Dialog
            as="div"
            open={isOpen} onClose={continueGame}
        >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <Dialog.Panel
                className="absolute inset-0 z-10 border shadow rounded-[20px] m-auto mx-5 h-fit flex flex-col items-center pb-[30px] bg-purple md:max-w-[480px] md:m-auto"
            >
                <Dialog.Title className='text-white text-lg font-bold py-[30px]'>PAUSE</Dialog.Title>
                <div className='flex flex-col w-full px-5 gap-[30px]'>
                    <button
                        className='h-[72px] text-md font-bold border shadow hover:border-purple hover:shadow-purple rounded-[20px] bg-white '
                        onClick={continueGame}
                    >CONTINUE GAME</button>
                    <button
                        className='h-[72px] text-md font-bold border shadow hover:border-purple hover:shadow-purple rounded-[20px] bg-white'
                    >RESTART</button>
                    <button
                        className='h-[72px] text-md font-bold border shadow hover:border-purple hover:shadow-purple rounded-[20px] bg-pink'
                        onClick={quitGame}
                    >QUIT GAME</button>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}

export default PauseMenu
