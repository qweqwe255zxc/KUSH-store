const WordToChars = (word, classes, ref, style = {}) => {
    const chars = word.split('')

    return (
        <div className='flex'>
            {chars.map((char, i) => (
                <div key={i} className={classes} style={style} ref={(el) => {
                    if (ref && ref.current && el && !ref.current.includes(el)) {
                        ref.current.push(el)
                    }
                }}>{char === ' ' ? '\u00A0' : char}</div>
            ))}
        </div>
    )
}

export default WordToChars