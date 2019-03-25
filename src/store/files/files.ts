import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import IFile from '@/domain/interfaces/IFile';

@Module
export default class File extends VuexModule {
  public files: IFile[] = [];

  @Mutation
  public addFile(file: IFile) {
    this.files.push(file);
  }
}
