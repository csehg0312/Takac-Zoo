<!-- components/Animals.vue -->
<template>
  <h2>Gondozók listája</h2>
  <div id="container">
    <div id="keepersContainer">
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
        <tr v-for="object in this.zookeepers.value">
          <td>{{ object.Name }}</td>
          <td>{{ object.Specialization }}</td>
          <td>{{ object.YearsOfExperience }} év</td>
          <button @click="deleteReq(object._id)">x</button>
        </tr>
      </table>
      <p v-if="!zookeepers">Nem talalhato adat</p>
    </div>
    <div id="newDataButton">
      <button @click="toggleForm">{{ visibleForm ? "Bezár" : "Új" }}</button>
    </div>
    <!-- form start -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="nev">Neve: </label
      ><input id="nev" type="text" v-model="newName" required />
      <br />
      <label for="spec">Specializáció: </label
      ><input id="spec" type="text" v-model="newSpecialization" required />
      <br />
      <label for="yeo">Tapasztalata: </label>
      <input type="number" v-model="newYearsOfExperience" required />
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useDialog } from "vue-final-modal";
import api from "../js/api";
import adderRoutes from "../js/routes";
export default {
  name: "ZookeepersComponent",
  props: {
    zookeepers: {
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
    deleteReq(id) {
      api.delete(`/ZookeeperRoutes/deleteZookeeper/${id}`).then((response) => {
        console.log(response.data);
      });
    },
    async submitForm() {
      adderRoutes.addZookeeper(
        this.newName,
        this.newSpecialization,
        this.newYearsOfExperience
      );

      // console.table(newZookeeper);
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

#keepersContainer {
  display: grid;

  gap: 0px 0px;
}
input,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
