<script setup>
  // import Axios from 'axios'
  import AnimalsComponent from './components/AnimalsComponent.vue'
  import EnclosuresComponent from './components/EnclosuresComponent.vue'
  import FeedingsComponent from './components/FeedingsComponent.vue'
  import MedicalRecordsComponent from './components/MedicalRecordsComponent.vue'
  import VeterinarsComponent from './components/VeterinarsComponent.vue'
  import VisitorsComponent from './components/VisitorsComponent.vue'
  import ZookeepersComponent from './components/ZookeepersComponent.vue'
  import { ref } from 'vue'
  // import getRoutes from './js/routes'
  // import axios from 'axios'
  import api from './js/api'

  const items = { 
    animals: ref([]),
    enclosures: ref([]),
    feedings:ref([]),
    medical_records: ref([]),
    veterinars: ref([]),
    visitors: ref([]),
    zookeepers: ref([]),
  }

  // const axiosInstance = Axios.create({
  //   baseURL: 'http://localhost:3001' 
  // })

  async function fetchData() {
    const animalResponse = await api.get('/AnimalRoutes/getAnimals')
    items.animals.value = animalResponse.data;
    // console.table(items.animals.value)
    
    const enclosureResponse = await api.get('/EnclosureRoutes/getEnclosures')
    items.enclosures.value = enclosureResponse.data;

    const feedingResponse = await api.get('/FeedingRoutes/getFeedings')
    items.feedings.value = feedingResponse.data;

    const medicalRecordsResponse = await api.get('/MedicalRecordsRoutes/getMedicalRecords')
    items.medical_records.value = medicalRecordsResponse.data;

    const veterinarResponse = await api.get('/VeteritarianRoutes/getVeteritarians')
    items.veterinars.value = veterinarResponse.data;

    const visitorResponse = await api.get('/VisitorRoutes/getVisitors')
    items.visitors.value = visitorResponse.data;

    const zookeeperResponse = await api.get('/ZookeeperRoutes/getZookeepers')
    items.zookeepers.value = zookeeperResponse.data;

  }

  fetchData()
  
  const props = defineProps({
    animals: {
      type: Object,
      required: true
    },
    enclosures: {
      type: Object,
      required: true
    },
    zookeepers: {
      type: Object,
      required: true
    },
    visitors: {
      type: Object,
      required: true
    },
    feedings: {
      type: Object,
      required: true
    },
    medical_records: {
      type: Object,
      required: true
    },
    veterinars: {
      type: Array,
      required: true
    }
  })

</script>

<template>
  <div id="getContainer">
    <AnimalsComponent :animals="items.animals" class="element" />
    <EnclosuresComponent :enclosures="items.enclosures" class="element" />
    <FeedingsComponent :feedings="items.feedings" class="element" />
    <MedicalRecordsComponent :medical_records="items.medical_records" class="element" />
    <VeterinarsComponent :veterinars="items.veterinars" class="element" />
    <VisitorsComponent :visitors="items.visitors" class="element" />
    <ZookeepersComponent :zookeepers="items.zookeepers" class="element" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* .getContainer {

} */

</style>
