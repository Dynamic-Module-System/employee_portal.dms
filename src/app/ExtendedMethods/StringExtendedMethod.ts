interface String {
    isNotNullOrEmpty(): boolean;
}
  
String.prototype.isNotNullOrEmpty = function(): boolean {
    return this !== null && this !== undefined && this.trim() !== "";
};
  