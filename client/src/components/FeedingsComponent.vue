<!-- components/Animals.vue -->
<template>
  <div>
    <h2>Etetések</h2>
  </div>

  <div id="container">
    <div id="feedingContainer" style="display: flex;">
      <table>
        <tr>
          <td>
            <b>Etetés időpontja (Nap): </b>
          </td>
          <td>
            <b>Etetés időpontja (Óra): </b>
          </td>
          <td>
            <b>Etetési jegyzet: </b>
          </td>
          
        </tr>
        <tr v-for="object in this.feedings.value">
          <td>{{ formatDate(object.FeedingDate) }}</td>
          <td>{{ formatTime(object.FeedingDate) }}</td>
          <td>{{ object.FeedingNote }}</td>
        </tr>
      </table>
      <table>
        <td><b>Ki etette:</b></td>
        <tr v-for="object in this.feedings.value">
          <td>{{ getKeeperName(this.feedings.value, this.zookeepers.value, object.KeeperID) }}</td>
        </tr>
      </table>
      <table>
        <td><b>Kit etetett:</b></td>
        <tr v-for="object in this.feedings.value">
          <td>{{ getAnimalName(this.feedings.value, this.animals.value, object.AnimalID) }}</td>
        </tr>
      </table>
    </div>

    <div id="newDataButton">
      <button @click="toggleForm">
        {{ visibleForm ? "Bezár" : "Új" }}
      </button>
    </div>

    <!-- form start -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="note">Jegyzet</label
      ><textarea v-model="this.newNote" id="note" required></textarea>
      <br />
      <label for="animal">Melyik Állat kapott?</label>
      <select v-model="this.newAnimalID" id="animal">
        <option v-for="object in this.animalsArray" :value="object._id">
          {{ object.Name }}
        </option>
      </select>
      <br />
      <label for="keeper">Ki etette?</label>
      <select v-model="this.newKeeperID" id="keeper">
        <option v-for="object in this.keepersArray" :value="object._id">
          {{ object.Name }}
        </option>
      </select>
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
import adderRoutes from "../js/routes";
import api from "../js/api";
export default {
  name: "FeedingsComponent",
  props: {
    feedings: {
      type: Object,
      required: true,
    },
    animals: {
      type:Object,
      required:true
    },
    zookeepers: {
      type: Object,
      required:true
    },
  },
  data() {
    return {
      visibleForm: false,
      newAnimalID: "",
      selectedAnimal: String,
      selectedKeeper: String,
      newKeeperID: "",
      newNote: "",
      keepersArray: Array,
      animalsArray: Array,
    };
  },
  methods: {
    toggleForm() {
      this.visibleForm = !this.visibleForm;
      api.get("/AnimalRoutes/getAnimals").then((response) => {
        this.animalsArray = response.data;
        // console.log(this.animalsArray[0]);
      });
      api.get("/ZookeeperRoutes/getZookeepers").then((response) => {
        this.keepersArray = response.data;
        // console.log(this.keepersArray[0]);
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatTime(dateString) {
      const date = new Date(dateString);
      const options = { hour: "2-digit", minute: "2-digit", hour12: false };
      const europeString = date.toLocaleString("en-US", {
        timeZone: "Europe/Bratislava",
      });
      const europeDate = new Date(europeString);
      return new Intl.DateTimeFormat("en-US", options).format(europeDate);
    },

    getAnimalName(feedings, animals, animalId) {
      const feeding = feedings.find(feeding => feeding.AnimalID === animalId);
      if (feeding) {
        const animal = animals.find(animal => animal._id === feeding.AnimalID);
        if (animal) {
          return animal.Name;
        }
      }
      return null;
    },
    getKeeperName(feedings, keepers, keeperID) {
      const feeding = feedings.find(feeding => feeding.KeeperID === keeperID);
      if (feeding) {
        const keeper = keepers.find(keeper => keeper._id === feeding.KeeperID);
        if (keeper) {
          return keeper.Name;
        }
      }
      return null;
    },
    async submitForm() {
      // console.log(this.newNote, this.selectedAnimal, this.newKeeperID);

      adderRoutes.addFeeding(this.newAnimalID, this.newKeeperID, this.newNote);

      // console.table(newFeeding);
      this.visibleForm = false;
      this.newAnimalID = "";
      this.newKeeperID = "";
      this.newNote = "";
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;

  gap: 0px 0px;
}

#feedingContainer {
  display: grid;

  gap: 0px 0px;
}
textarea,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
