<!-- components/Animals.vue -->
<template>
    <div>
      <h2>Feedings</h2>

      <table>
                <tr>
                    <td>
                        <b>
                            Etetés időpontja (Nap)
                        </b>
                    </td>
                    <td>
                        <b>
                            Etetés időpontja (Óra)
                        </b>
                    </td>
                    <td>
                        <b>
                            Etetési jegyzet
                        </b>
                    </td>
                </tr>
                <tr v-for="object in this.feedings.value">
                    <td>{{ formatDate(object.FeedingDate) }} </td>
                    <td>{{ formatTime(object.FeedingDate) }} </td>
                    <td>{{ object.FeedingNote }} </td>
                </tr>
                
            </table>

      <!-- <table v-for="object in this.feedings.value">
            
            <tr>Etetés időpontja(Nap): {{ formatDate(object.FeedingDate) }}</tr>
            <tr>Etetés időpontja(Óra): {{ formatTime(object.FeedingDate) }}</tr>
            <tr>Etetési jegyzet: {{ object.FeedingNote }}</tr>

        </table> -->

      <!-- Display and edit animal data here -->
    </div>
</template>

<script>
export default {
name: 'FeedingsComponent',
    props: {
            feedings: {
                type: Object,
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
  