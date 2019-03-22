import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class File extends VuexModule {
  public files: any = [];

  @Mutation
  public addFile(file: any) {
    this.files.push(file);
  }
}
