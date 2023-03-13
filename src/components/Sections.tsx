import React, { PropsWithChildren } from 'react'

interface Id {
    title: string,
    id: string
}

export const Sections: React.FC<Id> = ({title, id}) => {
    return (
        <div className='section' id={id}>
            <h2>{title}</h2>
        </div>
    )
}