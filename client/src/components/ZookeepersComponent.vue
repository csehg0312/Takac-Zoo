<!-- components/Animals.vue -->
<template>
    <div>
      <h2>Zookeepers</h2> 

      <table>
                <tr>
                    <td>
                        <b>
                            Neve:
                        </b>
                    </td>
                    <td>
                        <b>
                            Specializáció:
                        </b>
                    </td>
                    <td>
                        <b>
                            Tapasztalata:
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.zookeepers.value">
                    <td>{{ object.Name }} </td>
                    <td>{{ object.Specialization }} </td>
                    <td>{{ object.YearsOfExperience }} év </td>
                </tr>
                
            </table>
      <!-- <table v-if="zookeepers" v-for="object in this.zookeepers.value">
            
           <tr>Neve: {{ object.Name }}</tr>
           <tr>Specializáció: {{ object.Specialization }}</tr>
           <tr>Tapasztalata: {{ object.YearsOfExperience }} év</tr>

        </table> -->
        <p v-if="!zookeepers">Nem talalhato adat</p>
    </div>
</template>

<script>
export default {
    name: 'ZookeepersComponent',
    props: {
                zookeepers: {
                    type: Object,
                    required:true
                }
            },
    }
</script>

<style scoped>
/* Component-specific styles */
</style>
  