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
  import getRoutes from './js/routes'

  const items = { 
    animals: ref([]),
    enclosures: ref([]),
    feedings:ref([]),
    medical_records: ref([]),
    veterinars: ref([]),
    visitors: ref([]),
    zookeepers: ref([])
  }

  // const axiosInstance = Axios.create({
  //   baseURL: 'http://localhost:3001' 
  // })

  const fetchData = async () => {
    const [
        animalsResponse,
        enclosuresResponse,
        feedingsResponse,
        medicalRecordsResponse,
        veterinarsResponse,
        visitorsResponse,
        zookeepersResponse
      ] = await Promise.all([
      getRoutes.getAnimals(),
      getRoutes.getEnclosures(),
      getRoutes.getFeedings(),
      getRoutes.getMedicalRecords(),
      getRoutes.getVeterinars(),
      getRoutes.getVisitors(),
      getRoutes.getZookeepers()
      ])

      items.animals.value = animalsResponse.data
      // console.log(items.animals.value)
      items.enclosures.value = enclosuresResponse.data
      items.feedings.value =feedingsResponse.data
      items.medical_records.value = medicalRecordsResponse.data
      items.veterinars.value = veterinarsResponse.data
      // console.table(veterinarsResponse.data)
      items.visitors.value = visitorsResponse.data
      items.zookeepers.value = zookeepersResponse.data
      // console.table(items.zookeepers.value)
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
