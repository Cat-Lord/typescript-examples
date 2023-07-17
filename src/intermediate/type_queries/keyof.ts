type DateKeys = keyof Date;

// take only string keys
type DateStringKeys = keyof Date & string; // "toString" | "toDateString" | "toTimeString" ...
