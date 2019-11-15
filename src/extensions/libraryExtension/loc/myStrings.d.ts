declare interface ILibraryExtensionCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'LibraryExtensionCommandSetStrings' {
  const strings: ILibraryExtensionCommandSetStrings;
  export = strings;
}
