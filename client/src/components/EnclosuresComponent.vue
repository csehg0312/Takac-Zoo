<!-- components/Animals.vue -->
<template>
    <div>
      <h2>Enclosures</h2>
      <table>
                <tr>
                    <td>
                        <b>
                            Ketrec megnevezése:
                        </b>
                    </td>
                    <td>
                        <b>
                            Mérete:
                        </b>
                    </td>
                    <td>
                        <b>
                            Környezeti hőmérséklete:
                        </b>
                    </td>
                    <td>
                        <b>
                            Élőhely típusa:
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.enclosures.value">
                    <td>{{ object.EnclosureName }} </td>
                    <td>{{ object.Size }} </td>
                    <td>{{ object.TemperatureInCelsius }} °C</td>
                    <td>{{ object.HabitatType }} </td>
                </tr>
                
            </table>
    </div>
</template>

<script>
export default {
    name: 'EnclosuresComponent',
    props: {
            enclosures: {
                type: Object,
                required:true
            }
        },
    
}
</script>

<style scoped>
/* Component-specific styles */
</style>
  