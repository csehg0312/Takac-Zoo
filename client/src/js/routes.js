// src/routes.js
// import api from "./api";
import axios from 'axios';

const adderRoutes = {
  addAnimal: (name, age, species, gender) => {
    // console.log('Fetching animals...')
    console.log(name, age, species, gender);
    return axios.post("/AnimalRoutes/addAnimal", {
      species,
      name,
      age,
      gender,
    });
  },
  addEnclosure: (name, size, type) => {
    console.log(name, size, type);
    return axios.post("/EnclosureRoutes/addEnclosure", {
      name,
      size,
      type,
    });
  },
  addFeeding: (animalID, keeperID, note) => {
    return axios.post("/FeedingRoutes/addFeeding", {
      animalID,
      keeperID,
      note,
    });
  },
  addMedicalRecord: (
    animalID,
    veteritarianID,
    diagnosis,
    treatment,
    medication
  ) => {
    return axios.post("/MedicalRecordsRoutes/addMedicalRecord", {
      animalID,
      veteritarianID,
      diagnosis,
      treatment,
      medication,
    });
  },
  addVeterinar: (name, specialization, yearsOfExperience) => {
    return axios.post("/VeteritarianRoutes/addVeteritarian", {
      name,
      specialization,
      yearsOfExperience,
    });
  },
  addVisitor: (age, ticketType) => {
    return axios.post("/VisitorRoutes/addVisitor", {
      age,
      ticketType,
    });
  },
  addZookeeper: (name, specialization, yearsOfExperience) => {
    return axios.post("/ZookeeperRoutes/addZookeeper", {
      name,
      specialization,
      yearsOfExperience,
    });
  },
};

export default adderRoutes;
