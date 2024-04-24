<!-- components/Animals.vue -->
<template>
  <div>
    <h2>Feedings</h2>
  </div>

  <div id="container">
    <div id="feedingContainer">
      <table>
        <tr>
          <td>
            <b> Etetés időpontja (Nap) </b>
          </td>
          <td>
            <b> Etetés időpontja (Óra) </b>
          </td>
          <td>
            <b> Etetési jegyzet </b>
          </td>
        </tr>
        <tr v-for="object in this.feedings.value">
          <td>{{ formatDate(object.FeedingDate) }}</td>
          <td>{{ formatTime(object.FeedingDate) }}</td>
          <td>{{ object.FeedingNote }}</td>
        </tr>
      </table>
    </div>

    <div id="newDataButton">
      <button @click="toggleForm">
        {{ visibleForm ? "Bezár" : "Kinyit" }}
      </button>
    </div>

    <!-- form start -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="faj">Megnevezése: </label
      ><input id="faj" type="text" v-model="newEncosureName" />
      <br />
      <label for="nev">Mérete: </label
      ><input id="nev" type="number" v-model="newEnclosureSize" />
      <br />
      <label for="gender">Élőhely típusa: </label>
      <select id="gender" v-model="newEnclosureType">
        <option value="Hím">Szavanna</option>
        <option value="Nőstény">Arktikus</option>
        <option value="Nőstény">Erdő</option>
        <option value="Nőstény">Mező</option>
        <option value="Nőstény">Trópusi</option>
        <option value="Nőstény">Tengeri</option>
        <option value="Nőstény">Akvárium</option>
      </select>
      <br />
      <input type="submit" value="Hozzáad" />
    </form>
  </div>
</template>

<script>
export default {
  name: "FeedingsComponent",
  props: {
    feedings: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatTime(dateString) {
      const date = new Date(dateString);
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      const utcString = date.toLocaleString("en-US", { timeZone: "UTC" });
      const utcDate = new Date(utcString);
      return new Intl.DateTimeFormat("en-US", options).format(utcDate);
    },
    async submitForm() {
      adderRoutes.addFeeding(this.animalID, this.keeperID, this.note);

      // console.table(newFeeding);
      this.visibleForm = false;
      this.animalID = "";
      this.keeperID = "";
      this.note = "";
    },
  },
};
</script>

<style scoped>
/* Component-specific styles */
</style>
