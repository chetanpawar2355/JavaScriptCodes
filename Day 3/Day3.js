const level_3 = (sp) => {
    console.log(sp);
}

const level_2 = ((bhoom, level_3) => {
    console.log(bhoom);
    level_3("Level 3 : Shrikant Pawar")
})

const level_1 = ((cp, level_2) => {
    console.log(cp);
    level_2("Level 2 : Bhumika Patil", level_3)
})

const loading = ((src, level_1) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = level_1("Level 1 : Chetan Pawar", level_2);
    document.head.append(sc);
})

loading("https://www.google.com", level_1);