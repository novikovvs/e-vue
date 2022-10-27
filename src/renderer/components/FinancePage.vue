<template>
  <v-container>
    <v-row v-if="!blockedUpload">
      <v-file-input v-model="inputFile"></v-file-input>
      <v-btn @click="uploadFile">Upload</v-btn>
    </v-row>
    <v-row v-if="!blockedUpload">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      It`s work!
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'FinancePage',
    data () {
      return {
        inputFile: null,
        prom: null,
        blockedUpload: false
      }
    },
    methods: {
      uploadFile () {
        const formData = new FormData()
        formData.append('upload_file', this.inputFile)
        this.prom = axios.post('http://127.0.0.1/api/upload', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.prom.catch((err) => alert(err.response.data.message))
        this.prom.then(() => {
          alert('File is uploaded!')
          this.blockedUpload = true
        })
      }
    }
  }
</script>

<style lang="css" src="./FinancePage/Finance.css" scoped/>
