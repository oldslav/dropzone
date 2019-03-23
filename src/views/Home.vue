<template>
	<div>
		<dropzone-component></dropzone-component>
		<h3>Preview</h3>
		<div class="flex_container">
			<div v-for="(file, key) in fileState.files" v-bind:key="key" class="preview_container">
				<img :src="file.preview" :alt="file.extension">
				<p>{{ file.size }}</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue, Provide} from 'vue-property-decorator';
    import DropzoneComponent from '@/components/Dropzone.vue';
    import {State, Mutation} from 'vuex-class';
    import IFile from '@/domain/interfaces/IFile';

    @Component({
        components: {DropzoneComponent},
    })
    export default class Home extends Vue {
        @State('files')
        public fileState!: any;
    }
</script>
