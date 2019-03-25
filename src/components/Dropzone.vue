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
    import IFile from '@/domain/interfaces/IFile';

    @Component
    export default class Dropzone extends Vue {
        @Mutation('addFile')
        private appendFile: any;
        private publicPath: any = process.env.BASE_URL;

        public onDrop(e: any) {
            e.preventDefault();
            e.stopPropagation();

            for (const file of e.dataTransfer.files) {
                this.manageFiles(file);
            }
        }

        private manageFiles(data: any) {
            const file = data;
            const arr = file.name.split('.');

            const payload: IFile = {
                name: arr[0],
                extension: arr[1],
                size: file.size + ' Bytes',
                preview: `${this.publicPath}png/${arr[1]}.png`,
            };

            if (/\.(jpe?g|png)$/i.test(file.name)) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    payload.preview = reader.result;
                };
            }
            this.appendFile(payload);
        }
    }
</script>
        