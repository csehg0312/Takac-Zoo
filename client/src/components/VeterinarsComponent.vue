<!-- components/Animals.vue -->
<template>
  <h2>Felfogadott orvosok</h2>

  <div id="container">
    <div id="veterinarsContainer">
      <table>
        <tr>
          <td>
            <b>Neve: </b>
          </td>
          <td>
            <b>Specializáció: </b>
          </td>
          <td>
            <b>Tapasztalata: </b>
          </td>
        </tr>
        <tr v-for="object in this.veterinars.value">
          <td>{{ object.Name }}</td>
          <td>{{ object.Specialization }}</td>
          <td>{{ object.YearsOfExperience }} év</td>
        </tr>
      </table>
    </div>
    <div id="newDataButton">
      <button @click="toggleForm">
        {{ visibleForm ? "Bezár" : "Új" }}
      </button>
    </div>
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="nev">Neve: </label
      ><input id="nev" type="text" v-model="newName" required />
      <br />
      <label for="spec">Specializáció: </label
      ><input id="spec" type="text" v-model="newSpecialization" required />
      <br />
      <label for="yoe">Tapasztalat: </label>
      <input id="yoe" type="number" v-model="newYearsOfExperience" required />
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
import api from "../js/api";
import adderRoutes from "../js/routes";
export default {
  name: "VeterinarsComponent",
  props: {
    veterinars: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visibleForm: false,
      newName: "",
      newSpecialization: "",
      newYearsOfExperience: "",
    };
  },
  methods: {
    toggleForm() {
      this.visibleForm = !this.visibleForm;
    },

    //TODO needed to optimize the submitform in routes
    async submitForm() {
      adderRoutes.addVeteritarian(
        this.newName,
        this.newSpecialization,
        this.newYearsOfExperience
      );

      // console.table(newVeteritarian);
      this.visibleForm = false;
      this.newName = "";
      this.newSpecialization = "";
      this.newYearsOfExperience = 0;
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;

  gap: 0px 0px;
}

#veterinarsContainer {
  display: grid;

  gap: 0px 0px;
}
input,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
