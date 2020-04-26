import React from 'react'

const Result = ({total, hours, hourly, antiquity}) =>(
        <div className = "u-full-width result">
            <h2>Summary</h2>
            <p>Gross salary: ${(hours*hourly).toFixed(2)}</p>
            <p>Deductions: ${(hours*hourly*0.17).toFixed(2)}</p>
            <p>Plus for antiquity: ${antiquity.toFixed(2)}</p>
            <p>Net salary: ${(total).toFixed(2)}</p>
        </div>
    );

export default Result;