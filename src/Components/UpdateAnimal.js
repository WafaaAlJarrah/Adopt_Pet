import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAnimal, updateAnimal } from "../Redux/actions/AnimalAction";
import { getSpecifications } from "../Redux/actions/SpecificationAction";
import { uploadImage } from "../Redux/actions/UploadAction";

function UpdateAnimal() {
  const param = useParams();
  const animalId = param.animalId;
  //   console.log(animalId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { animal } = useSelector((state) => state.AnimalReducer);
  //   console.log("animal before dispatch", animal);

  useEffect(() => {
    dispatch(getAnimal(animalId));
  }, [dispatch, animalId]);

  //   console.log("animal after dispatch", animal);
  const [image, setImage] = useState(null);
  console.log("image ", image);
  const [formData, setFormData] = useState({
    name: animal.name,
    image: animal.image,
    age: animal.age,
    color: animal.color,
    gender: animal.gender,
    specification: animal.specification ? animal.specification._id : "",
    location: animal.location,
    adopted: animal.adopted,
    type: animal.type,
    description: animal.description,
    budget: animal.budget,
  });

  const [selectedSpecification, setSelectedSpecification] = useState(
    formData.specification
  );
  console.log("after ", selectedSpecification);
  console.log("form ", formData);
  const [selectedType, setSelectedType] = useState(formData.type);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpecificationChange = (event) => {
    console.log("1- selected specifiction ", event.target.value);
    setSelectedSpecification(event.target.value);

    const newSpec = event.target.value;
    console.log("2- selected specifiction ", newSpec);
    setSelectedSpecification(newSpec);
    console.log("3- selected specifiction after ", newSpec);
    setFormData((prevFormData) => ({
      ...prevFormData,
      specification: newSpec,
    }));
    console.log("before ", selectedSpecification);
  };

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setSelectedType(newType);
    setFormData((prevFormData) => ({
      ...prevFormData,
      type: newType,
      specification: "",
    }));
  };
  const specifications = useSelector(
    (state) => state.SpecificationReducer.specifications
  );
  useEffect(() => {
    dispatch(getSpecifications(selectedType));
  }, [dispatch, selectedType]);

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      console.log("my filename ", fileName);
      formData.image = fileName;
      console.log("form after add image", formData);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    await dispatch(updateAnimal(animalId, formData));
    navigate(`/allAnimal/${formData.specification}`); // Redirect to the specified URL
  };

  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Color:
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          required
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Type:
        <select
          name="type"
          value={formData.type}
          required
          onChange={handleTypeChange}
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </label>
      <label>
        Specification:
        <select
          required
          value={selectedSpecification}
          onChange={handleSpecificationChange}
        >
          {specifications.map((spec) => (
            <option key={spec._id} value={spec._id}>
              {spec.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Location:
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="Beirut">Beirut</option>
          <option value="Tripoli">Tripoli</option>
          <option value="Sidon">Sidon</option>
          <option value="Tyre">Tyre</option>
          <option value="Baalbak">Baalbak</option>
          <option value="Nabatieh">Nabatieh</option>
          <option value="Aley">Aley</option>
          <option value="Jounieh">Jounieh</option>
          <option value="Zahle">Zahle</option>
          <option value="Zgharta-Ehden">Zgharta-Ehden</option>
          <option value="Byblos">Byblos</option>
          <option value="Batroun">Batroun</option>
        </select>
      </label>
      <label>
        Status:
        <select
          name="adopted"
          required
          value={formData.adopted}
          onChange={handleChange}
        >
          <option value="false">Available</option>
          <option value="true">Adopted</option>
        </select>
      </label>

      <label>
        Description:
        <textarea
          required
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Budget:
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        />
      </label>

      <label>
        Image:
        <input type="file" name="image" onChange={onImageChange} />
      </label>
      {image && (
        <div>
          <button variant="secondary" onClick={() => setImage(null)}>
            clear
          </button>
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
      <button type="submit" onClick={handleSubmit}>
        Update Animal
      </button>
    </>
  );
}

export default UpdateAnimal;
