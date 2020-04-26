export function calculateTotal(hours, hourly, antiquity) {
    
    //Calculate gross Salary
    let grossMonthly = hours * hourly
    
    //calculate antiquity
    //0-1 = 2%
    //1-5 = 5%
    //5-10 = 10%
    //10-on = 15%


    let totalAnt = 0;

    switch(antiquity) {
        case 500:
            totalAnt = 500
            break;
        case 750:
            totalAnt = 750
            break;
        case 900:
            totalAnt = 900
            break;
        case 1100:
            totalAnt = 1100
            break;
        default:
            break;
    }

    let deductions = grossMonthly * 0.17

    return grossMonthly + totalAnt - deductions;
    
}