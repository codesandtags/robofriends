import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
    return (
        <div className="flex flex-wrap w-80 center mw9 justify-center-m">
            {robots.map((robot) => (
                <Card key={robot.id} robot={robot} />
            ))}
        </div>
    )
}
