// import { forwardrefArr } from "react"

// const SplitText = forwardrefArr(({ word, classes, style = {} }, refArr) => {
//     const chars = word.split('')

//     return (
//         <div className='flex'>
//             {chars.map((char, i) => (
//                 <div key={i} className={classes} style={style} refArr={(el) => {
//                     if (refArr && refArr.current && el && !refArr.current.includes(el)) {
//                         refArr.current.push(el)
//                     }
//                 }}>{char === ' ' ? '\u00A0' : char}</div>
//             ))}
//         </div>
//     )
// })

// export default SplitText

const SplitText = ({ word = '', classes, style = {}, refArr }) => {
    const chars = word.split('')

    return (
        <div className='flex'>
            {chars.map((char, i) => (
                <div key={i} className={classes} style={style} ref={(el) => {
                    if (refArr && refArr.current && el && !refArr.current.includes(el)) {
                        refArr.current.push(el)
                    }
                }}>{char === ' ' ? '\u00A0' : char}</div>
            ))}
        </div>
    )
}

export default SplitText