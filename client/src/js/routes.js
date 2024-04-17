// src/routes.js
import api from './api'

const getRoutes = {
  getAnimals: () => {
    console.log('Fetching animals...')
    return api.get('/AnimalRoutes/getAnimals')
  },
  getEnclosures: () => {
    console.log('Fetching enclosures...')
    return api.get('/EnclosureRoutes/getEnclosures')
  },
  getFeedings: () => {
    console.log('Fetching feedings...')
    return api.get('/FeedingRoutes/getFeedings')
  },
  getMedicalRecords: () => {
    console.log('Fetching medical records...')
    return api.get('/MedicalRecordsRoutes/getMedicalRecords')
  },
  getVeterinars: () => {
    console.log('Fetching veterinars...')
    return api.get('/VeteritarianRoutes/getVeteritarians')
  },
  getVisitors: () => {
    console.log('Fetching visitors...')
    return api.get('/VisitorRoutes/getVisitors')
  },
  getZookeepers: () => {
    console.log('Fetching zookeepers...')
    return api.get('/ZookeeperRoutes/getZookeepers')
  }
}


const adderRoutes = {
    addAnimals: (Name,Age,species,gender) => {
        console.log('Fetching animals...')
        return api.post('/AnimalRoutes/addAnimal', {newData})
    },
    addEnclosures: () => {
        console.log('Fetching enclosures...')
        return api.get('/EnclosureRoutes/addEnclosures')
    },
    addFeedings: () => {
        console.log('Fetching feedings...')
        return api.get('/FeedingRoutes/addFeedings')
    },
    addMedicalRecords: () => {
        console.log('Fetching medical records...')
        return api.get('/MedicalRecordsRoutes/addMedicalRecords')
    },
    addVeterinars: () => {
        console.log('Fetching veterinars...')
        return api.get('/VeteritarianRoutes/addVeteritarians')
    },
    addVisitors: () => {
        console.log('Fetching visitors...')
        return api.get('/VisitorRoutes/addVisitors')
    },
    addZookeepers: () => {
        console.log('Fetching zookeepers...')
        return api.get('/ZookeeperRoutes/addZookeepers')
    }
} 

export default getRoutes