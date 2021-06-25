import { useEffect, useState } from "react";

export default function GetImage() {
  const [pageSelected, setPageSelected] = useState("home");
  const [placesOptions, setPlacesOptions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("page", e.target.page.value);
    formData.append("place", e.target.place.value);
    formData.append("imgurl", e.target.imgurl.files[0]);

    fetch("/api/files", {
      method: "POST",
      body: formData,
    });
  };

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch(
        `http://localhost:3000/api/getPagePlaces?page=${pageSelected}`
      );
      const data = await response.json();
      return data.response;
    }

    getPlaces().then((places) => setPlacesOptions(places));
  }, [pageSelected]);
  return (
    <>
      <h1>Agregar una imagen</h1>
      <form id="save-image-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="page">Página</label>
          <br />
          <input
            id="page"
            type="text"
            onBlur={(value) => setPageSelected(value.target.value)}
          />
        </div>
        <div>
          <label htmlFor="place">Tipo o lugar</label>
          <br />
          <input list="options" id="place" type="text" />
          <datalist id="options">
            {placesOptions.map((place) => (
              <option value={place} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="imgurl">Cargar la imagen</label>
          <br />
          <input id="imgurl" type="file" />
        </div>
        <br />
        <button>Guardar</button>
      </form>

      <style jsx>{`
        #save-image-form {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 1.3em;
        }

        #save-image-form input[type=text] {
          margin: 20px 0;
          padding: 15px 8px;
          border: none;
          box-shadow: 0 4px 12px 0 #DADADA;
          width: 100%;
        }

        button {
          background: #3243D9;
          width: 25%;
          border: none;
          color: #FFF;
          padding: 12px 8px;
          cursor: pointer;
          border-radius: 8px;
          transition: all .2s ease-out;
        }

        button:hover {
          background: #3243A2;
          box-shadow: 0 4px 12px 0 #3243A2;
        }

        div {
          width: 25%;
        }
      `}</style>
    </>
  );
}
