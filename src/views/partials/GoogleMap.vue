<template>
    <GoogleMap :api-key="googleMapsApiKey || ''" mapId="DEMO_MAP_ID" class="w-full xl:w-4/5 lg:w-4/5 md:w-8/9 sm:w-8/9 px-3 h-120 rounded" :center="center"
        :zoom="13">
        <AdvancedMarker :options="markerOptions" :pin-options="pinOptions"/>
    </GoogleMap>
</template>
<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const center = { lat: -26.1386063, lng: -49.8109392 }
const markerOptions = { position: center, title: 'Mafra City' }
const pinOptions = { background: '#e77d22' }

</script>