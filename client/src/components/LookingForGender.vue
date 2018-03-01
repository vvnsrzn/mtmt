<template>
    <section>
        <b-field>
            <b-radio-button 
                v-model="lookingForGender"
                native-value="Hommes"
                type="is-danger">
                <span>Hommes</span>
            </b-radio-button>

            <b-radio-button 
                v-model="lookingForGender"
                native-value="Femmes"
                type="is-success">
                <span>Femmes</span>
            </b-radio-button>

        </b-field>
        <p class="content">
            <b>Selection:</b>
            {{ lookingForGender }}
        </p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                lookingForGender: '',
            }
        },
        methods: {
          setLookingForGender() {
            console.log(this.$emit)
          }
        }
    }
</script>