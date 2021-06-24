export default function GetPage(req, res) {
  // Simulate a database request
  const databaseResponse = {
    pages: {
      home: {
        background: "s3://someurl",
      },
      login: {
        background: "s3://someurl2",
      },
    },
  };

  const requestedPageData = Object.keys(databaseResponse.pages).filter(
    (page) => page == req.query.page
  );

  res.status(200).json({ response: databaseResponse.pages[requestedPageData] });
}
