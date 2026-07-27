/* ===========================================================
   AFRICAN INDUSTRIAL REVOLUTION (AIR)
   EDUCATION DATABASE - VERSION 1
=========================================================== */

const SUBJECT_STATUS = {
    ACTIVE: "Active",
    RECRUITING: "Recruiting"
};

const AIR_EDUCATION_DATABASE = {

    
    ZM: {

        name: "Zambia",

        flag: "🇿🇲",

        curriculum: "School Certificate Examination",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "ZM-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-MAT-G12"

            },

            {

                code: "ZM-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-PHY-G12"

            },

            {

                code: "ZM-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-CHE-G12"

            },

            {

                code: "ZM-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-ACC-G12"

            },

            {

                code: "ZM-ENG-G12",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-ENG-G12"

            },

            {

                code: "ZM-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZM-KIS-G12"

            }

        ]

    },
    
    SZ: {

        name: "Eswatini",

        flag: "🇸🇿",

        curriculum: "Eswatini General Certificate of Secondary Education (EGCSE)",

        finalLevel: {

            code: "EGCSE",

            name: "Eswatini General Certificate of Secondary Education"

        },

        subjects: [

            {

                code: "SZ-MAT-EGCSE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-MAT-EGCSE"

            },

            {

                code: "SZ-PHY-EGCSE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-PHY-EGCSE"

            },

            {

                code: "SZ-CHE-EGCSE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-CHE-EGCSE"

            },

            {

                code: "SZ-ACC-EGCSE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-ACC-EGCSE"

            },

            {

                code: "SZ-ENG-EGCSE",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-ENG-EGCSE"

            },

            {

                code: "SZ-KIS-EGCSE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SZ-KIS-EGCSE"

            }

        ]

    },
    
        SC: {

        name: "Seychelles",

        flag: "🇸🇨",

        curriculum: "Secondary Education Certificate (IGCSE / Advanced Level)",

        finalLevel: {

            code: "ALEVEL",

            name: "Advanced Level"

        },

        subjects: [

            {

                code: "SC-MAT-ALEVEL",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-MAT-ALEVEL"

            },

            {

                code: "SC-PHY-ALEVEL",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-PHY-ALEVEL"

            },

            {

                code: "SC-CHE-ALEVEL",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-CHE-ALEVEL"

            },

            {

                code: "SC-ACC-ALEVEL",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-ACC-ALEVEL"

            },

            {

                code: "SC-ENG-ALEVEL",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-ENG-ALEVEL"

            },

            {

                code: "SC-KIS-ALEVEL",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SC-KIS-ALEVEL"

            }

        ]

    },
    
        NA: {

        name: "Namibia",

        flag: "🇳🇦",

        curriculum: "Namibia Senior Secondary Certificate (NSSC)",

        finalLevel: {

            code: "NSSC",

            name: "Namibia Senior Secondary Certificate"

        },

        subjects: [

            {

                code: "NA-MAT-NSSC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-MAT-NSSC"

            },

            {

                code: "NA-PHY-NSSC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-PHY-NSSC"

            },

            {

                code: "NA-CHE-NSSC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-CHE-NSSC"

            },

            {

                code: "NA-ACC-NSSC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-ACC-NSSC"

            },

            {

                code: "NA-ENG-NSSC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-ENG-NSSC"

            },

            {

                code: "NA-KIS-NSSC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NA-KIS-NSSC"

            }

        ]

    },
    
        MZ: {

        name: "Mozambique",

        flag: "🇲🇿",

        curriculum: "Ensino Secundário Geral",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "MZ-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-MAT-G12"

            },

            {

                code: "MZ-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-PHY-G12"

            },

            {

                code: "MZ-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-CHE-G12"

            },

            {

                code: "MZ-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-ACC-G12"

            },

            {

                code: "MZ-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-ENG-G12"

            },

            {

                code: "MZ-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MZ-KIS-G12"

            }

        ]

    },
    
        MU: {

        name: "Mauritius",

        flag: "🇲🇺",

        curriculum: "Higher School Certificate (HSC)",

        finalLevel: {

            code: "HSC",

            name: "Higher School Certificate"

        },

        subjects: [

            {

                code: "MU-MAT-HSC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-MAT-HSC"

            },

            {

                code: "MU-PHY-HSC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-PHY-HSC"

            },

            {

                code: "MU-CHE-HSC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-CHE-HSC"

            },

            {

                code: "MU-ACC-HSC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-ACC-HSC"

            },

            {

                code: "MU-ENG-HSC",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-ENG-HSC"

            },

            {

                code: "MU-KIS-HSC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MU-KIS-HSC"

            }

        ]

    },
    
        MW: {

        name: "Malawi",

        flag: "🇲🇼",

        curriculum: "Malawi School Certificate of Education (MSCE)",

        finalLevel: {

            code: "MSCE",

            name: "MSCE"

        },

        subjects: [

            {

                code: "MW-MAT-MSCE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-MAT-MSCE"

            },

            {

                code: "MW-PHY-MSCE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-PHY-MSCE"

            },

            {

                code: "MW-CHE-MSCE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-CHE-MSCE"

            },

            {

                code: "MW-ACC-MSCE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-ACC-MSCE"

            },

            {

                code: "MW-ENG-MSCE",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-ENG-MSCE"

            },

            {

                code: "MW-KIS-MSCE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MW-KIS-MSCE"

            }

        ]

    },
    
        MG: {

        name: "Madagascar",

        flag: "🇲🇬",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "MG-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-MAT-BAC"

            },

            {

                code: "MG-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-PHY-BAC"

            },

            {

                code: "MG-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-CHE-BAC"

            },

            {

                code: "MG-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-ACC-BAC"

            },

            {

                code: "MG-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-ENG-BAC"

            },

            {

                code: "MG-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MG-KIS-BAC"

            }

        ]

    },
    
        LS: {

        name: "Lesotho",

        flag: "🇱🇸",

        curriculum: "Lesotho General Certificate of Secondary Education (LGCSE)",

        finalLevel: {

            code: "LGCSE",

            name: "LGCSE"

        },

        subjects: [

            {

                code: "LS-MAT-LGCSE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-MAT-LGCSE"

            },

            {

                code: "LS-PHY-LGCSE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-PHY-LGCSE"

            },

            {

                code: "LS-CHE-LGCSE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-CHE-LGCSE"

            },

            {

                code: "LS-ACC-LGCSE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-ACC-LGCSE"

            },

            {

                code: "LS-ENG-LGCSE",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-ENG-LGCSE"

            },

            {

                code: "LS-KIS-LGCSE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LS-KIS-LGCSE"

            }

        ]

    },
    
        KM: {

        name: "Comoros",

        flag: "🇰🇲",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "KM-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-MAT-BAC"

            },

            {

                code: "KM-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-PHY-BAC"

            },

            {

                code: "KM-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-CHE-BAC"

            },

            {

                code: "KM-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-ACC-BAC"

            },

            {

                code: "KM-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-ENG-BAC"

            },

            {

                code: "KM-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KM-KIS-BAC"

            }

        ]

    },
    
        BW: {

        name: "Botswana",

        flag: "🇧🇼",

        curriculum: "Botswana General Certificate of Secondary Education (BGCSE)",

        finalLevel: {

            code: "BGCSE",

            name: "BGCSE"

        },

        subjects: [

            {

                code: "BW-MAT-BGCSE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-MAT-BGCSE"

            },

            {

                code: "BW-PHY-BGCSE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-PHY-BGCSE"

            },

            {

                code: "BW-CHE-BGCSE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-CHE-BGCSE"

            },

            {

                code: "BW-ACC-BGCSE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-ACC-BGCSE"

            },

            {

                code: "BW-ENG-BGCSE",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-ENG-BGCSE"

            },

            {

                code: "BW-KIS-BGCSE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BW-KIS-BGCSE"

            }

        ]

    },
    
        AO: {

        name: "Angola",

        flag: "🇦🇴",

        curriculum: "Ensino Secundário",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "AO-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-MAT-G12"

            },

            {

                code: "AO-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-PHY-G12"

            },

            {

                code: "AO-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-CHE-G12"

            },

            {

                code: "AO-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-ACC-G12"

            },

            {

                code: "AO-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-ENG-G12"

            },

            {

                code: "AO-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "AO-KIS-G12"

            }

        ]

    },
    
        ST: {

        name: "São Tomé and Príncipe",

        flag: "🇸🇹",

        curriculum: "National Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "ST-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-MAT-G12"

            },

            {

                code: "ST-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-PHY-G12"

            },

            {

                code: "ST-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-CHE-G12"

            },

            {

                code: "ST-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-ACC-G12"

            },

            {

                code: "ST-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-ENG-G12"

            },

            {

                code: "ST-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ST-KIS-G12"

            }

        ]

    },
    
        GA: {

        name: "Gabon",

        flag: "🇬🇦",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "GA-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-MAT-BAC"

            },

            {

                code: "GA-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-PHY-BAC"

            },

            {

                code: "GA-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-CHE-BAC"

            },

            {

                code: "GA-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-ACC-BAC"

            },

            {

                code: "GA-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-ENG-BAC"

            },

            {

                code: "GA-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GA-KIS-BAC"

            }

        ]

    },
    
        GQ: {

        name: "Equatorial Guinea",

        flag: "🇬🇶",

        curriculum: "Bachillerato",

        finalLevel: {

            code: "BACH",

            name: "Bachillerato"

        },

        subjects: [

            {

                code: "GQ-MAT-BACH",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-MAT-BACH"

            },

            {

                code: "GQ-PHY-BACH",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-PHY-BACH"

            },

            {

                code: "GQ-CHE-BACH",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-CHE-BACH"

            },

            {

                code: "GQ-ACC-BACH",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-ACC-BACH"

            },

            {

                code: "GQ-ENG-BACH",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-ENG-BACH"

            },

            {

                code: "GQ-KIS-BACH",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GQ-KIS-BACH"

            }

        ]

    },
    
        CD: {

        name: "Democratic Republic of the Congo",

        flag: "🇨🇩",

        curriculum: "Diplôme d'État",

        finalLevel: {

            code: "DE",

            name: "Diplôme d'État"

        },

        subjects: [

            {

                code: "CD-MAT-DE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-MAT-DE"

            },

            {

                code: "CD-PHY-DE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-PHY-DE"

            },

            {

                code: "CD-CHE-DE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-CHE-DE"

            },

            {

                code: "CD-ACC-DE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-ACC-DE"

            },

            {

                code: "CD-ENG-DE",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-ENG-DE"

            },

            {

                code: "CD-KIS-DE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CD-KIS-DE"

            }

        ]

    },
    
        CG: {

        name: "Republic of the Congo",

        flag: "🇨🇬",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "CG-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-MAT-BAC"

            },

            {

                code: "CG-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-PHY-BAC"

            },

            {

                code: "CG-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-CHE-BAC"

            },

            {

                code: "CG-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-ACC-BAC"

            },

            {

                code: "CG-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-ENG-BAC"

            },

            {

                code: "CG-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CG-KIS-BAC"

            }

        ]

    },
    
        TD: {

        name: "Chad",

        flag: "🇹🇩",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "TD-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-MAT-BAC"

            },

            {

                code: "TD-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-PHY-BAC"

            },

            {

                code: "TD-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-CHE-BAC"

            },

            {

                code: "TD-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-ACC-BAC"

            },

            {

                code: "TD-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-ENG-BAC"

            },

            {

                code: "TD-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TD-KIS-BAC"

            }

        ]

    },
    
        CF: {

        name: "Central African Republic",

        flag: "🇨🇫",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "CF-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-MAT-BAC"

            },

            {

                code: "CF-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-PHY-BAC"

            },

            {

                code: "CF-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-CHE-BAC"

            },

            {

                code: "CF-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-ACC-BAC"

            },

            {

                code: "CF-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-ENG-BAC"

            },

            {

                code: "CF-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CF-KIS-BAC"

            }

        ]

    },
    
        CM: {

        name: "Cameroon",

        flag: "🇨🇲",

        curriculum: "GCE Advanced Level / Baccalauréat",

        finalLevel: {

            code: "ALEVEL",

            name: "Advanced Level"

        },

        subjects: [

            {

                code: "CM-MAT-ALEVEL",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-MAT-ALEVEL"

            },

            {

                code: "CM-PHY-ALEVEL",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-PHY-ALEVEL"

            },

            {

                code: "CM-CHE-ALEVEL",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-CHE-ALEVEL"

            },

            {

                code: "CM-ACC-ALEVEL",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-ACC-ALEVEL"

            },

            {

                code: "CM-ENG-ALEVEL",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-ENG-ALEVEL"

            },

            {

                code: "CM-KIS-ALEVEL",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CM-KIS-ALEVEL"

            }

        ]

    },
    
        MR: {

        name: "Mauritania",

        flag: "🇲🇷",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "MR-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-MAT-BAC"

            },

            {

                code: "MR-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-PHY-BAC"

            },

            {

                code: "MR-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-CHE-BAC"

            },

            {

                code: "MR-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-ACC-BAC"

            },

            {

                code: "MR-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-ENG-BAC"

            },

            {

                code: "MR-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MR-KIS-BAC"

            }

        ]

    },
    
        CV: {

        name: "Cabo Verde",

        flag: "🇨🇻",

        curriculum: "National Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "CV-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-MAT-G12"

            },

            {

                code: "CV-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-PHY-G12"

            },

            {

                code: "CV-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-CHE-G12"

            },

            {

                code: "CV-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-ACC-G12"

            },

            {

                code: "CV-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-ENG-G12"

            },

            {

                code: "CV-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CV-KIS-G12"

            }

        ]

    },
    
        BJ: {

        name: "Benin",

        flag: "🇧🇯",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "BJ-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-MAT-BAC"

            },

            {

                code: "BJ-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-PHY-BAC"

            },

            {

                code: "BJ-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-CHE-BAC"

            },

            {

                code: "BJ-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-ACC-BAC"

            },

            {

                code: "BJ-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-ENG-BAC"

            },

            {

                code: "BJ-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BJ-KIS-BAC"

            }

        ]

    },
    
        TG: {

        name: "Togo",

        flag: "🇹🇬",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "TG-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-MAT-BAC"

            },

            {

                code: "TG-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-PHY-BAC"

            },

            {

                code: "TG-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-CHE-BAC"

            },

            {

                code: "TG-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-ACC-BAC"

            },

            {

                code: "TG-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-ENG-BAC"

            },

            {

                code: "TG-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TG-KIS-BAC"

            }

        ]

    },
    
        GH: {

        name: "Ghana",

        flag: "🇬🇭",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "GH-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-MAT-G12"

            },

            {

                code: "GH-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-PHY-G12"

            },

            {

                code: "GH-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-CHE-G12"

            },

            {

                code: "GH-FACC-G12",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-FACC-G12"

            },

            {

                code: "GH-ENG-G12",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-ENG-G12"

            },

            {

                code: "GH-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GH-KIS-G12"

            }

        ]

    },
    
        CI: {

        name: "Côte d'Ivoire",

        flag: "🇨🇮",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "CI-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-MAT-BAC"

            },

            {

                code: "CI-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-PHY-BAC"

            },

            {

                code: "CI-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-CHE-BAC"

            },

            {

                code: "CI-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-ACC-BAC"

            },

            {

                code: "CI-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-ENG-BAC"

            },

            {

                code: "CI-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "CI-KIS-BAC"

            }

        ]

    },
    
        LR: {

        name: "Liberia",

        flag: "🇱🇷",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "LR-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-MAT-G12"

            },

            {

                code: "LR-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-PHY-G12"

            },

            {

                code: "LR-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-CHE-G12"

            },

            {

                code: "LR-FACC-G12",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-FACC-G12"

            },

            {

                code: "LR-ENG-G12",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-ENG-G12"

            },

            {

                code: "LR-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LR-KIS-G12"

            }

        ]

    },
    
        SL: {

        name: "Sierra Leone",

        flag: "🇸🇱",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "SL-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-MAT-G12"

            },

            {

                code: "SL-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-PHY-G12"

            },

            {

                code: "SL-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-CHE-G12"

            },

            {

                code: "SL-FACC-G12",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-FACC-G12"

            },

            {

                code: "SL-ENG-G12",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-ENG-G12"

            },

            {

                code: "SL-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SL-KIS-G12"

            }

        ]

    },
    
        GW: {

        name: "Guinea-Bissau",

        flag: "🇬🇼",

        curriculum: "National Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "GW-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-MAT-G12"

            },

            {

                code: "GW-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-PHY-G12"

            },

            {

                code: "GW-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-CHE-G12"

            },

            {

                code: "GW-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-ACC-G12"

            },

            {

                code: "GW-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-ENG-G12"

            },

            {

                code: "GW-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GW-KIS-G12"

            }

        ]

    },
    
        GN: {

        name: "Guinea",

        flag: "🇬🇳",

        curriculum: "Baccalauréat Unique",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "GN-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-MAT-BAC"

            },

            {

                code: "GN-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-PHY-BAC"

            },

            {

                code: "GN-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-CHE-BAC"

            },

            {

                code: "GN-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-ACC-BAC"

            },

            {

                code: "GN-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-ENG-BAC"

            },

            {

                code: "GN-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GN-KIS-BAC"

            }

        ]

    },
    
        GM: {

        name: "The Gambia",

        flag: "🇬🇲",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "GM-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-MAT-G12"

            },

            {

                code: "GM-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-PHY-G12"

            },

            {

                code: "GM-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-CHE-G12"

            },

            {

                code: "GM-FACC-G12",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-FACC-G12"

            },

            {

                code: "GM-ENG-G12",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-ENG-G12"

            },

            {

                code: "GM-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "GM-KIS-G12"

            }

        ]

    },
    
        SN: {

        name: "Senegal",

        flag: "🇸🇳",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "SN-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-MAT-BAC"

            },

            {

                code: "SN-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-PHY-BAC"

            },

            {

                code: "SN-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-CHE-BAC"

            },

            {

                code: "SN-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-ACC-BAC"

            },

            {

                code: "SN-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-ENG-BAC"

            },

            {

                code: "SN-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SN-KIS-BAC"

            }

        ]

    },
    
        BF: {

        name: "Burkina Faso",

        flag: "🇧🇫",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "BF-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-MAT-BAC"

            },

            {

                code: "BF-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-PHY-BAC"

            },

            {

                code: "BF-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-CHE-BAC"

            },

            {

                code: "BF-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-ACC-BAC"

            },

            {

                code: "BF-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-ENG-BAC"

            },

            {

                code: "BF-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BF-KIS-BAC"

            }

        ]

    },
    
        ML: {

        name: "Mali",

        flag: "🇲🇱",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "ML-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-MAT-BAC"

            },

            {

                code: "ML-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-PHY-BAC"

            },

            {

                code: "ML-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-CHE-BAC"

            },

            {

                code: "ML-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-ACC-BAC"

            },

            {

                code: "ML-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-ENG-BAC"

            },

            {

                code: "ML-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ML-KIS-BAC"

            }

        ]

    },
    
        NE: {

        name: "Niger",

        flag: "🇳🇪",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "NE-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-MAT-BAC"

            },

            {

                code: "NE-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-PHY-BAC"

            },

            {

                code: "NE-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-CHE-BAC"

            },

            {

                code: "NE-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-ACC-BAC"

            },

            {

                code: "NE-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-ENG-BAC"

            },

            {

                code: "NE-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NE-KIS-BAC"

            }

        ]

    },
    
        MA: {

        name: "Morocco",

        flag: "🇲🇦",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "MA-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-MAT-BAC"

            },

            {

                code: "MA-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-PHY-BAC"

            },

            {

                code: "MA-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-CHE-BAC"

            },

            {

                code: "MA-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-ACC-BAC"

            },

            {

                code: "MA-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-ENG-BAC"

            },

            {

                code: "MA-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "MA-KIS-BAC"

            }

        ]

    },
    
        DZ: {

        name: "Algeria",

        flag: "🇩🇿",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "DZ-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-MAT-BAC"

            },

            {

                code: "DZ-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-PHY-BAC"

            },

            {

                code: "DZ-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-CHE-BAC"

            },

            {

                code: "DZ-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-ACC-BAC"

            },

            {

                code: "DZ-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-ENG-BAC"

            },

            {

                code: "DZ-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DZ-KIS-BAC"

            }

        ]

    },
    
        TN: {

        name: "Tunisia",

        flag: "🇹🇳",

        curriculum: "Baccalauréat",

        finalLevel: {

            code: "BAC",

            name: "Baccalaureate"

        },

        subjects: [

            {

                code: "TN-MAT-BAC",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-MAT-BAC"

            },

            {

                code: "TN-PHY-BAC",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-PHY-BAC"

            },

            {

                code: "TN-CHE-BAC",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-CHE-BAC"

            },

            {

                code: "TN-ACC-BAC",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-ACC-BAC"

            },

            {

                code: "TN-ENG-BAC",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-ENG-BAC"

            },

            {

                code: "TN-KIS-BAC",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TN-KIS-BAC"

            }

        ]

    },
    
        LY: {

        name: "Libya",

        flag: "🇱🇾",

        curriculum: "Libyan Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "LY-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-MAT-G12"

            },

            {

                code: "LY-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-PHY-G12"

            },

            {

                code: "LY-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-CHE-G12"

            },

            {

                code: "LY-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-ACC-G12"

            },

            {

                code: "LY-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-ENG-G12"

            },

            {

                code: "LY-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "LY-KIS-G12"

            }

        ]

    },
    
        EG: {

        name: "Egypt",

        flag: "🇪🇬",

        curriculum: "Thanaweya Amma",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "EG-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-MAT-G12"

            },

            {

                code: "EG-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-PHY-G12"

            },

            {

                code: "EG-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-CHE-G12"

            },

            {

                code: "EG-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-ACC-G12"

            },

            {

                code: "EG-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-ENG-G12"

            },

            {

                code: "EG-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "EG-KIS-G12"

            }

        ]

    },
    
    SD: {

        name: "Sudan",

        flag: "🇸🇩",

        curriculum: "Sudan Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "SD-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-MAT-G12"

            },

            {

                code: "SD-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-PHY-G12"

            },

            {

                code: "SD-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-CHE-G12"

            },

            {

                code: "SD-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-ACC-G12"

            },

            {

                code: "SD-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-ENG-G12"

            },

            {

                code: "SD-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SD-KIS-G12"

            }

        ]

    },
    
        SS: {

        name: "South Sudan",

        flag: "🇸🇸",

        curriculum: "South Sudan Secondary Education",

        finalLevel: {

            code: "S4",

            name: "Senior 4"

        },

        subjects: [

            {

                code: "SS-MAT-S4",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-MAT-S4"

            },

            {

                code: "SS-PHY-S4",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-PHY-S4"

            },

            {

                code: "SS-CHE-S4",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-CHE-S4"

            },

            {

                code: "SS-ACC-S4",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-ACC-S4"

            },

            {

                code: "SS-ENG-S4",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-ENG-S4"

            },

            {

                code: "SS-KIS-S4",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SS-KIS-S4"

            }

        ]

    },
    
        DJ: {

        name: "Djibouti",

        flag: "🇩🇯",

        curriculum: "Djibouti Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "DJ-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-MAT-G12"

            },

            {

                code: "DJ-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-PHY-G12"

            },

            {

                code: "DJ-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-CHE-G12"

            },

            {

                code: "DJ-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-ACC-G12"

            },

            {

                code: "DJ-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-ENG-G12"

            },

            {

                code: "DJ-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "DJ-KIS-G12"

            
            }
        ]
    
        },
        so: {

        name: "Somalia",

        flag: "🇸🇴",

        curriculum: "Somalia Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "SO-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-MAT-G12"

            },

            {

                code: "SO-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-PHY-G12"

            },

            {

                code: "SO-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-CHE-G12"

            },

            {

                code: "SO-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-ACC-G12"

            },

            {

                code: "SO-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-ENG-G12"

            },

            {

                code: "SO-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "SO-KIS-G12"

            }

        ]

    },
    
        ER: {

        name: "Eritrea",

        flag: "🇪🇷",

        curriculum: "Eritrean Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "ER-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-MAT-G12"

            },

            {

                code: "ER-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-PHY-G12"

            },

            {

                code: "ER-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-CHE-G12"

            },

            {

                code: "ER-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-ACC-G12"

            },

            {

                code: "ER-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-ENG-G12"

            },

            {

                code: "ER-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ER-KIS-G12"

            }

        ]

    },
    
        ET: {

        name: "Ethiopia",

        flag: "🇪🇹",

        curriculum: "Ethiopian Secondary Education",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "ET-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-MAT-G12"

            },

            {

                code: "ET-PHY-G12",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-PHY-G12"

            },

            {

                code: "ET-CHE-G12",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-CHE-G12"

            },

            {

                code: "ET-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-ACC-G12"

            },

            {

                code: "ET-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-ENG-G12"

            },

            {

                code: "ET-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ET-KIS-G12"

            }

        ]

    },
    
        BI: {

        name: "Burundi",

        flag: "🇧🇮",

        curriculum: "Burundi Upper Secondary",

        finalLevel: {

            code: "S4",

            name: "Senior 4"

        },

        subjects: [

            {

                code: "BI-MAT-S4",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-MAT-S4"

            },

            {

                code: "BI-PHY-S4",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-PHY-S4"

            },

            {

                code: "BI-CHE-S4",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-CHE-S4"

            },

            {

                code: "BI-ACC-S4",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-ACC-S4"

            },

            {

                code: "BI-ENG-S4",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-ENG-S4"

            },

            {

                code: "BI-KIS-S4",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "BI-KIS-S4"

            }

        ]

    },
    
        RW: {

        name: "Rwanda",

        flag: "🇷🇼",

        curriculum: "Rwanda Upper Secondary",

        finalLevel: {

            code: "S6",

            name: "Senior 6"

        },

        subjects: [

            {

                code: "RW-MAT-S6",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-MAT-S6"

            },

            {

                code: "RW-PHY-S6",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-PHY-S6"

            },

            {

                code: "RW-CHE-S6",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-CHE-S6"

            },

            {

                code: "RW-ACC-S6",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-ACC-S6"

            },

            {

                code: "RW-ENG-S6",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-ENG-S6"

            },

            {

                code: "RW-KIS-S6",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "RW-KIS-S6"

            }

        ]

    },
    
    
    ZA: {

        name: "South Africa",

        flag: "🇿🇦",

        curriculum: "Curriculum and Assessment Policy Statement (CAPS)",

        finalLevel: {

            code: "G12",

            name: "Grade 12"

        },

        subjects: [

            {

                code: "ZA-MAT-G12",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.ACTIVE,

                resourceFolder: "ZA-MAT-G12"

            },

            {

                code: "ZA-PS-G12",

                shortName: "PS",

                name: "Physical Sciences",

                category: "Physical Science",

                status: SUBJECT_STATUS.ACTIVE,

                resourceFolder: "ZA-PS-G12"

            },

            {

                code: "ZA-ACC-G12",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZA-ACC-G12"

            },

            {

                code: "ZA-ML-G12",

                shortName: "ML",

                name: "Mathematical Literacy",

                category: "Mathematical Literacy",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZA-ML-G12"

            },

            {

                code: "ZA-ENG-G12",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZA-ENG-G12"

            },

            {

                code: "ZA-KIS-G12",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "ZA-KIS-G12"

            }

        ]

    },
    
    NG: {

        name: "Nigeria",

        flag: "🇳🇬",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "WASSCE",

            name: "West African Senior School Certificate Examination"

        },

        subjects: [

            {

                code: "NG-MAT-WASSCE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-MAT-WASSCE"

            },

            {

                code: "NG-PHY-WASSCE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-PHY-WASSCE"

            },

            {

                code: "NG-CHE-WASSCE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-CHE-WASSCE"

            },

            {

                code: "NG-FACC-WASSCE",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-FACC-WASSCE"

            },

            {

                code: "NG-ENG-WASSCE",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-ENG-WASSCE"

            },

            {

                code: "NG-KIS-WASSCE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-KIS-WASSCE"

            }

        ]

    },
    

    UG: {

        name: "Uganda",

        flag: "🇺🇬",

        curriculum: "Uganda Advanced Certificate of Education (UACE)",

        finalLevel: {

            code: "UACE",

            name: "Uganda Advanced Certificate of Education"

        },

        subjects: [

            {

                code: "UG-MAT-UACE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-MAT-UACE"

            },

            {

                code: "UG-PHY-UACE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-PHY-UACE"

            },

            {

                code: "UG-CHE-UACE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-CHE-UACE"

            },

            {

                code: "UG-ACC-UACE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-ACC-UACE"

            },

            {

                code: "UG-ENG-UACE",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-ENG-UACE"

            },

            {

                code: "UG-KIS-UACE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "UG-KIS-UACE"

            }

        ]

    },
    
        TZ: {

        name: "Tanzania",

        flag: "🇹🇿",

        curriculum: "Advanced Certificate of Secondary Education Examination (ACSEE)",

        finalLevel: {

            code: "ACSEE",

            name: "Advanced Certificate of Secondary Education Examination",

        },

        subjects: [

            {

                code: "TZ-MAT-ACSEE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-MAT-ACSEE"

            },

            {

                code: "TZ-PHY-ACSEE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-PHY-ACSEE"

            },

            {

                code: "TZ-CHE-ACSEE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-CHE-ACSEE"

            },

            {

                code: "TZ-ACC-ACSEE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-ACC-ACSEE"

            },

            {

                code: "TZ-ENG-ACSEE",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-ENG-ACSEE"

            },

            {

                code: "TZ-KIS-ACSEE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "TZ-KIS-ACSEE"

            }

        ]

    },

    NG: {

        name: "Nigeria",

        flag: "🇳🇬",

        curriculum: "West African Senior School Certificate Examination (WASSCE)",

        finalLevel: {

            code: "WASSCE",

            name: "West African Senior School Certificate Examination"

        },

        subjects: [

            {

                code: "NG-MAT-WASSCE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-MAT-WASSCE"

            },

            {

                code: "NG-PHY-WASSCE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-PHY-WASSCE"

            },

            {

                code: "NG-CHE-WASSCE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-CHE-WASSCE"

            },

            {

                code: "NG-FACC-WASSCE",

                shortName: "FACC",

                name: "Financial Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-FACC-WASSCE"

            },

            {

                code: "NG-ENG-WASSCE",

                shortName: "ENG",

                name: "English Language",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-ENG-WASSCE"

            },

            {

                code: "NG-KIS-WASSCE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "NG-KIS-WASSCE"

            }

        ]

    },
    
        KE: {

        name: "Kenya",

        flag: "🇰🇪",

        curriculum: "Kenya Certificate of Secondary Education (KCSE)",

        finalLevel: {

            code: "KCSE",

            name: "Kenya Certificate of Secondary Education"

        },

        subjects: [

            {

                code: "KE-MAT-KCSE",

                shortName: "MAT",

                name: "Mathematics",

                category: "Mathematics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-MAT-KCSE"

            },

            {

                code: "KE-PHY-KCSE",

                shortName: "PHY",

                name: "Physics",

                category: "Physics",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-PHY-KCSE"

            },

            {

                code: "KE-CHE-KCSE",

                shortName: "CHE",

                name: "Chemistry",

                category: "Chemistry",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-CHE-KCSE"

            },

            {

                code: "KE-ACC-KCSE",

                shortName: "ACC",

                name: "Accounting",

                category: "Accounting",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-ACC-KCSE"

            },

            {

                code: "KE-ENG-KCSE",

                shortName: "ENG",

                name: "English",

                category: "English",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-ENG-KCSE"

            },

            {

                code: "KE-KIS-KCSE",

                shortName: "KIS",

                name: "Kiswahili",

                category: "Kiswahili",

                status: SUBJECT_STATUS.RECRUITING,

                resourceFolder: "KE-KIS-KCSE"

            }

        ]

    },


};
