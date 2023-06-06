import React, { useEffect, useRef, useState } from "react";
import { uploadAnimal, uploadImage } from "../Redux/actions/UploadAction";
import Button from "react-bootstrap/esm/Button";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getSpecifications } from "../Redux/actions/SpecificationAction";

function NewAnimal() {
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.AnimalReducer.uploading);
  const animalName = useRef();
  const age = useRef();
  const budget = useRef();
  const color = useRef();
  const desc = useRef();
  const [image, setImage] = useState("");
  console.log("image ", image);
  const imageRef = useRef();
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [specif, setSpecif] = useState("");
  const [location, setLocation] = useState("");

  const specifications = useSelector(
    (state) => state.SpecificationReducer.specifications
  );
  useEffect(() => {
    dispatch(getSpecifications(type));
  }, [dispatch, type]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const typeHandleChange = (selectedOption) => {
    console.log(type);
    console.log(selectedOption.value);
    setType(selectedOption.value);
    console.log(type);
  };

  const genderHandleChange = (selectedOption) => {
    setGender(selectedOption.value);
  };

  const specifHandleChange = (selectedOption) => {
    setSpecif(selectedOption.value);
  };

  const locationHandleChange = (selectedOption) => {
    setLocation(selectedOption.value);
  };
  const typeOptions = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const specificationOptions = [
    ...specifications.map((specification) => ({
      value: specification._id,
      label: specification.name,
    })),
  ];

  const locationOptions = [
    { value: "Beirut", label: "Beirut" },
    { value: "Tripoli", label: "Tripoli" },
    { value: "Sidon", label: "Sidon" },
    { value: "Tyre", label: "Tyre" },
    { value: "Baalbak", label: "Baalbak" },
    { value: "Nabatieh", label: "Nabatieh" },
    { value: "Aley", label: "Aley" },
    { value: "Jounieh", label: "Jounieh" },
    { value: "Zahle", label: "Zahle" },
    { value: "Zgharta-Ehden", label: "Zgharta-Ehden" },
    { value: "Byblos", label: "Byblos" },
    { value: "Batroun", label: "Batroun" },
  ];
  // Reset form
  const reset = () => {
    animalName.current.value = "";
    age.current.value = "";
    budget.current.value = "";
    color.current.value = "";
    desc.current.value = "";
    setImage(null);
    // setState(null); reset the selected value
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnimal = {
      name: animalName.current.value,
      age: age.current.value,
      type: type,
      gender: gender,
      color: color.current.value,
      location: location,
      description: desc.current.value,
      specification: specif,
      budget: budget.current.value,
    };

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newAnimal.image = fileName;
      console.log(newAnimal);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadAnimal(newAnimal));
    reset();
    //add fct to redirect to home page in admin panel
  };

  return (
    <>
      <Button onClick={handleSubmit} disabled={uploading}>
        {uploading ? "uploading..." : "Share"}
      </Button>
      <input type="text" placeholder="Name" required ref={animalName} />
      <input type="number" placeholder="Age" required ref={age} />
      <input type="number" placeholder="Budget (%)" ref={budget} />
      <input type="text" placeholder="Color" required ref={color} />
      <input type="text" placeholder="Description" required ref={desc} />

      <Select
        options={typeOptions}
        name="type"
        // value={type}
        onChange={typeHandleChange}
        required
      />
      <Select
        options={genderOptions}
        name="gender"
        onChange={genderHandleChange}
        required
      />
      <Select
        options={specificationOptions}
        name="specification"
        onChange={specifHandleChange}
        required
      />
      <Select
        options={locationOptions}
        name="location"
        onChange={locationHandleChange}
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

export default NewAnimal;
