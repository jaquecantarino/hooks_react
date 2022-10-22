import React from 'react'

const Accordion = ({itens}) => {
    const jsx = itens.map((item, i) => {
        return (
            <Card key={i}> /* não é recomendavel - explicação na apostila */

            </Card>
        )
    })
    return (
        <div>Accordion</div>
    )
}

export default Accordion