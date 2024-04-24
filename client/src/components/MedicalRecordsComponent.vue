<!-- components/Animals.vue -->
<template>
  <h2>MedicalRecords</h2>
  <div id="container">
    <div id="medicalrecContainer">
      <table>
        <tr>
          <td>
            <b> Diagnózis </b>
          </td>
          <td>
            <b> Kezelés </b>
          </td>
        </tr>
        <tr v-for="object in this.medical_records.value">
          <td>{{ object.Diagnosis }}</td>
          <td>{{ object.Treatment }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalRecordsComponent",
  props: {
    medical_records: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visibleForm: false,
      newAnimalID: "",
      newVeteritarianID: "",
      newDiagnosis: "",
      newTreatment: "",
      newMedication: "",
    };
  },
  metods: {
    async submitForm() {
      adderRoutes.addMedicalRecord(
        this.newAnimalID,
        this.newVeteritarianID,
        this.newDiagnosis,
        this.newTreatment,
        this.newMedication
      );

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
select {
  background-color: #f9f9f9;
  color: #1a1a1a;
}
</style>
