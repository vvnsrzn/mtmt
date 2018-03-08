<template>
  <div>
    <div class="container">
        <img src="data:image/jpeg;base64,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">
        <h2 class="title is-3">Quels traits de caractère te définissent le mieux ?</h2>
        <!-- -->
        <section class="columns">
            <div class="column">
                <b-field label="Ta principale qualité ?">
                    <b-autocomplete
                        rounded
                        v-model="name"
                        :data="filteredDataArrayQuality"
                        placeholder="Écris si tu oses"
                        @select="optionQuality => qualitySelected = optionQuality">
                        <template slot="empty">Je l'ai pas celui là..</template>
                    </b-autocomplete>
                </b-field>
                <b-field>
                    <b-input  v-if="name" rounded placeholder="Un indice peut être ?" v-model="qualityHint" type="text">
                    </b-input>
                </b-field>
            </div>  
            <div class="column">
                <b-field label="Ton principal défaut ?">
                    <b-autocomplete
                        rounded
                        v-model="name2"
                        :data="filteredDataArrayDefect"
                        placeholder="On en a tous un petit..."
                        @select="optionDefect => defectSelected = optionDefect">
                        <template slot="empty">Je l'ai pas celui là..</template>
                    </b-autocomplete>
                </b-field>
                <b-field>
                    <b-input v-if="name2" rounded placeholder="Un indice peut être ?" v-model="defectHint" type="text">
                    </b-input>
                </b-field>
            </div>
      </section>
      <!-- -->
        <div>
            <button class="button is-danger" @click.prevent="sendTraits" >Finaliser</button>
        </div>
    </div>
  </div>
</template>

<script>
    import quality from "../quality";
    import defect from "../defect";
    import api from "../api";

    export default {
      data() {
        return {
          name: "",
          name2: "",
          quality: quality,
          qualityHint: "",
          qualitySelected: null,
          defect: defect,
          defectHint: "",
          defectSelected: null
        };
      },
      methods: {
        sendTraits() {
          api
            .sendTraits({
              userId: localStorage.getItem("id"),
              traits: {
                quality: {
                  answer: this.name,
                  hint: this.qualityHint
                },
                defect: {
                  answer: this.name2,
                  hint: this.defectHint
                }
              }
            })
            .then(data => {
              this.$toast.open({
                message: `C'est parti!`,
                type: "is-success"
              });
              this.$router.push("/swiper");
            })
            .catch(err => {
              this.error = err;
            });
        }
      },
      computed: {
        filteredDataArrayQuality() {
          return this.quality.filter(option => {
            return (
              option
                .toString()
                .toLowerCase()
                .indexOf(this.name.toLowerCase()) >= 0
            );
          });
        },
        filteredDataArrayDefect() {
          return this.defect.filter(option => {
            return (
              option
                .toString()
                .toLowerCase()
                .indexOf(this.name2.toLowerCase()) >= 0
            );
          });
        }
      }
    };
</script>

<style>
    img {
      margin-top: 12px;
      width: 90px;
    }
</style>