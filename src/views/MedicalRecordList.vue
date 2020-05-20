<template>
    <div>
        <ul v-if="medicalRecords && medicalRecords.length">
            <li v-for="record of medicalRecords">
                <p><strong>{{record.id}}</strong></p>
                <p>{{record.status}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {HTTP} from "../http-common";

    export default {
        name: "MedicalRecordList",
        data: () => ({
            medicalRecords: [],
            errors: []
        }),
        created() {
            HTTP.get("records").then(response => {
                this.medicalRecords = response.data;
            }).catch(error => {
                this.errors.push(error)
            })
        }
    }
</script>