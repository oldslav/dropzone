<template>
  <div>
    <div id="dnd">
      <form ref="fileform" class="dndform">
        <span>Drag Here</span>
      </form>
    </div>
    <!-- <dropzone-component></dropzone-component> -->
    <div v-for="(file, key) in fileState.files" v-bind:key="key">
      <p>{{ file.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import DropzoneComponent from '@/components/Dropzone.vue';
import { State, Mutation } from 'vuex-class';
@Component({
  components: { DropzoneComponent },
})
export default class Home extends Vue {
  // @Provide() public files: any = [];

  @State('files')
  public fileState!: any;

  @Mutation('addFile')
  public appendFile: any;

  @Provide() public dragAndDropCapable: any = false;

  public $refs!: {
    fileform: HTMLFormElement,
  };

  public determineDragAndDropCapable() {
    const div = document.createElement('div');
    return (('draggable' in div)
      || ('ondragstart' in div && 'ondrop' in div))
      && 'FormData' in window
      && 'FileReader' in window;
  }

  public preventDefaults(e: any) {
    e.stopPropagation();
    e.preventDefault();
  }

  public mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable;

    if (this.dragAndDropCapable) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop']
        .forEach((evt) => {
          this.$refs.fileform.addEventListener(evt, this.preventDefaults, false);
        });

      this.$refs.fileform.addEventListener('drop', (e: any) => {
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          this.appendFile(e.dataTransfer.files[i]);
        }
      });
    }
  }
}
</script>
