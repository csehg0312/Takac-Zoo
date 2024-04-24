<!-- components/Animals.vue -->
<template>
  <div>
    <h2>Enclosures</h2>
  </div>
  <div id="container">
    <div id="enclosureContainer">
      <table>
        <tr>
          <td>
            <b> Ketrec megnevezése: </b>
          </td>
          <td>
            <b> Mérete: </b>
          </td>
          <td>
            <b> Élőhely típusa: </b>
          </td>
        </tr>
        <tr v-for="object in this.enclosures.value">
          <td>{{ object.EnclosureName }}</td>
          <td>{{ object.Size }}</td>
          <td>{{ object.HabitatType }}</td>
          <button @click="deleteReq(object._id)">x</button>
        </tr>
      </table>
    </div>
    <!-- open-closebutton -->

    <div id="newDataButton">
      <button @click="toggleForm">
        {{ visibleForm ? "Bezár" : "Új" }}
      </button>
    </div>

    <!-- form start -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="nev">Megnevezése: </label
      ><input id="nev" type="text" v-model="newEnclosureName" />
      <br />
      <label for="size">Mérete: </label
      ><input id="size" type="text" v-model="newEnclosureSize" />
      <br />
      <label for="envtype">Élőhely típusa: </label>
      <select id="envtype" v-model="newEnclosureType">
        <option>Szavanna</option>
        <option>Arktikus</option>
        <option>Erdő</option>
        <option>Mező</option>
        <option>Trópusi</option>
        <option>Tengeri</option>
        <option>Akvárium</option>
      </select>
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
import adderRoutes from "../js/routes";
import api from "../js/api.js";

export default {
  name: "EnclosuresComponent",
  props: {
    enclosures: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      visibleForm: false,
      newEncosureName: "",
      newEnclosureSize: "",
      newEnclosureType: "",
    };
  },

  methods: {
    deleteReq(id) {
      api.delete(`/EnclosureRoutes/deleteEnclosure/${id}`).then((response) => {
        console.log(response.data);
      });
    },

    toggleForm() {
      this.visibleForm = !this.visibleForm;
    },

    async submitForm() {
      adderRoutes.addEnclosure(
        this.newEnclosureName,
        this.newEnclosureSize,
        this.newEnclosureType
      );

      // console.table(newEnclosure);
      this.visibleForm = false;
      this.newEnclosureName = "";
      this.newEnclosureSize = "";
      this.newEnclosureType = "";
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;

  gap: 0px 0px;
}

#enclosureContainer {
  display: grid;

  gap: 0px 0px;
}
input,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
