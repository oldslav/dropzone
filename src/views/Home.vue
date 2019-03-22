<template>
  <div>
    <div id="dnd">
      <form ref="fileform" class="dndform">
        <span>Drag Here</span>
      </form>
    </div>
    <div v-for="(file, key) in files" v-bind:key="key">
      <p>{{ file.name }}</p>
    </div>
    <button @click="output">Click</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component({
})
export default class Home extends Vue {
  @Provide() public files: any = [];
  @Provide() public dragAndDropCapable: any = false;

  public $refs!: {
    fileform: HTMLFormElement,
  };

  public output() {
    console.log(this.files);
  }

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
          this.files.push(e.dataTransfer.files[i]);
        }
      });
    }
  }
}
</script>
