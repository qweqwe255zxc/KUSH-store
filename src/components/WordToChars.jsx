const WordToChars = (word, classes, ref) => {
    const chars = word.split('')
    // if (ref && ref.current) {
    //     ref.current.lentght = 0
    //     chars.forEach(char => ref.current.push(char))
    //     console.log(ref.current);
    // }

    return (
        <div className='flex'>
            {chars.map((char, i) => (
                <div key={i} className={classes} ref={(el) => {
                    if (ref && ref.current && el && !ref.current.includes(el)) {
                        ref.current.push(el)
                    }
                }}>{char === ' ' ? '\u00A0' : char}</div>
            ))}
        </div>
    )
}

export default WordToChars