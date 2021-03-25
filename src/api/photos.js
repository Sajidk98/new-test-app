import API from "./config";

export const fetchPhotos = (value) => {
  return API.get("/photos?_limit=5&_start=" + value)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const deletePhoto = (id) => {
  return API.delete("/photos/" + id)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const editPhoto = (value) => {
  return API.put("/photos/" + value.id, {
    title: value.title,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const addPhoto = (value) => {
  return API.post("/photos", {
    title: value,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
