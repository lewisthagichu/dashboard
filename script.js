const doughnutChart = document.getElementById("doughnut-chart");
const barChart = document.getElementById("bar-chart");
const lineChart = document.getElementById("line-chart");

new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: ["send", "open", "spam"],
    datasets: [
      {
        label: "",
        data: [91, 161, 28],
        backgroundColor: [
          "rgb(115, 128, 236)",
          "rgb(255, 119, 114)",
          "rgb(21, 97, 109)",
        ],
      },
    ],
  },
  options: {
    // responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(barChart, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income per month",
        data: [
          40120, 12080, 43590, 39000, 37050, 36000, 38090, 42000, 43000, 40000,
          42000, 44000,
        ],
        backgroundColor: ["rgb(115, 128, 236)"],
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
});

new Chart(lineChart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue per month",
        data: [
          48120, 47080, 49090, 49000, 49050, 49000, 50090, 49090, 48090, 48500,
          49000, 49000,
        ],
        borderColor: ["rgb(115, 128, 236)"],
        tension: 0.1,
        backgroundColor: ["rgb(219, 222, 250)"],
        fill: true,
        // pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
});
