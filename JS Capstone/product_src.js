const products = [
  {
    id: 0,
    image: "images/1.webp",
    name: "Celexa",
    salt: "10 mg",
    about:
      "This medication is used to treat depression. Citalopram belongs to a class of drugs known as selective serotonin reuptake inhibitors (SSRIs). It works by helping to restore the balance of a certain natural substance (serotonin) in the brain.",

    side_effect:
      "Nausea, dry mouth, loss of appetite, tiredness, drowsiness, sweating, blurred vision, and yawning may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly.",
  },

  {
    id: 1,
    image: "images/2.webp",
    name: "Prozac",
    salt: "20 mg",
    about:
      "This medication is used to treat certain mental/mood disorders (such as depression, panic attacks, obsessive compulsive disorder). It is also used to treat a certain eating disorder (bulimia) and a severe form of premenstrual syndrome (premenstrual dysphoric disorder).",

    side_effect:
      "Nausea, drowsiness, dizziness, anxiety, trouble sleeping, loss of appetite, tiredness, sweating, or yawning may occur. If any of these effects last or get worse, tell your doctor promptly.",
  },

  {
    id: 2,
    image: "images/3.webp",
    name: "Zocor",
    salt: "10 mg",
    about:
      'Simvastatin is used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood.',

    side_effect:
      "A very small number of people taking simvastatin may have mild memory problems or confusion. If these rare effects occur, talk to your doctor.",
  },

  {
    id: 3,
    image: "images/4.webp",
    name: "Adderall",
    salt: "5 mg",
    about:
      "Amphetamine/dextroamphetamine belongs to a class of drugs known as stimulants. It can help increase your ability to pay attention, stay focused on an activity, and control behavior problems. It may also help you to organize your tasks and improve listening skills.",

    side_effect:
      "Loss of appetite, weight loss, dry mouth, stomach upset/pain, nausea/vomiting, dizziness, headache, diarrhea, fever, nervousness, and trouble sleeping may occur. If any of these effects last or get worse, tell your doctor promptly.",
  },

  {
    id: 4,
    image: "images/5.webp",
    name: "Mobic",
    salt: "15 mg",
    about:
      "Meloxicam is used to treat arthritis. It reduces pain, swelling, and stiffness of the joints. Meloxicam is known as a nonsteroidal anti-inflammatory drug (NSAID).If you are treating a chronic condition such as arthritis, ask your doctor about non-drug treatments and/or using other medications to treat your pain.",

    side_effect:
      "Stomach upset, nausea, dizziness, or diarrhea may occur. If any of these effects last or get worse, tell your doctor or pharmacist promptly.",
  },
];
const categories = [
  ...new Set(
    products.map((item) => {
      return item.name;
    })
  ),
];
// document.getElementById("search").addEventListener("keyup", (e) => {
//   const searchData = e.target.value.toLowerCase();
//   const filteredData = categories.filter((item) => {
//     return (
//         item.title.toLowerCase().includes(searchData)
//     )
// })
//   const filterData = categories.filter((item) => {
//     return  item.name.toLowerCase().includes(searchData);
//   });
//   displayItem(filterData);
// });

const displayItem=(item)=>{
  document.getElementById('root').innerHTML=item.map((item)=>
  {
    var {image,name}=item;
    return (
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div> 
          <div class='bottom'>
              <p>${name}</p>s
            
       
          </div>
      </div>`
  )
}).join('')
};
displayItem(categories)