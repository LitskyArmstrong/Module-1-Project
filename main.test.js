import { sort, search, newsList } from "./main.js";

//Example testing for search function
// test("Search function testing", () => {
//   expect(search(newsList)).toBe("I am a cool web developer");
// });

test("Search function testing exact.", () => {
    expect(search("'Nightmare' TV show 'Euphoria — health threat or high art?"))
    .toEqual(["'Nightmare' TV show 'Euphoria — health threat or high art?"]);
});

test("Search function with keyword.", () =>{
    expect(search("What")).toEqual([
        "What films should an aspiring journalist watch?",
        "What books should an aspiring journalist read?"
    ]);
});

test("Sort news list function ascending testing" ,() =>{
    expect(sort("ascending")).toEqual([
        "'Nightmare' TV show 'Euphoria — health threat or high art?",
        'Buried underpants and tea bags help scientists evaluate soil',
        'Decoder: Armenia in a bind as Ukraine war resets global order',
        'Decoder: Mining asteroids for minerals can help spare Earth',
        'Marie Colvin shined a light on war-torn corners of the world',
        'Media glare can enrich tennis pros yet imperil mental health',
        'What books should an aspiring journalist read?',
        'What films should an aspiring journalist watch?'
    ]);
});

test("Sort news list function descending testing" ,() =>{
    expect(sort("descending")).toEqual([
        'What films should an aspiring journalist watch?',
        'What books should an aspiring journalist read?',
        'Media glare can enrich tennis pros yet imperil mental health',
        'Marie Colvin shined a light on war-torn corners of the world',
        'Decoder: Mining asteroids for minerals can help spare Earth',
        'Decoder: Armenia in a bind as Ukraine war resets global order',
        'Buried underpants and tea bags help scientists evaluate soil',
        "'Nightmare' TV show 'Euphoria — health threat or high art?"
    ]);
});

