import React, { useRef, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Select from "react-select";
import {
  uploadImage,
  uploadSpecification,
} from "../Redux/actions/UploadAction";
import { useDispatch, useSelector } from "react-redux";

function NewSpec() {
  const uploading = useSelector(
    (state) => state.SpecificationReducer.uploading
  );
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
    console.log(type);
    setType(selectedOption.value);
    console.log(type);
  };

  // Reset form
  const reset = () => {
    setImage(null);
    // setType(null); reset the selected value
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
      console.log(newSpecification);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadSpecification(newSpecification));
    reset();
    //add fct to redirect to home page in admin panel
  };
  const options = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
  ];

  return (
    <>
      <Button onClick={handleSubmit} disabled={uploading}>
        {uploading ? "uploading..." : "Share"}
      </Button>
      <input
        type="text"
        placeholder="specification name"
        required
        ref={specif}
      />

      <Select
        options={options}
        name="animalType"
        onChange={handleChange}
        required
      />
      <Button onClick={() => imageRef.current.click()}>
        click here to add photo
      </Button>
      <div style={{ display: "none" }}>
        <input type="file" ref={imageRef} onChange={onImageChange} />
      </div>
      {image && (
        <div>
          <Button variant="secondary" onClick={() => setImage(null)}>
            clear
          </Button>
          <img
            style={{
              width: "100%",
              maxHeight: "20rem",
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
            src={URL.createObjectURL(image)}
          />
        </div>
      )}
    </>
  );
}

export default NewSpec;
