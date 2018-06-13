<template>
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card dark color="secondary">
            <thailand-map-component></thailand-map-component>
            <!-- <v-card-text class="px-0">6</v-card-text> -->
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card dark color="secondary">
            <my-chart></my-chart>
            <!-- <v-card-text class="px-0">6</v-card-text> -->
          </v-card>
          <v-card dark color="secondary">
            <my-chart></my-chart>
            <!-- <v-card-text class="px-0">6</v-card-text> -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ThailandMapComponent from '@/components/ThailandMapComponent';
import MyChart from '@/components/MyChart';
export default {
  components: {
    ThailandMapComponent,
    MyChart
  }
};
</script>
