// src/routes.js
import api from "./api";

const adderRoutes = {
  addAnimal: (name, age, species, gender) => {
    // console.log('Fetching animals...')
    console.log(name, age, species, gender);
    return api.post("/AnimalRoutes/addAnimal", {
      species,
      name,
      age,
      gender,
    });
  },
  addEnclosure: (name, size, type) => {
    console.log(name, size, type);
    return api.post("/EnclosureRoutes/addEnclosure", {
      name,
      size,
      type,
    });
  },
  addFeeding: (animalID, keeperID, note) => {
    return api.post("/FeedingRoutes/addFeeding", {
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
    return api.post("/MedicalRecordRoutes/addMedicalRecord", {
      animalID,
      veteritarianID,
      diagnosis,
      treatment,
      medication,
    });
  },
  addVeterinar: (name, specialization, yearsOfExperience) => {
    return api.post("/VeteritarianRoutes/addVeteritarian", {
      name,
      specialization,
      yearsOfExperience,
    });
  },
  addVisitor: (age, ticketType) => {
    return api.post("/VisitorRoutes/addVisitor", {
      age,
      ticketType,
    });
  },
  addZookeeper: (name, specialization, yearsOfExperience) => {
    return api.post("/ZookeeperRoutes/addZookeeper", {
      name,
      specialization,
      yearsOfExperience,
    });
  },
};

export default adderRoutes;
