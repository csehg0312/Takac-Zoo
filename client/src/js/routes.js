// src/routes.js
import api from "./api";

const getRoutes = {
  getAnimals: () => {
    console.log("Fetching animals...");
    return api.get("/AnimalRoutes/getAnimals");
  },
  getEnclosures: () => {
    console.log("Fetching enclosures...");
    return api.get("/EnclosureRoutes/getEnclosures");
  },
  getFeedings: () => {
    console.log("Fetching feedings...");
    return api.get("/FeedingRoutes/getFeedings");
  },
  getMedicalRecords: () => {
    console.log("Fetching medical records...");
    return api.get("/MedicalRecordsRoutes/getMedicalRecords");
  },
  getVeterinars: () => {
    console.log("Fetching veterinars...");
    return api.get("/VeteritarianRoutes/getVeteritarians");
  },
  getVisitors: () => {
    console.log("Fetching visitors...");
    return api.get("/VisitorRoutes/getVisitors");
  },
  getZookeepers: () => {
    console.log("Fetching zookeepers...");
    return api.get("/ZookeeperRoutes/getZookeepers");
  },
};

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
  addVeterinar: () => {
    console.log("Fetching veterinars...");
    return api.get("/VeteritarianRoutes/addVeteritarian");
  },
  addVisitor: () => {
    console.log("Fetching visitors...");
    return api.get("/VisitorRoutes/addVisitor");
  },
  addZookeeper: () => {
    console.log("Fetching zookeepers...");
    return api.get("/ZookeeperRoutes/addZookeeper");
  },
};

export default (getRoutes, adderRoutes);
