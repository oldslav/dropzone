<template>
	<div>
		<dropzone-component></dropzone-component>
		<div v-for="(file, key) in fileState.files" v-bind:key="key">
			<p>{{ file.name }}</p>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue, Provide} from 'vue-property-decorator';
    import DropzoneComponent from '@/components/Dropzone.vue';
    import {State, Mutation} from 'vuex-class';

    @Component({
        components: {DropzoneComponent},
    })
    export default class Home extends Vue {
        // @Provide() public files: any = [];

        @State('files')
        public fileState!: any;
    }
</script>
