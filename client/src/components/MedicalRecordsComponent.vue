<!-- components/Animals.vue -->
<template>
  <div>
    <h2>MedicalRecords</h2>

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
    <!-- <table v-for="object in this.medical_records.value">
            
            <tr>
                <b>
                    Diagnózis:
                </b> 
                {{ object.Diagnosis }}
            </tr>
           <tr>
            <b>
                Kezelés: 
            </b>
            {{ object.Treatment }}
            </tr>
           
        </table> -->
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
/* Component-specific styles */
</style>
