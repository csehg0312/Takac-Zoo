<!-- components/Animals.vue -->
<template>
    <div>
      <h2>Visitors</h2>
      <!-- Display and edit animal data here -->

      <table>
                <tr>
                    <td>
                        <b>
                            Látogatás időpontja (Nap)
                        </b>
                    </td>
                    <td>
                        <b>
                            Látogatás időpontja (Óra)
                        </b>
                    </td>
                    <td>
                        <b>
                            Kor
                        </b>
                    </td>
                    <td>
                        <b>
                            Jegy típusa
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.visitors.value">
                    <td>{{ formatDate(object.VisitingDate) }} </td>
                    <td>{{ formatTime(object.VisitingDate) }} </td>
                    <td>{{ object.Age }} </td>
                    <td>{{ object.TicketType }} </td>
                </tr>
                
            </table>
      <!-- <table v-for="object in this.visitors.value">
            
            <tr>Látogatás időpontja (Nap): {{ this.formatDate(object.VisitingDate) }}</tr>
            <tr>Látogatás időpontja (Óra): {{ this.formatTime(object.VisitingDate) }}</tr>
           <tr>Kor: {{ object.Age }}</tr>
           <tr>Jegy típusa: {{ object.TicketType }}</tr>  

        </table> -->
    </div>
</template>

<script>
export default {
name: 'VisitorsComponent',
props: {
            visitors: {
                type: Array,
                required:true
            }
        },
        methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        },
        formatTime(dateString) {
            const date = new Date(dateString);
            const options = { hour: '2-digit', minute: '2-digit', hour12: true };
            const utcString = date.toLocaleString('en-US', { timeZone: 'UTC' });
            const utcDate = new Date(utcString);
            return new Intl.DateTimeFormat('en-US', options).format(utcDate);

        }
    }
}
</script>

<style scoped>
/* Component-specific styles */
</style>
  