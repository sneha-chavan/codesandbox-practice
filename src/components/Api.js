import axios from "axios";
import { useEffect, useState } from "react";
const okUrl = "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=100";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";

function translateStatusToErrorMessage(status) {
  switch (status) {
    case 401:
      return "Please login again.";
    case 403:
      return "You do not have permission to view the photos.";
    default:
      return "There was an error retrieving the photos. Please try again.";
  }
}

const checkStatus = (response) => {
  if (response.ok) return response;
  else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );
    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
};

const parseJSON = (data) => {
  return data.json();
};

function Api() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(okUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        photos.map((p) => console.log(p));
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h4>API compoenent</h4>
      {loading && <h1> Loading... </h1>}
      {error && <h1>{error}</h1>}
      {/* if i map photos directory - it was giving error like "photos.map is not a function"
      Hence I used Object.values to retrieve each item from photos*/}
      {photos &&
        Object.values(photos).map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <h3>{photo.title}</h3>
            </li>
          );
        })}
    </>
  );
}

export default Api;
