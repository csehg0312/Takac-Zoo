<!-- components/Animals.vue -->
<template>
  <h2>Orvosi kivizsgálások</h2>
  <div id="container">
    <div id="medicalrecContainer" style="display: flex;">
      <table>
        <tr>
          <td>
            <b>Diagnózis </b>
          </td>
          <td>
            <b>Kezelés </b>
          </td>
          <td>
            <b>Felírva </b>
          </td>
        </tr>
        <tr v-for="object in this.medical_records.value">
          <td>{{ object.Diagnosis }}</td>
          <td>{{ object.Treatment }}</td>
          <td>{{ object.Medication }}</td>
        </tr>
      </table>
      <table>
        <td><b>Ki volt a kezelő </b></td>
        <tr v-for="object in this.medical_records.value">
          <td>{{ getVetName(this.medical_records.value, this.veterinars.value, object.VeteritarianID) }}</td>
        </tr>
      </table>
      <table>
        <td><b>Melyik drágaságot </b></td>
        <tr v-for="object in this.medical_records.value">
          <td>{{ getAnimalName(this.medical_records.value, this.animals.value, object.AnimalID) }}</td>
        </tr>
      </table>
    </div>
    <!-- new data  -->
    <!-- <button type="button"></button> -->
    <div id="newDataButton">
      <button @click="toggleForm">
        {{ visibleForm ? "Bezár" : "Új" }}
      </button>
    </div>
    <!-- form  -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="diagnosis">Diagnózis: </label
      ><textarea id="diagnosis" v-model="newDiagnosis" />
      <br />
      <label for="treatment">Kezelés: </label
      ><textarea id="treatment" v-model="newTreatment" />
      <br />
      <label for="medication">Felírva: </label>
      <input id="medication" type="text" v-model="newMedication" />
      <br />

      <label for="veteritarian">Kezelő orvos: </label>
      <select id="veteritarian" v-model="this.newVeteritarianID">
        <option v-for="object in this.veteritarianArray" :value="object._id">
          Dr. {{ object.Name }}
        </option>
      </select>
      <br />
      <label for="animals">Állatkert lakó: </label>
      <select id="animals" v-model="this.newAnimalID">
        <option v-for="object in this.animalsArray" :value="object._id">
          {{ object.Name }}
        </option>
      </select>
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
import api from "../js/api";
import adderRoutes from "../js/routes";
export default {
  name: "MedicalRecordsComponent",
  props: {
    medical_records: {
      type: Object,
      required: true,
    },
    veterinars: {
      type: Object,
      required:true,
    },
    animals: {
      type:Object,
      required:true,
    }
  },
  data() {
    return {
      visibleForm: false,
      newAnimalID: "",
      newVeteritarianID: "",
      newDiagnosis: "",
      newTreatment: "",
      newMedication: "",
      animalsArray: Array,
      veteritarianArray: Array,
    };
  },
  methods: {
    toggleForm() {
      this.visibleForm = !this.visibleForm;
      api.get("/AnimalRoutes/getAnimals").then((response) => {
        this.animalsArray = response.data;
      });
      api.get("VeteritarianRoutes/getVeteritarians").then((response) => {
        // console.log(response.data);
        this.veteritarianArray = response.data;
      });
    },

    getAnimalName(medrecords, animals, animalId) {
      const record = medrecords.find(record => record.AnimalID === animalId);
      if (record) {
        const animal = animals.find(animal => animal._id === record.AnimalID);
        if (animal) {
          return animal.Name;
        }
      }
      console.log("null");
      return null;
    },
    getVetName(medrecords, veterinars, vetID) {
      const record = medrecords.find(record => record.VeteritarianID === vetID);
      if (record) {
        const vet = veterinars.find(vet => vet._id === record.VeteritarianID);
        if (vet) {
          return vet.Name;
        }
      }
      return null;
    },


    async submitForm() {
      console.table(adderRoutes.addMedicalRecord(
        this.newAnimalID,
        this.newVeteritarianID,
        this.newDiagnosis,
        this.newTreatment,
        this.newMedication
      )
      )

      // console.table(newMedicalRecord);
      this.visibleForm = false;
      this.newAnimalID = "";
      this.veteritarianID = "";
      this.newDiagnosis = "";
      this.newTreatment = "";
      this.newMedication = "";
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;

  gap: 0px 0px;
}

#medicalrecContainer {
  display: grid;

  gap: 0px 0px;
}
input,
textarea,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
