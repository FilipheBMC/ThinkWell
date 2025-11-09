import React from 'react'
import { ListObjButtons } from '../../../constants/ButtonsDependencies'
import { IButton } from '../../../types/IButton';
import Button from '../Button';
import { playSound } from '../../../utils/sounds';
import { IQuizButtonsProps } from '../../../types/IQuizButtonProps';

const Buttons: React.FC<IQuizButtonsProps> = ({ alternatives, onSelect }) => {

    const handleClick = (option : string) => {
        playSound('click')
        onSelect(option)
    }

    return (
        <>
            {ListObjButtons.map((item: IButton, index: number) => (
                <Button
                    key={index}
                    title={item.title}
                    color={item.color}
                    type={item.type}
                    Pressable={() => handleClick(item.title ?? "")}
                />
            ))}
        </>
    )
}

export default Buttons