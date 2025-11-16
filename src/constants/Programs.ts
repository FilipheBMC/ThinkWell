// type ProgramCode = "041" | "043" | "044" | "045";

// type ProgramItem = {
//     [key in ProgramCode]?: string[];
// };


// export const programs: ProgramItem[] = [
//     { "041" : ["a", "d", "c", "b", "d", "a", "a", "d", "c", "b", "b", "c", "d", "d", "b", "d", "b", "d", "a", "b", "a", "b", "c", "a", "c", "a", "c", "c", "b", "d"] },
//     { "043" : ["d" ,"b" ,"b" ,"b" ,"c" ,"d" ,"c" ,"d" ,"d" ,"d" ,"a" ,"c" ,"a" ,"a" ,"b" ,"d" ,"b" ,"a" ,"d" ,"b" ,"b" ,"d" ,"d" ,"c" ,"c" ,"b" ,"a" ,"d" ,"b" ,"a"]},
//     { "044" : ["d","b","b","d","c","c","c","b","a","d","d","a","d","b","b","a","b","a","d","a","b","d","a","b","c","c","d","d","c","c"]},
//     { "045" : ["a","d","a","a","c","d","b","b","d","d","b","b","d","a","b","b","b","b","d","a","b","d","d","d","c","d","c","b","b","b"]}
// ]
export type ProgramCode = "041" | "042" | "043" | "044" | "045";

export type ProgramItem = {
    [key in ProgramCode]?: string[];
};

export const programs: ProgramItem[] = [
    { "041": ["a","d","c","b","d","a","a","d","c","b","b","c","d","d","b","d","b","d","a","b","a","b","c","a","c","a","c","c","b","d"] },
    { "042": ["a","b","a","b","d","a","c","a","c","c","b","d","b","d","b","d","c","d","d","d","a","c","a","a","b","c","a","a","b","a"] },
    { "043": ["d","b","b","b","c","d","c","d","d","d","a","c","a","a","b","d","b","a","d","b","b","d","d","c","c","b","a","d","b","a"] },
    { "044": ["d","b","b","d","c","c","c","b","a","d","d","a","d","b","b","a","b","a","d","a","b","d","a","b","c","c","d","d","c","c"] },
    { "045": ["a","d","a","a","c","d","b","b","d","d","b","b","d","a","b","b","b","b","d","a","b","d","d","d","c","d","c","b","b","b"] }
];


const p042 = ["a","b","a","b","d","a","c","a","c","c","b","d","b","d","b","d","c","d","d","d","a","c","a","a","b","c","a","a","b","a"]