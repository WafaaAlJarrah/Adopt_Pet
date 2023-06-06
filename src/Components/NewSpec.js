import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadSpecification } from "../Redux/actions/UploadAction";

function NewSpec() {
  const uploading = useSelector((state) => state.SpecificationReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const specif = useRef();
  const [type, setType] = useState(null);
  const dispatch = useDispatch();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleChange = (selectedOption) => {
    setType(selectedOption.value);
  };

  const reset = () => {
    setImage(null);
    specif.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSpecification = {
      name: specif.current.value,
      animalType: type,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newSpecification.image = fileName;
      dispatch(uploadImage(data));
    }
    
    dispatch(uploadSpecification(newSpecification));
    reset();
  };

  const options = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
  ];

  return (
    <div className="container mt-4">
      <h2>Add New Specification</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Specification Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter specification name"
            required
            ref={specif}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Animal Type:</label>
          <Select
            options={options}
            name="animalType"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <Button variant="primary" onClick={() => imageRef.current.click()}>
            Add Photo
          </Button>
          <input type="file" ref={imageRef} onChange={onImageChange} style={{ display: "none" }} />
        </div>

        {image && (
          <div className="mb-3">
            <Button variant="secondary" onClick={() => setImage(null)}>
              Clear
            </Button>
            <img
              className="img-fluid"
              src={URL.createObjectURL(image)}
              alt="Selected Image"
            />
          </div>
        )}

        <Button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Share"}
        </Button>
      </form>
    </div>
  );
}

export default NewSpec;
