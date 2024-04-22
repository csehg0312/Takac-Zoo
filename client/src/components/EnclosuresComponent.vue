<!-- components/Animals.vue -->
<template>
    <div>
        <h2>Enclosures</h2>
    </div>
    <div id="container">
        <div id="enclosureContainer">
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
                            Élőhely típusa:
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.enclosures.value">
                    <td>{{ object.EnclosureName }} </td>
                    <td>{{ object.Size }} négyzetméter</td>
                    <td>{{ object.HabitatType }} </td>
                    <button @click="deleteReq(object._id)">x</button>
                </tr>
            
            </table>
        </div>
            <!-- open-closebutton -->
            
        <div id="newDataButton">
            <button @click="toggleForm">{{ visibleForm ? 'Bezár' : 'Kinyit' }}</button>
        </div>

        <!-- form start -->
        <form v-if="visibleForm" id="newData" @submit.prevent="submitForm">
            <label for="nev">Megnevezése: </label><input id="faj" type="text" v-model="newEncosureName">
            <br>
            <label for="size">Mérete: </label><input id="nev" type="number" v-model="newEnclosureSize">
            <br>
            <label for="envtype">Élőhely típusa: </label>
            <select id="envtype"v-model="newEnclosureType">
                <option value="Hím">Szavanna</option>
                <option value="Nőstény">Arktikus</option>
                <option value="Nőstény">Erdő</option>
                <option value="Nőstény">Mező</option>
                <option value="Nőstény">Trópusi</option>
                <option value="Nőstény">Tengeri</option>
                <option value="Nőstény">Akvárium</option>
            </select>
            <br>
            <input type="submit" value="Hozzáad">
        </form>
    </div>
</template>

<script>
import adderRoutes from '../js/routes'
import api from '../js/api.js'

export default {
    name: 'EnclosuresComponent',
    props: {
            enclosures: {
                type: Object,
                required:true
            }
        },

        data() {
            return {
                visibleForm: false,
                newEncosureName: "",
                newEnclosureSize: 0,
                newEnclosureType: ""
            }
        },

        methods: {

            deleteReq(id){
                api.delete(`/AnimalRoutes/deleteAnimal/${id}`).then((response) => {
                    console.log(response.data)
                })
            },

            toggleForm() {
                this.visibleForm = !this.visibleForm;
            },

            async submitForm() {
                adderRoutes.addEnclosures(this.newEnclosureName, this.newEnclosureSize, this.newEnclosureType)
                
                // console.table(newAnimal);
                this.visibleForm = false;
                this.newEnclosureName = "";
                this.newEnclosureSize = 0;
                this.newEnclosureType = "";
            },
        },
    
}
</script>

<style scoped>

    #container {
        display: grid;
 
        gap: 0px 0px; 
        
    }

    #enclosureContainer {
        display: grid;
 
        gap: 0px 0px; 
    }
    input, select{
        background-color: #f9f9f9;
        color: #1a1a1a;
    }
</style>
  