import React from 'react'
import { useState } from 'react'
import "../calculator.css"

const Calculator = () => {

    const [inputValue, setInputValue] = useState("");

    const display = (value) => setInputValue(inputValue + value);
    const calculate = () => setInputValue(eval(inputValue));



    const clear = () => setInputValue("");



    return (
        <form className="calculator" name='calc' >



            <div className='upper-div'> <input type="text" className='value' value={inputValue} /></div>




            <div className='lower-div'>

                <table>

                    <tr>
                        <td colSpan={2} className='abc' > <span className="num-clear" onClick={() => clear()}>
                            c
                        </span></td>

                        <td><span onClick={() => display("/")} >/</span></td>
                        <td> <span onClick={() => display("*")}>*</span></td>

                    </tr>

                    <tr>
                        <td> <span onClick={() => display("7")}>7</span></td>
                        <td> <span onClick={() => display("8")}>8</span></td>
                        <td> <span onClick={() => display("9")}>9</span></td>
                        <td><span onClick={() => display("-")}>-</span></td>

                    </tr>

                    <tr>
                        <td>  <span onClick={() => display("4")}>4</span></td>
                        <td> <span onClick={() => display("5")}>5</span></td>
                        <td> <span onClick={() => display("6")}>6</span></td>

                        <td rowSpan={2}><span className='plus' onClick={() => display("+")}>+</span></td>

                    </tr>

                    <tr>

                        < td>  <span onClick={() => display("1")}>1</span></td>
                        <td><span onClick={() => display("2")}>2</span></td>
                        <td> <span onClick={() => display("3")}>3</span></td>

                    </tr>
                    <tr>
                        <td><span onClick={() => display("0")}>0</span></td>
                        <td>  <span onClick={() => display("00")}>00</span></td>
                        <td><span onClick={() => display(".")}>.</span></td>
                        <td><span className='num equal' onClick={() => calculate()}>=</span></td>
                    </tr>
                </table>
            </div>


        </form>
    )
}

export default Calculator