<script setup>
import moment from "moment";
import {useI18n} from "vue-i18n";
import { ref } from "vue";

// init settings for dateTime
const props = defineProps({
  format: {type: String, default: "MMM D[,] HH:mm"},
  autoUpdate: {type: Boolean, default: true},
  showText: {type: Boolean, default: true},
});

// define locale for i18n
moment.locale(`${useI18n().locale.value}`)

// This is the component to show the current date and time.
const now = ref(moment(new Date()).format(props.format));
// Auto update the date and time every minute.
if(props.autoUpdate) {
  setInterval(() => {
    now.value = moment(new Date()).format(props.format);
  }, 60 * 1000); // 60 * 1000 = 1 minute
}

</script>
<template>
  <p>{{ this.props.showText? $t('default.dateText', {now}) : now}}</p>
</template>