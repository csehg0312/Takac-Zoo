<!-- components/Animals.vue -->
<template>
    <div>
      <h2>Veterinars</h2>

      <table>
                <tr>
                    <td>
                        <b>
                            Neve
                        </b>
                    </td>
                    <td>
                        <b>
                            Specializáció
                        </b>
                    </td>
                    <td>
                        <b>
                            Tapasztalata
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.veterinars.value">
                    <td>{{ object.Name }} </td>
                    <td>{{ object.Specialization }} </td>
                    <td>{{ object.YearsOfExperience }} év </td>
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
name: 'VeterinarsComponent',
props: {
            veterinars: {
                type: Object,
                required:true
            }
        },
}
</script>

<style scoped>
/* Component-specific styles */
</style>
  