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
            <button @click="toggleForm">{{ visibleForm ? 'Bezár' : 'Kinyit' }}</button>
        </div>
        <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
            <label for="faj">Állatfaj:</label><input id="faj" type="text" v-model="newAnimalSpecies">
            <br>
            <label for="nev">Neve:</label><input id="nev" type="text" v-model="newAnimalName">
            <br>
            <label for="age">Kora:</label><input id="age" v-model="newAnimalAge"type="number">
            <br>
            <label for="gender">Neme:</label>
            <select id="gender"v-model="newAnimalGender">
                <option value="Hím">Hím</option>
                <option value="Nőstény">Nőstény</option>  
            </select>
            <br>
            <input type="submit" value="Hozzáad">
        </form>
    </div>
</template>

<script>
import adderRoutes from '../js/routes'
export default {
    name: 'AnimalsComponent',
    props: {
        animals: {
            type: Object,
            required:true
        }
    },
    data() {
        return {
            visibleForm: false,
            newAnimalName: "",
            newAnimalAge: 0,
            newAnimalGender: "",
            newAnimalSpecies: ""
        }
    },
    methods: {
        // printData() {
        //     console.log(this.animals.value[0].Name)
        // },
        toggleForm() {
            this.visibleForm = !this.visibleForm;
        },
        submitForm() {
            adderRoutes.addAnimals(this.newAnimalName, this.newAnimalAge, this.newAnimalSpecies, this.newAnimalGender)
            
            // console.table(newAnimal);
            this.visibleForm = false;
            this.newAnimalName = "";
            this.newAnimalAge = 0;
            this.newAnimalGender = "";
            },
        },

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