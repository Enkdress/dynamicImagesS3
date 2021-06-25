export default function GetPagePlaces(req, res) {
  // Simulate a database request
  const databaseResponse = {
    pages: {
      home: {
        background: "s3://someurl",
        banner: "s3://somerul",
        menu: "s3//",
      },
      login: {
        background: "s3://someurl2",
      },
    },
  };

  // the places that can be a dynamic image
  const requestedPagePlaces = Object.keys(
    databaseResponse.pages[req.query.page]
  );

  res.status(200).json({ response: requestedPagePlaces });
}
