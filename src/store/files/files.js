import * as tslib_1 from "tslib";
import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
let File = class File extends VuexModule {
    constructor() {
        super(...arguments);
        this.files = [];
    }
    addFile(file) {
        this.files.push(file);
    }
};
tslib_1.__decorate([
    Mutation
], File.prototype, "addFile", null);
File = tslib_1.__decorate([
    Module
], File);
export default File;
//# sourceMappingURL=files.js.map