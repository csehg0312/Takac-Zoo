<!-- components/Animals.vue -->
<template>
  <div>
    <h2>Veterinars</h2>

    <table>
      <tr>
        <td>
          <b> Neve </b>
        </td>
        <td>
          <b> Specializáció </b>
        </td>
        <td>
          <b> Tapasztalata </b>
        </td>
      </tr>
      <tr v-for="object in this.veterinars.value">
        <td>{{ object.Name }}</td>
        <td>{{ object.Specialization }}</td>
        <td>{{ object.YearsOfExperience }} év</td>
      </tr>
    </table>
    <!-- <table v-for="object in this.veterinars.value">
            
        <tr>Neve: {{ object.Name }}</tr>
        <tr>Specializació: {{ object.Specialization }}</tr>
        <tr>Tapasztalata: {{ object.YearsOfExperience }} év</tr>
           

        </table> -->
    <!-- Display and edit animal data here -->
  </div>
</template>

<script>
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
      this.newYearsOfExperience = "";
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
