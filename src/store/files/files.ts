import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import IFile from '@/domain/interfaces/IFile';

@Module
export default class File extends VuexModule {
  public files: any = [];

  @Mutation
  public addFile(file: any) {
    this.files.push(file);
  }
}
