<template>
    <div>
      <h2>Animals</h2>
    </div>
    <div id="container">
        <div id="animalContainer">
            <table>
                <tr>
                    <td>
                        <b>
                            Állatfaj:
                        </b>
                    </td>
                    <td>
                        <b>
                            Neve:
                        </b>
                    </td>
                    <td>
                        <b>
                            Kora:
                        </b>
                    </td>
                    <td>
                        <b>
                            Neme:
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.animals.value">
                    <td>{{ object.Species }} </td>
                    <td>{{ object.Name }} </td>
                    <td>{{ object.Age }} </td>
                    <td>{{ object.Gender }} </td>
                </tr>
                
            </table>
        </div>
        <div id="newDatecontainer">
            <button style="width: 1%;
  height: 100%;
  font-size: 1.2em;
  padding: 0.5em;">+</button>
        </div>
    </div>
</template>

<script>
// import { dotmap } from 'dot-prop-immutable'
export default {
    name: 'AnimalsComponent',
    props: {
        animals: {
            type: Object,
            required:true
        }
    },
    methods: {
        printData() {
            console.log(this.animals.value[0].Name)
        },
    }
}
</script>

<style scoped>
    #container {
        display: grid;
 
        gap: 0px 0px; 
        
    }

    #animalContainer {
        display: grid;
 
        gap: 0px 0px; 
    }
</style>