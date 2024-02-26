const availableQuarters = ['Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020'];

const tableData = [
  {
    Quarter: "Q3 2018",
    Sales: 10000,
    'Other Income': 500,
    'Gross Profit': 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    'Net Profit': 3500,
  },
  {
    Quarter: "Q4 2018",
    Sales: 25000,
    'Other Income': 1200,
    'Gross Profit': 8500,
    Depreciation: 3400,
    Interest: 1500,
    Tax: 3670,
    'Net Profit': 8500,
  },
  {
    Quarter: "Q1 2019",
    Sales: 16500,
    'Other Income': 1600,
    'Gross Profit': 9200,
    Depreciation: 2300,
    Interest: 1470,
    Tax: 1500,
    'Net Profit': 9320,
  },
  {
    Quarter: "Q2 2019",
    Sales: 23000,
    'Other Income': 780,
    'Gross Profit': 10270,
    Depreciation: 1080,
    Interest: 2050,
    Tax: 3420,
    'Net Profit': 11560,
  },
  {
    Quarter: "Q3 2019",
    Sales: 10000,
    'Other Income': 500,
    'Gross Profit': 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    'Net Profit': 3500,
  },
  {
    Quarter: "Q4 2019",
    Sales: 10000,
    'Other Income': 500,
    'Gross Profit': 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    'Net Profit': 3500,
  },
  {
    Quarter: "Q1 2020",
    Sales: 10000,
    'Other Income': 500,
    'Gross Profit': 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    'Net Profit': 3500,
  }
];

const availableQuarterDetails = document.querySelector('.available-quarters');
// console.log(availableQuarterDetails);

availableQuarters.forEach((data) => {
  const highlightedQuarter = document.createElement('span');
  highlightedQuarter.classList.add("quarter");
  highlightedQuarter.classList.add("highlighted");
  highlightedQuarter.innerHTML = `${data}`;
  // console.log(highlightedQuarter);
  availableQuarterDetails.appendChild(highlightedQuarter);
});

const getDetailsButton = document.getElementById('get-details');
const messageElement = document.querySelector('.message');
const tableContainer = document.querySelector('.table-container');
const tableBody = tableContainer.querySelector('tbody');

getDetailsButton.addEventListener('click', () => {
  const quarterInput = document.getElementById('quarter').value.toUpperCase();
  const yearInput = document.getElementById('financial-year').value;

 
  if (!quarterInput || !yearInput) {
    messageElement.textContent = 'Please enter both quarter and financial year';
    tableContainer.hidden = true;
    return;
  }

  const selectedQuarter = `${quarterInput} ${yearInput}`;


  if (availableQuarters.includes(selectedQuarter)) 
  {
    tableContainer.hidden = false;
    messageElement.textContent = '';

    tableBody.innerHTML = '';

    tableData.forEach((data) => {
      if(selectedQuarter === data.Quarter)
      {
        const tableRow = document.createElement('tr');
        Object.entries(data).forEach(([key, value]) => {
          const tableCell = document.createElement('td');
          tableCell.textContent = value;
          tableRow.appendChild(tableCell);
        });
        tableBody.appendChild(tableRow);
      }
    });      
  } 
  else 
  {
    messageElement.textContent = 'The selected quarter details are not available.';
    tableContainer.hidden = true;
  }
});
