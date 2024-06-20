function calculate() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const workDaysPerWeek = parseInt(document.getElementById('workDaysPerWeek').value);
    const workHoursPerDay = parseInt(document.getElementById('workHoursPerDay').value);
    const vacationDays = parseInt(document.getElementById('vacationDays').value);
    const sickDays = parseInt(document.getElementById('sickDays').value);

    if (isNaN(monthlyIncome) || isNaN(workDaysPerWeek) || isNaN(workHoursPerDay) || isNaN(vacationDays) || isNaN(sickDays)) {
        alert("Por favor, complete todos los campos con valores válidos.");
        return;
    }

    const weeksPerYear = 52;
    const workDaysPerYear = weeksPerYear * workDaysPerWeek - vacationDays - sickDays;
    const workHoursPerYear = workDaysPerYear * workHoursPerDay;
    const workHoursPerWeek = workHoursPerDay * workDaysPerWeek;
    const workHoursPerMonth = workHoursPerYear / 12;

    const roundedWorkHoursPerWeek = Math.ceil(workHoursPerWeek);
    const roundedWorkHoursPerMonth = Math.ceil(workHoursPerMonth);
    const roundedWorkHoursPerYear = Math.ceil(workHoursPerYear);

    const monthlyIncomeYearly = monthlyIncome * 12;
    const hourlyRate = monthlyIncomeYearly / workHoursPerYear;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Resultados</h3>
        <p>Total dinero a facturar por mes: $${monthlyIncome.toFixed(2)}</p>
        <p>Total dinero a facturar por año: $${monthlyIncomeYearly.toFixed(2)}</p>
        <p>Total horas de trabajo por semana: ${roundedWorkHoursPerWeek}</p>
        <p>Total horas de trabajo por mes: ${roundedWorkHoursPerMonth}</p>
        <p>Total horas de trabajo por año: ${roundedWorkHoursPerYear}</p>
        <p>Valor por hora: $${hourlyRate.toFixed(2)}</p>
    `;

    document.getElementById('resetButton').style.display = 'block';
}

function resetFields() {
    document.getElementById('monthlyIncome').value = '';
    document.getElementById('workDaysPerWeek').value = '';
    document.getElementById('workHoursPerDay').value = '';
    document.getElementById('vacationDays').value = '';
    document.getElementById('sickDays').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('resetButton').style.display = 'none';
}
