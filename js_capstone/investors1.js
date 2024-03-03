const availableQuarters = ['Q3 2018', 'Q4 2018', 'Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020'];
 
const tableData = [
  {
    Quarter: "Q3 2018",
    Sales: 10000,
    OtherIncome: 500,
    GrossProfit: 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    NetProfit: 3500,
  },
  {
    Quarter: "Q4 2018",
    Sales: 25000,
    OtherIncome: 1200,
    GrossProfit: 8500,
    Depreciation: 3400,
    Interest: 1500,
    Tax: 3670,
    NetProfit: 8500,
  },
  {
    Quarter: "Q1 2019",
    Sales: 16500,
    OtherIncome: 1600,
    GrossProfit: 9200,
    Depreciation: 2300,
    Interest: 1470,
    Tax: 1500,
    NetProfit: 9320,
  },
  {
    Quarter: "Q2 2019",
    Sales: 20000,
    OtherIncome: 780,
    GrossProfit: 10270,
    Depreciation: 1080,
    Interest: 2050,
    Tax: 3420,
    NetProfit: 11560,
  },
  {
    Quarter: "Q3 2019",
    Sales: 10000,
    OtherIncome: 500,
    GrossProfit: 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    NetProfit: 3500,
  },
  {
    Quarter: "Q4 2019",
    Sales: 10000,
    OtherIncome: 500,
    GrossProfit: 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    NetProfit: 3500,
  },
  {
    Quarter: "Q1 2020",
    Sales: 10000,
    OtherIncome: 500,
    GrossProfit: 8000,
    Depreciation: 2000,
    Interest: 1000,
    Tax: 1500,
    NetProfit: 3500,
  }
];
 
const tableContainer = document.getElementById("table-data");
tableContainer.style.display = "none";
const validate  = document.getElementById("validate");
validate.style.display = "none"; 
const notAvailable  = document.getElementById("notAvailable");
notAvailable.style.display = "none";

function getDetails() {
  const notAvailable  = document.getElementById("notAvailable");
  notAvailable.style.display = "none";
  const validate  = document.getElementById("validate");
  validate.style.display = "none";  
  const tableContainer = document.getElementById("table-data");
  tableContainer.style.display = "none";

  const quarterValue = document.getElementById('quartertxt').value;
  const financialYearValue = document.getElementById('financial-year').value;
  const computedQuater = quarterValue + ' ' + financialYearValue;
  
   const filteredData = tableData.filter((data) =>
     data.Quarter.toLowerCase().includes(computedQuater)
    );

    if (!quarterValue || !financialYearValue) {
      validate.style.display = "block";
      document.getElementById("validate").innerHTML  = 'Please enter both quarter and financial year';
      return;
    }

    if (filteredData.length > 0)
    {    
      document.getElementById("quarter").innerHTML = filteredData[0].Quarter;
      document.getElementById("sales").innerHTML = filteredData[0].Sales;
      document.getElementById("income").innerHTML = filteredData[0].OtherIncome;
      document.getElementById("profit").innerHTML = filteredData[0].GrossProfit;
      document.getElementById("depreciation").innerHTML = filteredData[0].Depreciation;
      document.getElementById("interest").innerHTML = filteredData[0].Interest;
      document.getElementById("tax").innerHTML = filteredData[0].Tax;
      document.getElementById("netProfit").innerHTML = filteredData[0].NetProfit;
      tableContainer.style.display = "block";
    } else {
      notAvailable.style.display = "block";
      document.getElementById("notAvailable").innerHTML  = 'The selected quarter details are not available.';
    }

    
}