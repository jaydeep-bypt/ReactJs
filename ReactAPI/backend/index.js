import express from "express";

const app = express();

app.get("/api/book", (req, res) => {
  const book = [
    {
      id: 1,
      title: "ABC",
      author: "AAA",
    },
    {
      id: 2,
      title: "DEF",
      author: "BBB",
    },
    {
      id: 3,
      title: "GHI",
      author: "CCC",
    },
    {
      id: 4,
      title: "JKL",
      author: "DDD",
    },
    {
      id: 5,
      title: "MNO",
      author: "EEE",
    },
  ];

  if (req.query.search) {
    const filterBook = book.filter((book) =>
      book.title.includes(req.query.search)
    );
    res.send(filterBook);
    return;
  }

  setTimeout(() => {
    res.send(book);
  }, 3000);
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port} `);
});
