const data = [];

for (let i = 0; i < 50; i += 1) {
  data.push({
    _id: i,
    title: `Movie ${i}`,
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: new Date().toString(),
    liked: i % 2 === 0
  });
}

export default data;
