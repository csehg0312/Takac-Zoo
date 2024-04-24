<!-- components/Animals.vue -->
<template>
  <div>
    <h2>Zookeepers</h2>

    <table>
      <tr>
        <td>
          <b> Neve: </b>
        </td>
        <td>
          <b> Specializáció: </b>
        </td>
        <td>
          <b> Tapasztalata: </b>
        </td>
      </tr>
      <tr v-for="object in this.zookeepers.value">
        <td>{{ object.Name }}</td>
        <td>{{ object.Specialization }}</td>
        <td>{{ object.YearsOfExperience }} év</td>
      </tr>
    </table>
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
    data() {
      return {
        visibleForm: false,
        newName: "",
        newSpecialization: "",
        newYearsOfExperience: "",
      }
    },
    methods: {
        deleteReq(id) {
          api.delete(`/ZookeeperRoutes/deleteZookeeper/${id}`).then((response) => {
            console.log(response.data);
          });
        },
        async submitForm() {
          adderRoutes.addZookeeper(this.newName, this.newSpecialization, this.newYearsOfExperience);

          // console.table(newZookeeper);
          this.visibleForm = false;
          this.newName = "";
          this.newSpecialization = "";
          this.newYearsOfExperience = "";
      },
    }
  }
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
