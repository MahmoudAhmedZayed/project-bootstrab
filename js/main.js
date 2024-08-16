$(".dropdown").click( function(){
    $(this).next(".sub-menu").slideToggle(500)
} )

$(".fa-magnifying-glass").click(function(){
    $(".form-control").toggle()
})
$(".fa-ellipsis-vertical").click(function(){
    $(".setting").slideToggle(500)
})




// start charts //
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart_1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});



const xValues_2 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues_2 = [55, 49, 44, 24, 15];
const barColors_2 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart_2", {
  type: "doughnut",
  data: {
    labels: xValues_2,
    datasets: [{
      backgroundColor: barColors_2,
      data: yValues_2
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});
// end charts //




$(".fa-moon").click(function(){
    document.body.classList.add("dark")
    $(".fa-sun").show()
    $(this).hide()
})

$(".fa-sun").click(function(){
    document.body.classList.remove("dark")
    $(".fa-moon").show()
    $(this).hide()
})