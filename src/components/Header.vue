<template>
    <div id="header">
        <div>TEST-TODO LIST</div>
        <ol class="breadcrumb">
            <li><router-link to="/">All</router-link></li>
            <li><router-link to="/active">Active</router-link></li>
            <li class="active"><router-link to="/clear">Clear</router-link></li>
        </ol>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>