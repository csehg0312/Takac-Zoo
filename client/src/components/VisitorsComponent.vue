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
  </div>
</template>

<script>
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
      adderRoutes.addVisitor(this.newAge, this.newTicketType);

      // console.table(newVisitor);
      this.visibleForm = false;
      this.newAge = "";
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
