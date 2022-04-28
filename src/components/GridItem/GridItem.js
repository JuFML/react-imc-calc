function GridItem({item}) {
    return (
        <>
            <div>{item.title}</div>
            {/* <p>IMC está entre {item.imc[0]} e {item.imc[1]}</p> */}
        </>
    )
}

export default GridItem;