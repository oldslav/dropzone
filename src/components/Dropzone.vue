<template>
  <div id="dnd">
    <form ref="fileform" class="dndform">
      <span>Drag Here</span>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

export default class Dropzone extends Vue {

  @Provide() public dragAndDropCapable: any = false;

  @Mutation('addFile')
  public appendFile: any;

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
        