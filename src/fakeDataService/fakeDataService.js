const data = [];

// for (let i = 0; i < 50; i += 1) {
//   data.push({
//     _id: i,
//     title: `Movie ${i}`,
//     numberInStock: 6,
//     dailyRentalRate: 2.5,
//     publishDate: new Date().toString(),
//     liked: i % 2 === 0
//   });
// }
for (let i = 0; i < 6; i += 1) {
  data.push({
    catogory_1: { name: "Title1", items: ["item1", "item1", "item1", "item1"] }
  });
}

export default data;
