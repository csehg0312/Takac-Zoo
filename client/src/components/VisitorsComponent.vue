<!-- components/Animals.vue -->
<template>
  <h2>Látogatók listája</h2>
  <div id="container">
    <div id="visitorsContainer">
      <table>
        <tr>
          <td>
            <b>Látogatás időpontja (Nap): </b>
          </td>
          <td>
            <b>Látogatás időpontja (Óra): </b>
          </td>
          <td>
            <b>Kor: </b>
          </td>
          <td>
            <b>Jegy típusa: </b>
          </td>
        </tr>
        <tr v-for="object in this.visitors.value">
          <td>{{ formatDate(object.VisitingDate) }}</td>
          <td>{{ formatTime(object.VisitingDate) }}</td>
          <td>{{ object.Age }}</td>
          <td>{{ object.TicketType }}</td>
        </tr>
      </table>
    </div>
    <div id="newDataButton">
      <button @click="toggleForm">{{ visibleForm ? "Bezár" : "Új" }}</button>
    </div>
    <!-- form start -->
    <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
      <label for="age">Kor </label
      ><input id="age" type="number" v-model="newAge" required />
      <br />
      <label for="ticket">Jegy típusa: </label>
      <select id="ticket" v-model="newTicketType" required>
        <option>Felnőtt</option>
        <option>Diák (14-26)</option>
        <option>Idős kedvezményes</option>
        <option>Családi kedvezményes</option>
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
  name: "VisitorsComponent",
  props: {
    visitors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visibleForm: false,
      newAge: "",
      newTicketType: "",
    };
  },
  methods: {
    toggleForm() {
      this.visibleForm = !this.visibleForm;
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatTime(dateString) {
      const date = new Date(dateString);
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      const europeString = date.toLocaleString("en-US", {
        timeZone: "Europe/Bratislava",
      });
      const europeDate = new Date(europeString);
      return new Intl.DateTimeFormat("en-US", options).format(europeDate);
    },
    async submitForm() {
      adderRoutes.addVisitor(this.newAge, this.newTicketType);

      // console.table(newVisitor);
      this.visibleForm = false;
      this.newAge = 0;
      this.newTicketType = "";
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;

  gap: 0px 0px;
}

#visitorsContainer {
  display: grid;

  gap: 0px 0px;
}
input,
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
