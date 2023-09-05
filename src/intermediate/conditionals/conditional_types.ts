class MyVideoEncoder {
  // lets imagine we don't have access to VideoEncoderConfig
  constructor(config: VideoEncoderConfig) {}
}

new MyVideoEncoder({
  codec: "LPCM",
  width: 800,
  height: 600,
  // birate: 25  // this typo causes an error nowadays, yay! :)
});

type ConstructorArgs<C> = C extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A // return the inferred type
  : never; // return something that would disappear in a union

let myVideoEncoderConfig: ConstructorArgs<typeof MyVideoEncoder>;
// myVideoEncoderConfig.alpha
//                     .avc
//                     .bitrate
//                     ...

let dateConfig: ConstructorArgs<typeof Date>; // string | number | Date

let promiseConfig: ConstructorArgs<typeof Promise>; // (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void
