export default function Home({ images }) {
	console.log(images)
  return (
    <>
      <div id="my-background">
        <div id="overbg">
          <h1>This is my background</h1>
        </div>
      </div>
      <style jsx>{`
        #my-background {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          color: #fff;
          background-image: url("${images.background
            ? images.background
            : "https://cdn.pixabay.com/photo/2017/06/29/01/02/home-office-2452806_960_720.jpg"}");
          background-size: cover;
        }

        #overbg {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background: rgba(90, 90, 90, 0.6);
        }

        h1 {
          font-size: 6em;
          text-align: center;
          user-select: none;
        }
      `}</style>
    </>
  );
}

/**
 *  In the database should be a table with something
 * 	like a page column with the default image
 * 	configuration.
 */

export const getStaticProps = async (props) => {
  const response = await fetch("http://localhost:3000/api/getPage?page=home");
  const { response: images } = await response.json();

  return { props: { images } };
};
