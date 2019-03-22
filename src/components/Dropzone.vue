<template>
	<div id="dnd" class="dndform"
	     @drop="onDrop"
	     @dragover.prevent>
		<span>Drag Here</span>
	</div>
</template>
<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator';
    import {Mutation} from 'vuex-class';

    @Component
    export default class Dropzone extends Vue {
        @Mutation('addFile')
        public appendFile: any;

        public onDrop(e: any) {
            e.preventDefault();
            e.stopPropagation();
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                this.appendFile(e.dataTransfer.files[i]);
            }
        }

    }
</script>
        